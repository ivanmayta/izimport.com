/** @type {import('next').NextConfig} */
const hostname = process.env.NEXT_PUBLIC_SUPABASE_URL
const normalizedName = hostname.replace("https://", "")
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: normalizedName,
                port: "",
            },
        ],
    },
}
export default nextConfig
