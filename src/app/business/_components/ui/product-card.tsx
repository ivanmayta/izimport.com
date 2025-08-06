"use client"
import { cn } from "@/lib/utils"
import { type Product } from "@/types/products"
import { ShoppingCart } from "lucide-react"
import { createContext, useContext } from "react"
import { ProductImage } from "../ui/product-image"

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
                className={cn(
                    "group cursor-pointer flex flex-col h-full",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </ProductCardContext.Provider>
    )
}

function Image({ className }: { className?: string }) {
    const { value } = useProductCardProvider()
    return <ProductImage product={value} className={className} />
}
function Information({ className }: { className?: string }) {
    const { value } = useProductCardProvider()
    return (
        <div className={cn("flex flex-col flex-1", className)}>
            <p
                className="text-sm font-normal leading-tight line-clamp-2 tracking-wide"
                style={{ height: "2.4em" }}
                title={value.name}
            >
                {value.name}
            </p>
            <p className="font-medium mb-1">s/.{value.price}</p>
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
                "cursor-pointer bg-white font-medium text-sm py-1 border text-black w-full mt-auto rounded-sm flex items-center justify-around hover:bg-gray-50 transition-colors duration-200",
                className
            )}
        >
            <span className="flex items-center gap-2">
                <ShoppingCart size={16} />
                Añadir al carrito
            </span>
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
