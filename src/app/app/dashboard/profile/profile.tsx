import { getProfile } from "@/lib/fetchers"
import { createServerSupabaseClient } from "@/lib/supbase-clerk/server"
import FormProfile from "./form-profile"
import { Flex, Skeleton } from "@radix-ui/themes"
import { verifyAuthUser } from "@/lib/dal"
import { ImageUploader } from "../_components/image-uploader"
import { Suspense } from "react"

export async function Profile() {
    const supabase = createServerSupabaseClient()
    const userId = await verifyAuthUser()
    const profile = await getProfile(supabase, userId)
    const { image_url } = profile ?? ""
    return (
        <Flex direction="column" className="h-full pt-4 gap-4">
            <ImageUploader initialImage={image_url} />
            <Suspense
                fallback={<Skeleton loading height="500px" width="100%" />}
            >
                <FormProfile profile={profile} />
            </Suspense>
        </Flex>
    )
}
