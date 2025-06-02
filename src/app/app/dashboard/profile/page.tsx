import { Box, Flex, Separator, Tabs, Text, Badge } from "@radix-ui/themes"
import FormProfile from "./form-profile"
import { ExternalLink } from "lucide-react"
import { ImageUploader } from "@/components/dashboard/image-uploader"
import { getProfile } from "@/lib/fetchers"
import { auth } from "@clerk/nextjs/server"
import { createServerSupabaseClient } from "@/lib/supbase-clerk/server"
import { NEXT_PUBLIC_BASE_DOMAIN } from "@/config"
export default async function ProfilePage() {
    const supabase = createServerSupabaseClient()
    const { userId } = await auth()

    const profile = await getProfile(supabase, userId)
    const { image_url } = profile ?? ""
    return (
        <>
            <Flex direction="row" justify={"between"} align="center">
                <Text as="div" size="8" weight="bold">
                    Mi perfil
                </Text>
                <Badge color="orange" size="3">
                    <a
                        className="flex justify-center items-center gap-2"
                        target="_blank"
                        href={`${NEXT_PUBLIC_BASE_DOMAIN}/${profile?.username}`}
                    >
                        ver sitio
                        <ExternalLink size="16" />
                    </a>
                </Badge>
            </Flex>
            <Text as="span" size="4" color="gray" className="mb-3">
                Actualiza tu información personal y de negocio.
            </Text>
            <Separator my="5" size="4" color="blue" />
            <Tabs.Root defaultValue="account">
                <Tabs.List justify="start" color="orange">
                    <Tabs.Trigger value="account">
                        Información general
                    </Tabs.Trigger>
                    <Tabs.Trigger disabled={!profile} value="documents">
                        Personalización
                    </Tabs.Trigger>
                </Tabs.List>

                <Box pt="3" className="h-full">
                    <Tabs.Content value="account" className="h-full">
                        <FormProfile profile={profile} />
                    </Tabs.Content>

                    <Tabs.Content value="documents" className="h-full">
                        <ImageUploader initialImage={image_url} />
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
        </>
    )
}
