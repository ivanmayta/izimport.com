import { getProducts, getProfileByUsername, getProfiles } from "@/lib/fetchers"
import { createClientSupabaseClient } from "@/lib/supbase-clerk/client"
import ProfileHero from "../_components/hero-profile"
import Products from "../_components/products"
import { notFound } from "next/navigation"

export const revalidate = 3600
export const dynamicParams = true
export async function generateStaticParams() {
    const supabase = createClientSupabaseClient()
    const profiles = await getProfiles(supabase)
    return profiles.map((profile) => ({ username: profile.username }))
}
export default async function BusinessPage({
    params,
}: {
    params: Promise<{ username: string }>
}) {
    const { username } = await params
    const supabase = createClientSupabaseClient()
    const { data, error } = await getProfileByUsername(supabase, username)
    if (error) {
        return notFound()
    }
    const { products, error: productsError } = await getProducts(
        data?.id ?? ""
    )
    if (productsError) {
        return notFound()
    }
    console.log(
        `🔄 [${process.env.NODE_ENV}] Rendering ${username} at:`,
        new Date().toISOString()
    )
    return (
        <div className="max-w-[1420px] mx-auto w-full">
            <ProfileHero
                username={data?.username}
                name={data?.name}
                description={data?.description}
                address={data?.address}
                whatsapp={data?.whatsapp}
                image_url={data?.image_url}
                socials={data?.social_urls}
            />
            <section className="h-8 bg-zinc-700"></section>
            {products && (
                <Products products={products} whatsapp={data?.whatsapp} />
            )}
        </div>
    )
}
