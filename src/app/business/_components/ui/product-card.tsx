"use client"
import { cn } from "@/lib/utils"
import { type Product } from "@/types/products"
import { ShoppingCart, ZoomIn } from "lucide-react"
import { createContext, useContext } from "react"
import { ProductImage } from "../ui/product-image"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SafeHTMLRenderer } from "../safe-html-renderer"

const ProductCardContext = createContext<{ value: Product } | null>(null)

function useProductCardProvider() {
    const context = useContext(ProductCardContext)
    if (!context) {
        throw new Error(
            "useProductCardProvider must be used within a ProductCardProvider"
        )
    }
    return context
}

function Root({
    value,
    children,
    className,
    ...props
}: {
    value: Product
    children: React.ReactNode
} & React.ComponentProps<"div">) {
    return (
        <ProductCardContext.Provider value={{ value }}>
            <div
                className={cn("group flex flex-col h-full", className)}
                {...props}
            >
                {children}
            </div>
        </ProductCardContext.Provider>
    )
}

function Image({ className }: { className?: string }) {
    const { value } = useProductCardProvider()

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className={cn("relative cursor-pointer rounded-xl overflow-hidden bg-zinc-100 aspect-square mb-3", className)}>
                    <ProductImage product={value} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/20 transition-all duration-200 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-zinc-800 shadow-sm">
                            <ZoomIn className="w-3.5 h-3.5" />
                            Ver detalle
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-sm sm:max-w-md rounded-2xl p-0 overflow-hidden border-0 shadow-2xl">
                <div className="bg-zinc-50 aspect-square w-full">
                    <ProductImage
                        product={value}
                        className="w-full h-full object-contain p-4"
                    />
                </div>
                <div className="p-5 space-y-3">
                    <DialogTitle className="text-base font-bold text-zinc-950 leading-tight">
                        {value.name}
                    </DialogTitle>
                    <div className="flex items-baseline gap-1">
                        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">Precio</span>
                        <span className="text-xl font-black text-zinc-950 ml-1">s/.{value.price}</span>
                    </div>
                    {value.description && (
                        <div className="border-t border-zinc-100 pt-3">
                            <SafeHTMLRenderer
                                html={value.description}
                                className="product-content text-sm text-zinc-600 leading-relaxed"
                            />
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}

function Information({ className }: { className?: string }) {
    const { value } = useProductCardProvider()
    return (
        <div className={cn("flex flex-col flex-1 px-0.5 gap-0.5 mb-2", className)}>
            <p
                className="text-xs font-medium text-zinc-700 leading-snug line-clamp-2"
                title={value.name}
            >
                {value.name}
            </p>
            <p className="text-sm font-black text-zinc-950 tabular-nums">
                s/.{value.price}
            </p>
        </div>
    )
}

function Button({
    className,
    onClick,
}: {
    className?: string
    onClick: () => void
}) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "w-full mt-auto py-2 rounded-lg bg-zinc-950 text-white text-xs font-bold tracking-wide flex items-center justify-center gap-1.5 hover:bg-zinc-800 active:scale-[0.98] transition-all cursor-pointer",
                className
            )}
        >
            <ShoppingCart className="w-3.5 h-3.5" />
            Añadir
        </button>
    )
}

const ProductCard = {
    Root,
    Image,
    Information,
    Button,
}

export default ProductCard
