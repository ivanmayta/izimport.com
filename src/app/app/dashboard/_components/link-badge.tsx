import { NEXT_PUBLIC_BASE_DOMAIN } from "@/config"
import { getProfile } from "@/lib/fetchers"
import { createServerSupabaseClient } from "@/lib/supbase-clerk/server"
import { auth } from "@clerk/nextjs/server"
import { ExternalLink } from "lucide-react"

export async function LinkBadge() {
    const supabase = createServerSupabaseClient()
    const { userId } = await auth()

    const profile = await getProfile(supabase, userId)
    if (!profile) return <></>
    return (
        <a
            className="flex justify-center items-center gap-2"
            target="_blank"
            href={`${NEXT_PUBLIC_BASE_DOMAIN}/${profile?.username}`}
        >
            ver sitio
            <ExternalLink size="16" />
        </a>
    )
}
