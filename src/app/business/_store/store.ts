import { Product } from "@/types/products"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

export type CartItem = {
    product: Product
    quantity: number
}

type CartStore = {
    items: CartItem[]
    whatsapp: string
    addItem: (product: Product) => void
    removeItem: (productId: number) => void
    updateQuantity: (productId: number, quantity: number) => void
    clearCart: () => void
    getTotal: () => number
    getTotalItems: () => number
    setWhatsapp: (whatsapp: string) => void
}

// Función para obtener el username actual de la URL
const getCurrentUsername = (): string => {
    if (typeof window === "undefined") return "default"

    const pathname = window.location.pathname
    const segments = pathname.split("/")

    // Para rutas como /business/[username], el username está en segments[2]
    return segments[1] || "default"
}

// Funciones para manipular localStorage con prefijo dinámico basado en username
const getStorageKey = (key: string): string => {
    const username = getCurrentUsername()
    return `${username}-${key}`
}

const getStorageItem = (key: string): string | null => {
    if (typeof window === "undefined") return null
    return localStorage.getItem(getStorageKey(key))
}

const setStorageItem = (key: string, value: string): void => {
    if (typeof window === "undefined") return
    localStorage.setItem(getStorageKey(key), value)
}

const removeStorageItem = (key: string): void => {
    if (typeof window === "undefined") return
    localStorage.removeItem(getStorageKey(key))
}

// Storage personalizado que automáticamente usa el username como prefijo
const usernameBasedStorage = {
    getItem: (key: string) => getStorageItem(key),
    setItem: (key: string, value: string) => setStorageItem(key, value),
    removeItem: (key: string) => removeStorageItem(key),
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            whatsapp: "",

            addItem: (product: Product) => {
                const currentItems = get().items
                const existingItem = currentItems.find(
                    (item) => item.product.id === product.id
                )

                if (existingItem) {
                    set({
                        items: currentItems.map((item) =>
                            item.product.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    })
                } else {
                    set({ items: [...currentItems, { product, quantity: 1 }] })
                }
            },

            removeItem: (productId: number) => {
                set({
                    items: get().items.filter(
                        (item) => item.product.id !== productId
                    ),
                })
            },

            updateQuantity: (productId: number, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(productId)
                    return
                }

                set({
                    items: get().items.map((item) =>
                        item.product.id === productId
                            ? { ...item, quantity }
                            : item
                    ),
                })
            },

            clearCart: () => set({ items: [] }),

            getTotal: () => {
                return get().items.reduce(
                    (total, item) => total + item.product.price * item.quantity,
                    0
                )
            },

            getTotalItems: () => {
                return get().items.reduce(
                    (total, item) => total + item.quantity,
                    0
                )
            },
            setWhatsapp: (whatsapp: string) => set({ whatsapp }),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => usernameBasedStorage),
        }
    )
)
