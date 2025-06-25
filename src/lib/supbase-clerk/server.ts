import { auth } from "@clerk/nextjs/server"
import { createClient } from "@supabase/supabase-js"
import { cache } from "react"

export const  createServerSupabaseClient = cache(() => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            async accessToken() {
                return (await auth()).getToken()
            },
        }
    )
})

