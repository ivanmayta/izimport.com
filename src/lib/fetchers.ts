import { SupabaseClient } from "@supabase/supabase-js"
import { createClientSupabaseClient } from "./supbase-clerk/client"
import { cacheLife } from "next/dist/server/use-cache/cache-life"

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
export const getProfileByUsername = async (
    supabase: SupabaseClient,
    username: string
) => {
    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("username", username)
        .single()
    if (error) {
        console.log("error", error)
    }
    return { data, error }
}
export const getProfiles = async (supabase: SupabaseClient) => {
    const { data, error } = await supabase.from("profiles").select("*")
    if (error) {
        console.log("error", error)
        return []
    }
    return data
}
export const getProducts = async (profileId: string) => {
    "use cache"
    cacheLife("max")
    const supabase = createClientSupabaseClient()
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("perfil_id", profileId)
        .order("created_at", { ascending: false })
    if (error) {
        console.log("error", error)
    }
    return { products: data, count: data?.length, error }
}
