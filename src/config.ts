import { getHostFromUrl } from "./lib/utils"

export const { NEXT_PUBLIC_APP_URL, NEXT_PUBLIC_BASE_DOMAIN } = process.env
export const HOST_APP_URL =
    process.env.NODE_ENV === "development"
        ? "app.localhost"
        : getHostFromUrl(process.env.NEXT_PUBLIC_APP_URL as string)
export const HOST_BASE_DOMAIN =
    process.env.NODE_ENV === "development"
        ? "localhost"
        : getHostFromUrl(process.env.NEXT_PUBLIC_BASE_DOMAIN as string)
