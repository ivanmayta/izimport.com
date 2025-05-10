import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    /* config options here */
    rewrites: async () => {
        return [
            {
                source: "/",
                has: [{ type: "host", value: "localhost" }],
                destination: "/home",
            },
            {
                source: "/:path*",
                has: [{ type: "host", value: "app.localhost" }],
                destination: "/app/:path*",
            },
            {
                source: "/:path*",
                has: [{ type: "host", value: "localhost" }],
                destination: "/business/:path*",
            },
        ]
    },
}

export default nextConfig
