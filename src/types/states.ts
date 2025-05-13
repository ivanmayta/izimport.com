export type ProfileState = {
    success?: boolean
    errors?: {
        name?: string[]
        username?: string[]
        description?: string[]
        RUC?: string[]
        whatsapp?: string[]
        address?: string[]
        social_urls?:
            | string[]
            | {
                  facebook?: string[]
                  instagram?: string[]
                  tiktok?: string[]
              }
    } | null
    message?: string | null
}

export type ProductState = {
    success?: boolean
    errors?: {
        name?: string[]
        description?: string[]
        price?: string[]
        image_url?: string[]
    } | null
    message?: string | null
}
