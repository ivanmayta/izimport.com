"use client"
import { cn } from "@/lib/utils"
import { type Product } from "@/types/products"
import { ShoppingCart, ListCollapse } from "lucide-react"
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
            <DialogTrigger>
                <div className="relative">
                    <ProductImage product={value} className={className} />
                    <div className=" cursor-pointer py-2 px-3 absolute flex items-center text-xs gap-2 group-hover:opacity-100 opacity-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-md bg-white dark:bg-black hover:text-primary">
                        <ListCollapse size={16} />
                        Detalles
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="flex flex-col items-center">
                <DialogTitle>{value.name}</DialogTitle>
                <ProductImage
                    product={value}
                    maxWidth="50%"
                    className=" h-50  aspect-square"
                />
                <p className=" text-end  font-medium mb-1">s/.{value.price}</p>

                <div className=" w-full max-w-[80%] text-start ">
                    <SafeHTMLRenderer
                        html={value.description}
                        className="product-content"
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
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
                "cursor-pointer dark:bg-white bg-black text-white font-medium text-sm py-1 border dark:text-black w-full mt-auto rounded-sm flex items-center justify-around dark:hover:bg-gray-50 hover:bg-zinc-800 transition-colors duration-200",
                className
            )}
        >
            <span className="flex items-center gap-2 ">
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
