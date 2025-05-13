import { redirect } from "next/navigation"

import { auth } from "@clerk/nextjs/server"

import { createServerSupabaseClient } from "@/lib/supbase-clerk/server"

import { getProducts, getProfile } from "@/lib/fetchers"
import { Separator, Text } from "@radix-ui/themes"
import ProductList from "./product-list"

export default async function Products() {
    const { userId } = await auth()
    if (!userId) {
        redirect("/sign-in")
    }
    const supabase = createServerSupabaseClient()
    const profile = await getProfile(supabase, userId)
    const { products, count } = await getProducts(supabase, profile?.id)
    console.log(products)
    console.log(count)
    console.log(profile)
    return (
        <>
            <Text as="div" size="8" weight="bold">
                Gestión de Productos
            </Text>

            <Text as="span" size="4" color="gray" className="mb-3">
                Gestiona tu catálogo de productos desde aquí.
            </Text>
            <Separator my="5" size="4" color="blue" />
            {profile ? (
                <ProductList products={products} />
            ) : (
                <p>Cree un perfil de negocio primero</p>
            )}
        </>
    )
}
