import { User as SupabaseUser } from "@supabase/supabase-js"

export type DBUser = {
    id: string
    avatar_url: string
}

export type User = SupabaseUser & DBUser

export type Product = {
    id: string
    name: string
    description: string
    image_url: string
    price: number

    perfil_id: string
}
