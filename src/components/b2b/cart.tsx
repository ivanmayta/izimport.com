"use client"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react"
import { useCartStore } from "@/store/cart-store"
import { Whatsapp } from "@/icons/whatsapp"

export default function Cart() {
    const { items, whatsapp, removeItem, updateQuantity, getTotal, clearCart } =
        useCartStore()

    const handleWhatsAppCheckout = () => {
        if (items.length === 0) return

        // Format the order message for WhatsApp
        let message = "¡Hola! Me gustaría hacer un pedido:\n\n"

        items.forEach((item) => {
            message += `*${item.product.name}*\n`
            message += `Cantidad: ${item.quantity}\n`
            message += `precio: s/.${item.product.price.toFixed(2)}\n`
            message += `Subtotal: s/.${(
                item.quantity * item.product.price
            ).toFixed(2)}\n\n`
        })

        message += `*Total: s/.${getTotal().toFixed(2)}*\n\n`
        message += "Por favor cofirma tu orden. Gracias!"

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message)

        // Open WhatsApp with the pre-filled message
        // Replace '1234567890' with your actual WhatsApp business number
        window.open(
            `https://wa.me/51${whatsapp}?text=${encodedMessage}`,
            "_blank"
        )
    }

    return (
        <div className="flex flex-col gap-4">
            {items.length === 0 ? (
                <div className="text-center py-8">
                    <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">
                        Tu carrito está vacio
                    </p>
                </div>
            ) : (
                <>
                    <div className="space-y-4">
                        {items.map((item) => (
                            <div
                                key={item.product.id}
                                className="flex gap-3 py-2 border-b"
                            >
                                <div className="relative h-16 w-16 flex-shrink-0">
                                    <Image
                                        src={
                                            item.product.image ||
                                            "/placeholder.svg"
                                        }
                                        alt={item.product.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="font-medium">
                                        {item.product.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        s/.{item.product.price.toFixed(2)}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-6 w-6"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.product.id,
                                                    item.quantity - 1
                                                )
                                            }
                                        >
                                            <Minus className="h-3 w-3" />
                                        </Button>
                                        <Input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                updateQuantity(
                                                    item.product.id,
                                                    Number.parseInt(
                                                        e.target.value
                                                    ) || 0
                                                )
                                            }
                                            className="h-7 w-12 text-center"
                                        />
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="h-6 w-6"
                                            onClick={() =>
                                                updateQuantity(
                                                    item.product.id,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            <Plus className="h-3 w-3" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-6 w-6 ml-auto text-destructive"
                                            onClick={() =>
                                                removeItem(item.product.id)
                                            }
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {
                        //<Separator />
                    }

                    <div className="flex justify-between font-medium text-lg">
                        <span>Total:</span>
                        <span>s/.{getTotal().toFixed(2)}</span>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <Button
                            className="w-full"
                            onClick={handleWhatsAppCheckout}
                        >
                            Pedir via WhatsApp
                            <Whatsapp className="h-5 w-5 ml-2" />
                        </Button>
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={clearCart}
                        >
                            Limpiar carrito
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}
