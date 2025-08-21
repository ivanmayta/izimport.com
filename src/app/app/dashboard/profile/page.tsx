import { Skeleton, Text } from "@radix-ui/themes"

import { Profile } from "./profile"
import { Suspense } from "react"
import { Building } from "lucide-react"
export default function ProfilePage() {
    return (
        <>
            <div className="flex items-center justify-center gap-2">
                <span className="border-b-2 border-zinc-300 w-full"></span>
                <div className="flex items-center justify-center gap-2 w-full">
                    <Building size={18} strokeWidth={3} />
                    <Text
                        as="div"
                        size="3"
                        weight="medium"
                        className="text-center"
                    >
                        Información básica de Negocio
                    </Text>
                </div>
                <span className="border-b-2 border-zinc-300 w-full"></span>
            </div>
            {/* <Flex direction="row" justify={"between"} align="end">
                <Badge color="orange" size="3">
                    <LinkBadge />
                </Badge>
            </Flex> */}

            <Suspense
                fallback={<Skeleton loading height="500px" width="100%" />}
            >
                <Profile />
            </Suspense>
        </>
    )
}
