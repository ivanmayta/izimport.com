import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { createServerSupabaseClient } from "./supbase-clerk/server"
export async function revalidateBusinessProfile() {
    const { userId } = await auth()
    const supabase = createServerSupabaseClient()
    const { data } = await supabase
        .from("profiles")
        .select("username")
        .eq("user_id", userId)
    console.log("data", data)
    if (!data) {
        return
    }
    const username = data[0].username
    try {
        console.log(`🔄 Revalidating: /business/${username}`)
        revalidatePath(`/business/${username}`)

        console.log("🔄 Revalidating: /dashboard")
        revalidatePath("/dashboard")

        // ✅ También revalida la ruta del rewrite
        console.log(`🔄 Revalidating: /${username}`)
        revalidatePath(`/${username}`)

        console.log("✅ All paths revalidated successfully")
    } catch (revalidateError) {
        console.error("❌ Revalidation error:", revalidateError)
    }
}
