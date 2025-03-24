"use client"
import { useCartStore } from "@/store/cart-store"
import { ProductImage } from "./product-image"
import { Button } from "../ui/button"
import { use, useEffect } from "react"

export default function Products({ products, whatsapp }) {
    const addItem = useCartStore((state) => state.addItem)
    const setWhatsapp = useCartStore((state) => state.setWhatsapp)
    useEffect(() => {
        setWhatsapp(whatsapp)
    }, [whatsapp])

    return (
        <main className="flex-grow relative pt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-12 pb-8">
                {products &&
                    products.map((product) => (
                        <div key={product.id} className=" group cursor-pointer">
                            <ProductImage product={product} />
                            <p className="text-sm text-clip line-clamp-2 leading-tight">
                                {product.name}
                                {/* Cambiado de `name` a `title` según la API */}
                            </p>
                            <p className="font-semibold">s/.{product.price}</p>
                            <Button
                                onClick={() =>
                                    addItem({
                                        id: product?.id,
                                        name: product?.name,
                                        price: product?.price,
                                        image: product?.image_url,
                                    })
                                }
                            >
                                Add to Cart
                            </Button>
                        </div>
                    ))}
            </div>
        </main>
    )
}
