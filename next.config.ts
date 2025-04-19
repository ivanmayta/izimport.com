import type { NextConfig } from "next"

const allowedOrigin = process.env.ALLOWED_ORIGIN ?? ""

const hostname = process.env.NEXT_PUBLIC_SUPABASE_URL

const normalizedName = hostname?.replace("https://", "")
const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["app.localhost:3000"],
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: normalizedName ? normalizedName : "localhost",
                port: "",
            },
        ],
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
}
export default nextConfig
