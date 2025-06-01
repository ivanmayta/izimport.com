import { HOST_APP_URL, HOST_BASE_DOMAIN } from "@/config"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "res.cloudinary.com",
            },
        ],
    },
    /* config options here */
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
