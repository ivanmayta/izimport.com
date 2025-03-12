import { User } from "@/types/types"
import { createClient } from "../server"

export async function getAuth() {
    const { auth } = await createClient()
    return auth
}

export const getUser = async () => {
    const supabase = await createClient()
    const auth = supabase.auth

    const authUser = (await auth.getUser()).data.user
    if (!authUser) return null

    // fetch user from database
    const { data: dbUser } = await supabase
        .from("users")
        .select("*")
        .eq("id", authUser.id)
        .single()

    if (!dbUser) return null

    const user: User = {
        ...authUser,
        ...dbUser,
    }

    return user
}
