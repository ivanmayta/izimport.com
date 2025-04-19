import { NextRequest, NextResponse } from "next/server"
import { createClient } from "./lib/supabase/server"
import { updateSession } from "./lib/supabase/middleware"
//import { getToken } from "next-auth/jwt"

export const config = {
    matcher: [
        /*
         * Match all paths except for:
         * 1. /api routes
         * 2. /_next (Next.js internals)
         * 3. /_static (inside /public)
         * 4. all root files inside /public (e.g. /favicon.ico)
         */
        "/((?!api/|_next/|_static/|_vercel|img/|[\\w-]+\\.\\w+).*)",
    ],
}

export default async function middleware(req: NextRequest) {
    await updateSession(req) // Call the updateSession function to update the session
    const url = req.nextUrl
    console.log("src/middleware.ts", url)
    // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
    let hostname = req.headers
        .get("host")!
        .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)

    const searchParams = req.nextUrl.searchParams.toString()
    // Get the pathname of the request (e.g. /, /about, /blog/first-post)

    const path = `${url.pathname}${
        searchParams.length > 0 ? `?${searchParams}` : ""
    }`

    // rewrites for app pages
    if (hostname == `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
        // const session = await getToken({ req }) // Uncommented the session retrieval
        // rewrite everything to `/app` folder
        NextResponse.rewrite(new URL(`/app${path}`, req.url))

        const supabase = await createClient()
        const {
            data: { user: session },
        } = await supabase.auth.getUser()
        console.log("Has session", session?.email)
        if (!session && path !== "/login") {
            return NextResponse.redirect(new URL("/login", req.url))
        } else if ((session && path == "/login") || path == "/") {
            return NextResponse.redirect(new URL("/dashboard", req.url))
        }
        return NextResponse.rewrite(
            new URL(`/app${path === "/" ? "" : path}`, req.url)
        )
    }

    // rewrite root application to `/home` folder
    console.log(path)
    // Check if the path is one of the reserved paths
    const reservedPaths = [
        "/home",
        "/track",
        "/search/",
        "/simplificado",
        "/exonerado",
    ]

    const isReservedPath = reservedPaths.some((reservedPath) =>
        path.startsWith(reservedPath)
    )
    if (path === "/") {
        console.log("Rewriting / to /home")
        return NextResponse.rewrite(new URL(`/home`, req.url)) // Reescribe `/` a `/home`
    }
    if (
        isReservedPath && // Verifica que el path sea uno de los reservados
        (hostname === "localhost:3000" ||
            hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN)
    ) {
        console.log("rewriting ", hostname, path)
        return NextResponse.rewrite(new URL(`/home${url.pathname}`, req.url)) // Reescribe a `/home`
    } else {
        console.log("rewriting to", hostname, path)
        return NextResponse.rewrite(new URL(`/b2b${url.pathname}`, req.url)) // Reescribe a `/b2b`
    }
    // console.log("rewriting to", hostname, path)
    // // rewrite everything else to `/[domain]/[slug] dynamic route
    // return NextResponse.next()
}
