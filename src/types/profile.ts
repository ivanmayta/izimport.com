export interface Profile {
    username: string
    name: string
    description: string
    address: string
    whatsapp: string
    RUC: string
    image_url: string
    socials?: {
        tiktok?: string
        instagram?: string
        facebook?: string
    }
}