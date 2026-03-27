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

// URLs de servicios externos de izimport
export const APP_URLS = {
    dashboard: process.env.NEXT_PUBLIC_APP_URL as string,
    base: process.env.NEXT_PUBLIC_BASE_DOMAIN as string,
    tracking: "https://tools.izimport.site",
    quotes: "https://tools.izimport.site/quote",
} as const

// Redes sociales de la empresa
export const SOCIAL_URLS = {
    whatsapp: "https://wa.me/51972677175",
    instagram: "https://www.instagram.com/_izimport",
    facebook: "https://www.facebook.com/izimportcom",
    youtube: "https://www.youtube.com/@izimport",
} as const

// Código de país para WhatsApp de vendedores (Perú)
export const WHATSAPP_COUNTRY_CODE = "51"
