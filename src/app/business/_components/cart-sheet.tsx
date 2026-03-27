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
import { useIsMobile } from "@/hooks/use-mobile"

interface CartSheetProps {
    children: React.ReactNode
}

export default function CartSheet({ children }: CartSheetProps) {
    const [open, setOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [prevItemsLength, setPrevItemsLength] = useState(0)
    const isMobile = useIsMobile()
    const getTotalItems = useCartStore((state) => state.getTotalItems)
    const items = useCartStore((state) => state.items)
    const totalItems = getTotalItems()

    // Monitor changes in cart items to auto-open sheet when items are added
    // Only auto-open on desktop to avoid covering the entire screen on mobile
    useEffect(() => {
        if (
            mounted &&
            items.length > prevItemsLength &&
            items.length > 0 &&
            !isMobile
        ) {
            setOpen(true)
        }
        setPrevItemsLength(items.length)
    }, [items.length, mounted, prevItemsLength, isMobile])

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
                    <span className={`absolute -top-1.5 -right-1.5 text-[10px] font-black rounded-full h-4 w-4 flex items-center justify-center tabular-nums transition-colors ${totalItems > 0 ? "bg-zinc-950 text-white" : "bg-zinc-200 text-zinc-500"}`}>
                        {totalItems}
                    </span>
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
