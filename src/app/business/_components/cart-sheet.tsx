"use client"

import type React from "react"

import { useState, useEffect } from "react"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ShoppingCart } from "lucide-react"
import { useCartStore } from "@/app/business/_store/store"
import Cart from "@/app/business/_components/cart"

interface CartSheetProps {
    children: React.ReactNode
}

export default function CartSheet({ children }: CartSheetProps) {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { getTotalItems } = useCartStore() //-> can get items
    const totalItems = getTotalItems()

    // Subscribe to cart changes to auto-open sheet when items are added
    //const addItem = useCartStore((state) => state.addItem)

    // Override the addItem function to also open the sheet
    useCartStore.subscribe((state, prevState) => {
        if (mounted && state.items.length > prevState.items.length) {
            setOpen(true)
        }
    })

    // Handle hydration
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return children

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <div className="relative">
                    {children}
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                </div>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="flex items-center gap-2">
                        <ShoppingCart className="h-5 w-5" />
                        Tu carrito
                    </SheetTitle>
                </SheetHeader>
                <div className="mt-6 p-4">
                    <Cart />
                </div>
            </SheetContent>
        </Sheet>
    )
}
