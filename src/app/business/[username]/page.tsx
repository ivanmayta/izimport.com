import { getProducts, getProfileByUsername, getProfiles } from "@/lib/fetchers"
import { createClientSupabaseClient } from "@/lib/supbase-clerk/client"
import ProfileHero from "../_components/hero-profile"
import Products from "../_components/products"
import { notFound } from "next/navigation"
import { Metadata, ResolvingMetadata } from "next"
import { sanitizeHtml } from "../lib/sanitize-html"

export const dynamic = "force-static"
export const dynamicParams = true
export async function generateStaticParams() {
    const supabase = createClientSupabaseClient()
    const profiles = await getProfiles(supabase)
    return profiles.map((profile) => ({ username: profile.username }))
}

export async function generateMetadata(
    {
        params,
    }: {
        params: Promise<{ username: string }>
    },
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const { username } = await params
    const supabase = createClientSupabaseClient()
    const { data, error } = await getProfileByUsername(supabase, username)
    if (error) {
        return notFound()
    }
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: data?.name,
        openGraph: {
            images: [data?.image_url, ...previousImages],
        },
        description: data?.description,
        icons: {
            icon: data?.image_url,
        },
    }
}

export default async function BusinessPage({
    params,
}: {
    params: Promise<{ username: string }>
}) {
    const { username } = await params
    const supabase = createClientSupabaseClient()
    const { data, error } = await getProfileByUsername(supabase, username)
    const safeDescription = sanitizeHtml(data?.description ?? "")
    if (error) {
        return notFound()
    }
    const { products, error: productsError } = await getProducts(data?.id ?? "")
    if (productsError) {
        return notFound()
    }
    console.log(
        `🔄 [${process.env.NODE_ENV}] Rendering ${username} at:`,
        new Date().toISOString()
    )
    return (
        <div className="max-w-[1420px] mx-auto w-full ">
            <ProfileHero data={{ ...data, description: safeDescription }} />
            {products && (
                <Products products={products} whatsapp={data?.whatsapp} />
            )}
        </div>
    )
}
