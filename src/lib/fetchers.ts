import { SupabaseClient } from "@supabase/supabase-js"
import { cache } from "react"

export const getUser = cache(async (supabase: SupabaseClient) => {
    const {
        data: { user },
        error,
    } = await supabase.auth.getUser()
    return { user, error }
})

export const getProfile = cache(
    async (supabase: SupabaseClient, userId: string) => {
        const { data, error } = await supabase
            .from("profile")
            .select("*")
            .eq("user_id", userId)
            .single()
        return data
    }
)

export const getProducts = cache(
    async (supabase: SupabaseClient, profileId: string) => {
        const products = await supabase
            .from("product")
            .select("*")
            .eq("perfil_id", profileId)
            .order("created_at", { ascending: false })
        return { products: products.data, count: products.data?.length }
    }
)
