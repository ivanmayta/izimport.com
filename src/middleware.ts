import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NEXT_PUBLIC_APP_URL } from "@/config"
const host = NEXT_PUBLIC_APP_URL?.split("://")[1]

const isPublicRoute = createRouteMatcher([
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/public(.*)",
])
export default clerkMiddleware(async (auth, req) => {
    if (req.headers.get("host") === host) {
        if (!isPublicRoute(req)) {
            await auth.protect()
        }
    }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
        // Always run for API routes
        "/(api|trpc)(.*)",
    ],
}
