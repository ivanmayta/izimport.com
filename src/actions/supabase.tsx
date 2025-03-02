"use server"

import { z } from "zod"
import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export type State = {
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
const createProfileFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: "El nombre debe ser de al menos 2 caracteres" })
        .max(60, { message: "El nombre no debe ser mayor a 60 caracteres" }),
    description: z
        .string()
        .min(3, {
            message: "La descripción debe ser de al menos 2 caracteres.",
        })
        .max(160, {
            message: "La descripción no debe ser mayor a 160 caracteres.",
        }),
    username: z
        .string()
        .min(2, {
            message: "El nombre de usuario debe ser de al menos 2 caracteres.",
        })
        .max(30, {
            message: "El nombre de usuario no debe ser mayor a 30 caracteres.",
        })
        .regex(
            /^[a-z0-9]+(-[a-z0-9]+)*$/,
            "El Nombre de usuario solo puede contener letras, números y guiones, sin espacios ni guiones al inicio o final."
        ),
    whatsapp: z
        .string()
        .min(9, {
            message: "El numero de telefono debe tener al menos 9 digitos",
        })
        .max(9, "El numero de telefono no debe ser mayor a 9 digitos"),
    address: z
        .string()
        .max(160, {
            message: "La dirección no debe ser mayor a 160 caracteres.",
        })
        .min(4, {
            message: "La dirección debe ser de al menos 4 caracteres.",
        }),
})
//TODO make zod validation with optional fields

export const updateProfile = async (
    prevState: State,
    formData: FormData
): Promise<State> => {
    const supabase = await createClient()
    const { data: userData, error: userError } = await supabase.auth.getUser()
    const user_id = userData.user.id
    const validatedFields = createProfileFormSchema.safeParse({
        name: formData.get("name"),
        username: formData.get("username"),
        description: formData.get("description"),
        RUC: formData.get("RUC"),
        whatsapp: formData.get("whatsapp"),
        address: formData.get("address"),
        social_urls: {
            facebook: formData.get("social_urls[facebook]"),
            instagram: formData.get("social_urls[instagram]"),
            tiktok: formData.get("social_urls[tiktok]"),
        },
    })
    if (!validatedFields.success) {
        return {
            message: "There was a problem creating your profile.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    const { error, status, data, statusText } = await supabase
        .from("profile")
        .update(validatedFields.data)
        .eq("user_id", user_id)
    console.log(status)
    console.log(statusText)

    if (status === 409) {
        // 409 es el código de estado para conflictos
        return {
            message: "Nombre de usuario ya existe",
            errors: {
                username: [
                    `El nombre de usuario "${formData?.get(
                        "username"
                    )}" ya existe`,
                ],
            },
        }
    }
    if (error) {
        console.error("Error updating profile:", error.message)
        return {
            message: error.message,
            errors: {},
        }
    }
    revalidatePath("/dasboard")
    return {
        message: "Profile updated successfully!",
        errors: {},
    }
}

export const createProfile = async (
    prevState: State,
    formData: FormData
): Promise<State> => {
    const supabase = await createClient()
    const { data: userData, error: userError } = await supabase.auth.getUser()
    const user_id = userData.user.id

    const validatedFields = createProfileFormSchema.safeParse({
        name: formData.get("name"),
        username: formData.get("username"),
        description: formData.get("description"),
        RUC: formData.get("RUC"),
        whatsapp: formData.get("whatsapp"),
        address: formData.get("address"),
        social_urls: {
            facebook: formData.get("social_urls[facebook]"),
            instagram: formData.get("social_urls[instagram]"),
            tiktok: formData.get("social_urls[tiktok]"),
        },
    })
    if (!validatedFields.success) {
        return {
            message: "There was a problem creating your profile.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    const { error, statusText, status } = await supabase
        .from("profile")
        .insert({
            ...validatedFields.data,
            user_id: user_id,
        })
    if (status === 409) {
        // 409 es el código de estado para conflictos
        return {
            message: "Nombre de usuario ya existe",
            errors: {
                username: [
                    `El nombre de usuario "${formData?.get(
                        "username"
                    )}" ya existe`,
                ],
            },
        }
    }
    if (error) {
        console.log(error)

        return {
            message: error.message,
            errors: {},
        }
    }
    revalidatePath("/dashboard")
    return {
        message: "Profile created successfully!",
        errors: {},
    }
}
//TODO make zod validation with optional fields
const productFormSchema = z.object({
    name: z.string().min(2).max(100),
    description: z.string().min(2).max(500),
    price: z.number().min(0),
    image_url: z.string().url(),
})
export const addProduct = async (formData: FormData) => {
    const supabase = await createClient()
    const { data: userData, error: userError } = await supabase.auth.getUser()
    if (userError) {
        console.error("Error getting user:", userError.message)

        return
    }
    const user_id = userData.user.id
    const { data: perfilData, error: perfilError } = await supabase
        .from("profile")
        .select("id")
        .eq("user_id", user_id)
        .single()
    if (perfilError) {
        console.error("Error getting profile:", perfilError.message)

        return
    }
    const perfil_id = perfilData.id
    // Prepare product data

    const productData = {
        perfil_id: perfil_id,

        name: formData.get("name"),
        description: formData.get("description"),
        price: formData.get("price"),
        image_url: formData.get("image_url"),
    }
    // Insert the product

    const { data: productDataResponse, error: productError } = await supabase
        .from("product")
        .insert([productData])
    if (productError) {
        console.error("Error creating product:", productError.message)
        return {
            message: "Error creating product",
            errors: {},
        }
    } else {
        console.log("Product created successfully:", productDataResponse)
        return {
            message: "Product created successfully!",
            errors: {},
        }
    }
}
