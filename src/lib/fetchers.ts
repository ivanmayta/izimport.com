import { createServerSupabaseClient } from "./supbase-clerk/server"

export const fetchProfile = async (id: string | null) => {
    const supabase = createServerSupabaseClient()
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
