"use server"

import { z } from "zod"
import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
const profileFormSchema = z.object({
    username: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(30, {
            message: "Username must not be longer than 30 characters.",
        }),
    whatsapp: z
        .string()
        .min(9, { message: "Phone Number must  be a leat 9 digits" })
        .max(9, "Phone number must not be longer than 9 digits"),
    address: z.string().max(160).min(4),
    social_urls: z
        .record(z.string().url({ message: "Please enter a valid URL." }))
        .optional(),
})

export type State = {
    errors?: {
        username?: string[]
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
export async function updateProfile(prevState: State, formData: FormData) {
    const socialUrls: Record<string, string> = {}
    formData.forEach((value, key) => {
        if (key.startsWith("social_urls[")) {
            const socialKey = key.slice(12, -1) // Extrae la clave del nombre del input
            socialUrls[socialKey] = value as string
        }
    })

    const validatedFields = profileFormSchema.safeParse({
        username: formData.get("username"),
        whatsapp: formData.get("whatsapp"),
        address: formData.get("address"),
        social_urls: socialUrls,
    })

    console.log(validatedFields)

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "There was a problem updating your profile.",
        }
    }

    const supabase = await createClient() // Asegúrate de inicializar correctamente
    const { data: userData, error: userError } = await supabase.auth.getUser()

    if (userError) {
        console.error("Error al obtener el usuario:", userError)
        return {
            errors: { user: "Unable to retrieve user." },
            message: "There was a problem updating your profile.",
        }
    }

    const user_id = userData.user.id
    console.log(user_id)

    // Realiza la actualización del perfil
    const { data, error } = await supabase
        .from("perfiles")
        .update({
            ...validatedFields.data, // Asegúrate de incluir todos los campos validados
            user_id: user_id, // Incluye el user_id si es necesario
        })
        .eq("user_id", user_id) // Filtra por el user_id del usuario autenticado

    if (error) {
        console.error("Error al actualizar el perfil:", error.message) // Cambia a error.message si error.details no está disponible
        return {
            errors: { update: "Error updating profile." },
            message: "There was a problem updating your profile.",
        }
    } else {
        console.log("Perfil actualizado:", data)
    }

    return {
        message: "Profile updated successfully!",
        errors: {},
    }
}
//TODO make zod validation with optional fields
const profileFormSchemas = z.object({})
export const updateProfileWithoudValidation = async (
    prevState: State,
    formData: FormData
): Promise<State> => {
    const supabase = await createClient()
    const { data: userData, error: userError } = await supabase.auth.getUser()
    const user_id = userData.user.id
    const { error, statusText, status } = await supabase
        .from("profile")
        .update({
            username: formData.get("username"),
            whatsapp: formData.get("whatsapp"),
            address: formData.get("address"),
            RUC: formData.get("RUC"),
            social_urls: {
                facebook: formData.get("social_urls[facebook]"),
                instagram: formData.get("social_urls[instagram]"),
                tiktok: formData.get("social_urls[tiktok]"),
            },
        })
        .eq("user_id", user_id)
    console.log(status)
    console.log(statusText)
    if (error) {
        console.log("-------ocurrio un error")
        console.log(error)
    }
    if (status === 409) {
        // 409 es el código de estado para conflictos
        return {
            message: "Already Exist",
            errors: {
                username: [
                    `El nombre de usuario "${formData?.get(
                        "username"
                    )}" ya existe`,
                ],
            },
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
    const { error, statusText, status } = await supabase
        .from("profile")
        .insert({
            username: formData.get("username"),
            whatsapp: formData.get("whatsapp"),
            address: formData.get("address"),
            RUC: formData.get("RUC"),
            social_urls: {
                facebook: formData.get("social_urls[facebook]"),
                instagram: formData.get("social_urls[instagram]"),
                tiktok: formData.get("social_urls[tiktok]"),
            },
            user_id: user_id,
        })
    if (error) console.log(error)
    return {
        message: "Profile created successfully!",
        errors: {},
    }
}

export const addProduct = async () => {
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

        name: "Product Name",
        description: "Product Description",
        price: 100,
        image_url: "url_to_image",
    }
    // Insert the product

    const { data: productDataResponse, error: productError } = await supabase
        .from("product")
        .insert([productData])
    if (productError) {
        console.error("Error creating product:", productError.message)
    } else {
        console.log("Product created successfully:", productDataResponse)
    }
}
