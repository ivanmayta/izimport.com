import { createServerSupabaseClient } from "@/lib/supbase-clerk/server"
import { getProfile } from "@/lib/fetchers"
import { redirect } from "next/navigation"
import { getProducts } from "@/lib/fetchers"
import ProductList from "../_components/product-list"
import { verifyAuthUser } from "@/lib/dal"
export async function Products() {
    const userId = await verifyAuthUser()
    if (!userId) {
        redirect("/sign-in")
    }
    const supabase = createServerSupabaseClient()
    const profile = await getProfile(supabase, userId)
    const { products } = await getProducts(profile?.id ?? "")
    // console.log(products)
    // console.log(count)
    // console.log(profile)
    return <ProductList products={products ?? []} />
}
