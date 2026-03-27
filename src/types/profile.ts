export interface Profile {
    id: number
    user_id: string
    username: string
    name: string
    description: string
    address: string
    whatsapp: string
    RUC: string
    image_url: string
    social_urls?: {
        tiktok?: string
        instagram?: string
        facebook?: string
    }
}