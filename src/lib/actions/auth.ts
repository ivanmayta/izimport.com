"use server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export async function signInWithGoogle() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
            redirectTo: `http://app.localhost:3000/api/auth/callback`,
        },
    })
    console.log("---------signInWithGoole------------")
    console.log(data.url)
    if (error) {
        console.log(error)
        redirect("/error")
    }
    //revalidatePath("/", "layout") // Uncommenting this line to revalidate the path after sign in
    redirect(`${data.url}`)
}

export async function logout() {
    const supabase = await createClient()

    await supabase.auth.signOut()

    revalidatePath("/", "layout")
    //redirect("/")
}
