"use client"
import { useCartStore } from "@/app/business/_store/store"
import { useEffect } from "react"
import { SearchProduct } from "./ui/search-product"
import ProductCard from "./ui/product-card"
import { Product } from "@/types/products"

export default function Products({
    products,
    whatsapp,
}: {
    products: Product[]
    whatsapp: string
}) {
    const addItem = useCartStore((state) => state.addItem)
    const setWhatsapp = useCartStore((state) => state.setWhatsapp)
    useEffect(() => {
        setWhatsapp(whatsapp)
    }, [whatsapp])

    return (
        <SearchProduct
            items={products}
            placeholder="Buscar productos..."
            emptyMessage="No hay productos"
            noResultsMessage="No se encontraron productos"
        >
            {(filteredItems) => (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3  gap-y-8 pb-8 sm:px-0 px-4">
                    {filteredItems.map((product) => (
                        <ProductCard.Root key={product.id} value={product}>
                            <ProductCard.Image />
                            <ProductCard.Information />
                            <ProductCard.Button
                                onClick={() => {
                                    addItem(product as any)
                                }}
                            />
                        </ProductCard.Root>
                    ))}
                </div>
            )}
        </SearchProduct>
    )
}
