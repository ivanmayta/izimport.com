import { Box, Flex, Separator, Tabs, Text, Badge } from "@radix-ui/themes"
import FormProfile from "./form-profile"
import { ExternalLink } from "lucide-react"
import { ImageUploader } from "@/components/dashboard/image-uploader"
import { fetchProfile } from "@/lib/fetchers"
import { auth } from "@clerk/nextjs/server"

export default async function ProfilePage() {
    const { userId } = await auth()

    const profile = await fetchProfile(userId)
    const { image_url } = profile
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
                        href="http://localhost:3000/izimport"
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
                    <Tabs.Trigger value="documents">
                        Personalización
                    </Tabs.Trigger>
                </Tabs.List>

                <Box pt="3">
                    <Tabs.Content value="account">
                        <FormProfile profile={profile} />
                    </Tabs.Content>

                    <Tabs.Content value="documents">
                        <ImageUploader initialImage={image_url} />
                    </Tabs.Content>
                </Box>
            </Tabs.Root>
        </>
    )
}
