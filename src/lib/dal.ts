//server-only needed import "server-only"

import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { cache } from "react"

export const verifyAuthUser = cache(async () => {
    const { userId } = await auth()
    if (!userId) {
        redirect("/sign-in")
    }
    return userId
})
