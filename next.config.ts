import { HOST_APP_URL, HOST_BASE_DOMAIN } from "@/config"
import type { NextConfig } from "next"
const allowedOrigin = process.env.ALLOWED_ORIGIN ?? ""
console.log("allowedOrigin", allowedOrigin)
const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com",
            },
        ],
    },
    /* config options here */
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
        return [
            {
                source: "/",
                has: [{ type: "host", value: HOST_BASE_DOMAIN }],
                destination: "/home",
            },
            {
                source: "/:path*",
                has: [{ type: "host", value: HOST_APP_URL }],
                destination: "/app/:path*",
            },
            {
                source: "/:path*",
                has: [{ type: "host", value: HOST_BASE_DOMAIN }],
                destination: "/business/:path*",
            },
        ]
    },
}

export default nextConfig
