export type ProfileState = {
    errors?: {
        name?: string[]
        username?: string[]
        description?: string[]
        RUC?: string[]
        whatsapp?: string[]
        address?: string[]
        social_urls?: {
            facebool?: string[]
            instagram?: string[]
            tiktok?: string[]
        }
    }
    message?: string | null
}

export type ProductState = {
    errors?: {
        name?: string[]
        description?: string[]
        price?: string[]
        image_url?: string[]
    }
    message?: string | null
}
