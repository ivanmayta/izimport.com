"use client"
import { useCartStore } from "@/app/business/_store/store"
import { ProductImage } from "@/app/business/_components/product-image"
import { useEffect } from "react"
import { AddCartIcon } from "@/icons/addCart"
interface Product {
    id: number
    name: string
    description: string
    price: number
    image_url: string[]
    perfil_id: string
}
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
        <main className="flex-grow relative pt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-12 pb-8">
                {products &&
                    products.map((product) => (
                        <div key={product.id} className=" group cursor-pointer">
                            <ProductImage product={product}>
                                <AddCartIcon
                                    onClick={() =>
                                        addItem({
                                            id: product?.id,
                                            name: product?.name,
                                            price: product?.price,
                                            image: product?.image_url[0],
                                        })
                                    }
                                >
                                    Add to Cart
                                </AddCartIcon>
                            </ProductImage>
                            <p className="text-base text-clip line-clamp-2 leading-tight">
                                {product.name}
                                {/* Cambiado de `name` a `title` según la API */}
                            </p>
                            <p className="font-semibold">s/.{product.price}</p>
                        </div>
                    ))}
            </div>
        </main>
    )
}
