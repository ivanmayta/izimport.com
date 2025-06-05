import { Separator, Text } from "@radix-ui/themes"
import { Suspense } from "react"
import { Products } from "./products"
import { ProductListSkeleton } from "../_components/product-list-skeleton"

export default function ProductsPage() {
    return (
        <>
            <Text as="div" size="8" weight="bold">
                Gestión de Productos
            </Text>

            <Text as="span" size="4" color="gray" className="mb-3">
                Gestiona tu catálogo de productos desde aquí.
            </Text>
            <Separator my="5" size="4" color="blue" />
            <Suspense fallback={<ProductListSkeleton />}>
                <Products />
            </Suspense>

            {/* {profile ? (
                <ProductList products={products} />
            ) : (
                <p>Cree un perfil de negocio primero</p>
            )} */}
        </>
    )
}
