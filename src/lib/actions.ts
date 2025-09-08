"use server"

import { revalidatePath } from "next/cache"
import { createServerSupabaseClient } from "./supbase-clerk/server"
import { PRODUCT_FORM_SCHEMA, PROFILE_FORM_SCHEMA } from "./validations"
import { ProductState, ProfileState } from "@/types/states"
import { uploadProductImage } from "./cloudinary"
import { revalidateBusinessProfile } from "./revalidate"
import { verifyAuthUser } from "./dal"

//action for update profile
export const updateProfile = async (
    prevState: ProfileState,
    formData: FormData
): Promise<ProfileState> => {
    // create a supabase client and get the user
    const supabase = createServerSupabaseClient()
    const userId = await verifyAuthUser()
    //console.log(user_id)

    //Validate form fields with zod
    console.log("Form data", formData)
    const validatedFields = PROFILE_FORM_SCHEMA.safeParse({
        name: formData.get("name"),
        username: formData.get("username"),
        description: formData.get("description"),
        RUC: formData.get("RUC"),
        whatsapp: formData.get("whatsapp"),
        address: formData.get("address"),
        social_urls: {
            facebook: formData.get("facebook"),
            instagram: formData.get("instagram"),
            tiktok: formData.get("tiktok"),
        },
    })
    //console.dir(validatedFields.error, { depth: null }, )
    //If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors)
        return {
            success: false,
            message: "There was a problem creating your profile.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    //Prepare the data to be updated and update the profile
    const { error, status, statusText } = await supabase
        .from("profiles")
        .update(validatedFields.data)
        .eq("user_id", userId)
    console.log(status)
    console.log(statusText)

    // if the status is 409, it means there is a conflict
    // in this case, the username already exists
    if (status === 409) {
        return {
            success: false,
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
            success: false,
            message: error.message,
            errors: {},
        }
    }
    const username = formData?.get("username")
    console.log("username", username)
    await revalidateBusinessProfile()
    return {
        success: true,
        message: "Perfil actualizado exitosamente!",
        errors: null,
    }
}
//action for create profile
export const createProfile = async (
    prevState: ProfileState,
    formData: FormData
): Promise<ProfileState> => {
    const supabase = createServerSupabaseClient()
    const userId = await verifyAuthUser()
    const validatedFields = PROFILE_FORM_SCHEMA.safeParse({
        name: formData.get("name"),
        username: formData.get("username"),
        description: formData.get("description"),
        RUC: formData.get("RUC"),
        whatsapp: formData.get("whatsapp"),
        address: formData.get("address"),
        social_urls: {
            facebook: formData.get("facebook"),
            instagram: formData.get("instagram"),
            tiktok: formData.get("tiktok"),
        },
    })
    if (!validatedFields.success) {
        return {
            success: false,
            message: "There was a problem creating your profile.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    //console.log(validatedFields.data)
    const { error, status } = await supabase.from("profiles").insert({
        ...validatedFields.data,
        user_id: userId,
    })
    if (status === 409) {
        // 409 es el código de estado para conflictos
        return {
            success: false,
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
            success: false,
            message: error.message,
            errors: {},
        }
    }
    await revalidateBusinessProfile()
    revalidatePath("/dashboard/profile")
    return {
        success: true,
        message: "Perfil creado exitosamente!",
        errors: null,
    }
}
//create product

export const addProduct = async (
    prevState: ProductState,
    formData: FormData
): Promise<ProductState> => {
    console.log("formData", formData)
    // VALIDATIONS ->formData
    const data = Object.fromEntries(formData)
    console.log("data", data)
    const validatedFields = PRODUCT_FORM_SCHEMA.safeParse({
        name: data.name,
        description: data.description,
        price: Number(data.price),
    })
    // -> File image
    const file = data.file as File
    if (!file) {
        return {
            success: false,
            message: "La imagen es requerida",
            errors: {},
        }
    }
    if (file.size > 1024 * 1024) {
        return {
            success: false,
            message: "El archivo es demasiado grande, 1mb máximo",
            errors: {},
        }
    }
    if (!validatedFields.success) {
        return {
            success: false,
            message: "Error de validación: ingresa datos correctos",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    const userId = await verifyAuthUser()
    if (!userId) {
        console.error("Error getting user:", userId)

        return {
            success: false,
            message: "Error al obtener el usuario",
            errors: {},
        }
    }
    const user_id = userId
    const supabase = createServerSupabaseClient()
    const { data: perfilData, error: perfilError } = await supabase
        .from("profiles")
        .select("id")
        .eq("user_id", user_id)
        .single()
    if (perfilError || !perfilData) {
        console.error("Error getting profile:", perfilError.message)

        return {
            success: false,
            message: "Perfil no encontrado",
            errors: {},
        }
    }
    const perfil_id = perfilData.id

    //upload image to cloudinary

    const { success, imageUrl } = await uploadProductImage(file)
    if (!success) {
        return {
            success: false,
            message: "Error al subir la imagen a cloudinary",
            errors: {},
        }
    }

    const { data: productDataResponse, error: productError } = await supabase
        .from("products")
        .insert({
            ...validatedFields.data,
            perfil_id: perfil_id,
            image_url: [imageUrl],
        })

    if (productError) {
        console.error("Error creating product:", productError.message)
        return {
            success: false,
            message: "Error al crear el producto",
            errors: {},
        }
    } else {
        console.log("Product created successfully:", productDataResponse)
        revalidatePath("/dashboard/products")
        await revalidateBusinessProfile()
        return {
            success: true,
            message: "Producto creado exitosamente!",
            errors: null,
        }
    }
}

export const deleteProductAction = async (
    id: string
): Promise<ProductState> => {
    const supabase = createServerSupabaseClient()
    const { error, data, statusText } = await supabase
        .from("products")
        .delete()
        .eq("id", id)

    {
        console.log("id", id)
        console.log("error", error)
        console.log("data", data)
        console.log("statusText", statusText)
    }

    if (error) {
        console.error("Error deleting product:", error.message)
        return {
            success: false,
            message: "Error al eliminar el producto",
            errors: {},
        }
    }
    await revalidateBusinessProfile()
    revalidatePath("/dashboard/products")
    return {
        success: true,
        message: "Producto eliminado exitosamente!",
        errors: null,
    }
}
