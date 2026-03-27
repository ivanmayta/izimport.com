"use server"

import { revalidatePath } from "next/cache"
import { createServerSupabaseClient } from "./supbase-clerk/server"
import { PRODUCT_FORM_SCHEMA, PROFILE_FORM_SCHEMA } from "./validations"
import { ProductState, ProfileState } from "@/types/states"
import { uploadProductImage } from "./cloudinary"
import { revalidateBusinessProfile } from "./revalidate"
import { verifyAuthUser } from "./dal"

const MESSAGES = {
    PROFILE_VALIDATION_ERROR: "Hay un problema con los datos ingresados.",
    PROFILE_UPDATED: "Perfil actualizado exitosamente!",
    PROFILE_CREATED: "Perfil creado exitosamente!",
    USERNAME_EXISTS: "Nombre de usuario ya existe",
    PRODUCT_VALIDATION_ERROR: "Error de validación: ingresa datos correctos",
    PRODUCT_CREATED: "Producto creado exitosamente!",
    PRODUCT_UPDATED: "Producto actualizado exitosamente!",
    PRODUCT_DELETED: "Producto eliminado exitosamente!",
    PRODUCT_IMAGE_REQUIRED: "La imagen es requerida",
    PRODUCT_IMAGE_TOO_LARGE: "El archivo es demasiado grande, 1mb máximo",
    PRODUCT_IMAGE_UPLOAD_ERROR: "Error al subir la imagen",
    PRODUCT_NOT_FOUND: "Perfil no encontrado",
    PRODUCT_CREATE_ERROR: "Error al crear el producto",
    PRODUCT_DELETE_ERROR: "Error al eliminar el producto",
    AUTH_ERROR: "Error al obtener el usuario",
} as const

export const updateProfile = async (
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
            message: MESSAGES.PROFILE_VALIDATION_ERROR,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { error, status } = await supabase
        .from("profiles")
        .update(validatedFields.data)
        .eq("user_id", userId)

    if (status === 409) {
        return {
            success: false,
            message: MESSAGES.USERNAME_EXISTS,
            errors: {
                username: [
                    `El nombre de usuario "${formData?.get("username")}" ya existe`,
                ],
            },
        }
    }
    if (error) {
        return {
            success: false,
            message: error.message,
            errors: {},
        }
    }

    await revalidateBusinessProfile()
    return {
        success: true,
        message: MESSAGES.PROFILE_UPDATED,
        errors: null,
    }
}

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
            message: MESSAGES.PROFILE_VALIDATION_ERROR,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { error, status } = await supabase.from("profiles").insert({
        ...validatedFields.data,
        user_id: userId,
    })

    if (status === 409) {
        return {
            success: false,
            message: MESSAGES.USERNAME_EXISTS,
            errors: {
                username: [
                    `El nombre de usuario "${formData?.get("username")}" ya existe`,
                ],
            },
        }
    }
    if (error) {
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
        message: MESSAGES.PROFILE_CREATED,
        errors: null,
    }
}

export const addProduct = async (
    prevState: ProductState,
    formData: FormData
): Promise<ProductState> => {
    const data = Object.fromEntries(formData)

    const validatedFields = PRODUCT_FORM_SCHEMA.safeParse({
        name: data.name,
        description: data.description,
        price: Number(data.price),
    })

    const file = data.file as File
    if (!file) {
        return {
            success: false,
            message: MESSAGES.PRODUCT_IMAGE_REQUIRED,
            errors: {},
        }
    }
    if (file.size > 1024 * 1024) {
        return {
            success: false,
            message: MESSAGES.PRODUCT_IMAGE_TOO_LARGE,
            errors: {},
        }
    }
    if (!validatedFields.success) {
        return {
            success: false,
            message: MESSAGES.PRODUCT_VALIDATION_ERROR,
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const userId = await verifyAuthUser()
    if (!userId) {
        return {
            success: false,
            message: MESSAGES.AUTH_ERROR,
            errors: {},
        }
    }

    const supabase = createServerSupabaseClient()
    const { data: perfilData, error: perfilError } = await supabase
        .from("profiles")
        .select("id")
        .eq("user_id", userId)
        .single()

    if (perfilError || !perfilData) {
        return {
            success: false,
            message: MESSAGES.PRODUCT_NOT_FOUND,
            errors: {},
        }
    }

    const { success, imageUrl } = await uploadProductImage(file)
    if (!success) {
        return {
            success: false,
            message: MESSAGES.PRODUCT_IMAGE_UPLOAD_ERROR,
            errors: {},
        }
    }

    const { error: productError } = await supabase.from("products").insert({
        ...validatedFields.data,
        perfil_id: perfilData.id,
        image_url: [imageUrl],
    })

    if (productError) {
        return {
            success: false,
            message: MESSAGES.PRODUCT_CREATE_ERROR,
            errors: {},
        }
    }

    revalidatePath("/dashboard/products")
    await revalidateBusinessProfile()
    return {
        success: true,
        message: MESSAGES.PRODUCT_CREATED,
        errors: null,
    }
}

export const updateProduct = async (
    prevState: ProductState,
    formData: FormData
): Promise<ProductState> => {
    try {
        const data = Object.fromEntries(formData)
        const id = parseInt(String(data.id), 10)
        const file = data.file as File | undefined

        const validatedFields = PRODUCT_FORM_SCHEMA.safeParse({
            name: String(data.name ?? ""),
            description: String(data.description ?? ""),
            price: Number(data.price ?? 0),
        })

        if (!validatedFields.success) {
            return {
                success: false,
                message: MESSAGES.PRODUCT_VALIDATION_ERROR,
                errors: validatedFields.error.flatten().fieldErrors,
            }
        }

        const userId = await verifyAuthUser()
        if (!userId) {
            return {
                success: false,
                message: MESSAGES.AUTH_ERROR,
                errors: {},
            }
        }

        const supabase = createServerSupabaseClient()

        let imageUrlArr: string[] | undefined
        if (file && file.size > 0) {
            if (file.size > 1024 * 1024) {
                return {
                    success: false,
                    message: MESSAGES.PRODUCT_IMAGE_TOO_LARGE,
                    errors: {},
                }
            }
            const { success, imageUrl } = await uploadProductImage(file)
            if (!success || !imageUrl) {
                return {
                    success: false,
                    message: MESSAGES.PRODUCT_IMAGE_UPLOAD_ERROR,
                    errors: {},
                }
            }
            imageUrlArr = [imageUrl]
        }

        const updatePayload: Record<string, unknown> = {
            name: validatedFields.data.name,
            description: validatedFields.data.description,
            price: validatedFields.data.price,
        }
        if (imageUrlArr) {
            updatePayload.image_url = imageUrlArr
        }

        const { error } = await supabase
            .from("products")
            .update(updatePayload)
            .eq("id", id)

        if (error) {
            return {
                success: false,
                message: error.message,
                errors: {},
            }
        }

        revalidatePath("/dashboard/products")
        await revalidateBusinessProfile()
        return {
            success: true,
            message: MESSAGES.PRODUCT_UPDATED,
            errors: null,
        }
    } catch (e: unknown) {
        return {
            success: false,
            message: e instanceof Error ? e.message : "Error inesperado",
            errors: {},
        }
    }
}

export const deleteProductAction = async (
    id: string
): Promise<ProductState> => {
    const supabase = createServerSupabaseClient()
    const { error } = await supabase.from("products").delete().eq("id", id)

    if (error) {
        return {
            success: false,
            message: MESSAGES.PRODUCT_DELETE_ERROR,
            errors: {},
        }
    }

    await revalidateBusinessProfile()
    revalidatePath("/dashboard/products")
    return {
        success: true,
        message: MESSAGES.PRODUCT_DELETED,
        errors: null,
    }
}
