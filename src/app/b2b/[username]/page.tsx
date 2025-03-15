import ProfileHero from "@/components/b2b/hero-profile"
import { createClient } from "@/lib/supabase/server"
import Image from "next/image"

export default async function Page({
    params,
}: {
    params: Promise<{ username: string }>
}) {
    const slug = (await params).username
    const supabase = await createClient()
    const { data, error } = await supabase
        .from("profile")
        .select("*")
        .eq("username", slug)
        .single()

    let products = null
    console.log(data)
    if (data) {
        const { data: productsData, error: productsError } = await supabase
            .from("product")
            .select("*")
            .eq("perfil_id", data.id)
        console.log(productsData)
        console.log(productsError)
        products = productsData
    }

    return (
        <div>
            <ProfileHero
                username={data.username}
                name={data.name}
                description={data.description}
                address={data.address}
                whatsapp={data.whatsapp}
                products={products}
                image_url={data.image_url}
                socials={data.social_urls}
            />
            {/* <section>{JSON.stringify(data, null, 2)}</section> */}
            {/* <section>{JSON.stringify(products, null, 2)}</section> */}
        </div>
    )
}
