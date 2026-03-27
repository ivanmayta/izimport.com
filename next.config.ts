import type { NextConfig } from "next"

const isDev = process.env.NODE_ENV === "development"

const HOST_APP_URL = isDev
    ? "app.localhost"
    : new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost").host

const HOST_BASE_DOMAIN = isDev
    ? "localhost"
    : new URL(process.env.NEXT_PUBLIC_BASE_DOMAIN ?? "http://localhost").host

const allowedOrigin = process.env.ALLOWED_ORIGIN ?? ""

// Rutas de la landing que deben servirse desde el base domain
// y NO deben caer en el catch-all de /business/:path*
const HOME_ROUTES = [
    "/terminos-y-condiciones",
    "/politicas-de-cambios-devoluciones",
    "/libro-de-reclamaciones",
]

const nextConfig: NextConfig = {
    experimental: {
        useCache: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com",
            },
        ],
        unoptimized: true,
    },
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    {
                        key: "Access-Control-Allow-Origin",
                        value: allowedOrigin,
                    },
                ],
            },
        ]
    },
    rewrites: async () => {
        const homeRoutes = HOME_ROUTES.map((route) => ({
            source: route,
            has: [{ type: "host" as const, value: HOST_BASE_DOMAIN }],
            destination: `/home${route}`,
        }))

        return [
            // Landing root
            {
                source: "/",
                has: [{ type: "host", value: HOST_BASE_DOMAIN }],
                destination: "/home",
            },
            // Páginas de la landing (legal, docs, etc.)
            ...homeRoutes,
            // Dashboard autenticado
            {
                source: "/:path*",
                has: [{ type: "host", value: HOST_APP_URL }],
                destination: "/app/:path*",
            },
            // Tiendas públicas (catch-all del base domain — siempre al final)
            {
                source: "/:path*",
                has: [{ type: "host", value: HOST_BASE_DOMAIN }],
                destination: "/business/:path*",
            },
        ]
    },
}

export default nextConfig
