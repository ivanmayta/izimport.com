import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"

const isPublicRoute = createRouteMatcher([
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/public(.*)",
])
export default clerkMiddleware(async (auth, req) => {
    console.log("middleware running")
    console.log("req headers", req.headers.get("host"))
    if (req.headers.get("host") === "app.localhost:3000") {
        console.log("excecuting app.localhost middleware")
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
