import { cache } from "react"
import { SupabaseClient } from "@supabase/supabase-js"

export const getProfile = async (
    supabase: SupabaseClient,
    id: string | null
) => {
    if (!id) {
        return null
    }
    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", id)
        .single()
    if (error) {
        console.log("error", error)
    }
    return data
}

export const getProducts = cache(
    async (supabase: SupabaseClient, profileId: string) => {
        const { data, error } = await supabase
            .from("products")
            .select("*")
            .eq("perfil_id", profileId)
            .order("created_at", { ascending: false })
        if (error) {
            console.log("error", error)
        }
        return { products: data, count: data?.length }
    }
)
