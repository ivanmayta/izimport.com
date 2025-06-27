import { getProfile } from "@/lib/fetchers"
import { createServerSupabaseClient } from "@/lib/supbase-clerk/server"
import FormProfile from "./form-profile"
import { Box, Skeleton, Tabs } from "@radix-ui/themes"
import { verifyAuthUser } from "@/lib/dal"
import { ImageUploader } from "../_components/image-uploader"
import { Suspense } from "react"

export async function Profile() {
    const supabase = createServerSupabaseClient()
    const userId = await verifyAuthUser()
    const profile = await getProfile(supabase, userId)
    const { image_url } = profile ?? ""
    return (
        <Tabs.Root defaultValue="account">
            <Tabs.List justify="start" color="orange">
                <Tabs.Trigger value="account">Información general</Tabs.Trigger>
                <Tabs.Trigger disabled={!profile} value="documents">
                    Personalización
                </Tabs.Trigger>
            </Tabs.List>

            <Box pt="3" className="h-full">
                <Tabs.Content value="account" className="h-full">
                    <Suspense
                        fallback={
                            <Skeleton loading height="500px" width="100%" />
                        }
                    >
                        <FormProfile profile={profile} />
                    </Suspense>
                </Tabs.Content>

                <Tabs.Content value="documents" className="h-full">
                    <ImageUploader initialImage={image_url} />
                </Tabs.Content>
            </Box>
        </Tabs.Root>
    )
}
