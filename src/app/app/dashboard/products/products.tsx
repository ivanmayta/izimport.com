import { createServerSupabaseClient } from "@/lib/supbase-clerk/server"
import { getProfile } from "@/lib/fetchers"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getProducts } from "@/lib/fetchers"
import ProductList from "../_components/product-list"

export async function Products() {
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
    return <ProductList products={products ?? []} />
}
