"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/utils/supabase/server"

export async function signInWithGoole() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `${process.env.FRONT_URL}/auth/callback`,
        },
    })
    console.log("---------signInWithGoole------------")
    console.log(data)
    if (error) {
        console.log(error)
    }
    redirect(`${data.url}`)
}

export async function logout() {
    const supabase = await createClient()

    await supabase.auth.signOut()

    revalidatePath("/", "layout")
    //redirect("/")
}
