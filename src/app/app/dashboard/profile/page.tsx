import { Flex, Separator, Text, Badge, Skeleton } from "@radix-ui/themes"

import { Profile } from "./profile"
import { Suspense } from "react"
import { LinkBadge } from "../_components/link-badge"
export default function ProfilePage() {
    return (
        <>
            <Flex direction="row" justify={"between"} align="center">
                <Text as="div" size="8" weight="bold">
                    Mi perfil
                </Text>
                <Badge color="orange" size="3">
                    <LinkBadge />
                </Badge>
            </Flex>
            <Text as="span" size="4" color="gray" className="mb-3">
                Actualiza tu información personal y de negocio.
            </Text>
            <Separator my="5" size="4" color="blue" />
            <Suspense
                fallback={<Skeleton loading height="500px" width="100%" />}
            >
                <Profile />
            </Suspense>
        </>
    )
}
