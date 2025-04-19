"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import {
    PROFILE_FORM_SCHEMA,
    PRODUCT_FORM_SCHEMA,
} from "@/lib/scheme/validations"
import { getUser } from "@/lib/supabase/auth/server"
import { ProfileState, ProductState } from "@/types/supabase"

//[x]TODO make zod validation for update and create profile

export const updateProfile = async (
    prevState: ProfileState,
    formData: FormData
): Promise<ProfileState> => {
    // create a supabase client and get the user
    const supabase = await createClient()
    const { id: user_id } = await getUser()
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
        return {
            message: "There was a problem creating your profile.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    //Prepare the data to be updated and update the profile
    const { error, status, data, statusText } = await supabase
        .from("profile")
        .update(validatedFields.data)
        .eq("user_id", user_id)
    console.log(status)
    console.log(statusText)

    // if the status is 409, it means there is a conflict
    // in this case, the username already exists
    if (status === 409) {
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
        message: "Perfil actualizado exitosamente!",
        errors: {},
    }
}

export const createProfile = async (
    prevState: ProfileState,
    formData: FormData
): Promise<ProfileState> => {
    const supabase = await createClient()
    const { id: user_id } = await getUser()

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
            message: "There was a problem creating your profile.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    //console.log(validatedFields.data)
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
//TODO make zod validation for add product
//TODO [ ] fix price error

export const addProduct = async (
    prevState: ProductState,
    formData: FormData
): Promise<ProductState> => {
    const supabase = await createClient()
    const { data: userData, error: userError } = await supabase.auth.getUser()
    if (userError) {
        console.error("Error getting user:", userError.message)

        return {
            message: "Error getting user",
            errors: {},
        }
    }
    const user_id = userData.user.id
    const {
        data: perfilData,
        error: perfilError,
        status,
    } = await supabase
        .from("profile")
        .select("id")
        .eq("user_id", user_id)
        .single()
    if (perfilError) {
        console.error("Error getting profile:", perfilError.message)

        return {
            message: "Profile not found",
            errors: {},
        }
    }
    const perfil_id = perfilData.id
    // Prepare product data
    const validatedFields = PRODUCT_FORM_SCHEMA.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
        price: Number(formData.get("price")),
        image_url: formData.get("image_url"),
    })
    const productData = {
        perfil_id: perfil_id,

        name: formData.get("name"),
        description: formData.get("description"),
        price: formData.get("price"),
        image_url: formData.get("image_url"),
    }
    // Insert the product
    console.log(validatedFields.data)
    if (!validatedFields.success) {
        return {
            message: "Hubo un problema al crear el producto.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    console.log(validatedFields.data)
    const { data: productDataResponse, error: productError } = await supabase
        .from("product")
        .insert({ ...validatedFields.data, perfil_id: perfil_id })

    if (productError) {
        console.error("Error creating product:", productError.message)
        return {
            message: "Error creating product",
            errors: {},
        }
    } else {
        console.log("Product created successfully:", productDataResponse)
        revalidatePath("/dashboard/products")
        return {
            message: "Product created successfully!",
            errors: {},
        }
    }
}

export const addProduct2 = async (
    prevState: ProductState,
    formData: FormData
): Promise<ProductState> => {
    const supabase = await createClient()
    const { data: userData, error: userError } = await supabase.auth.getUser()
    if (userError) {
        console.error("Error getting user:", userError.message)

        return {
            message: "Error getting user",
            errors: {},
        }
    }
    const user_id = userData.user.id
    const {
        data: perfilData,
        error: perfilError,
        status,
    } = await supabase
        .from("profile")
        .select("id")
        .eq("user_id", user_id)
        .single()
    if (perfilError) {
        console.error("Error getting profile:", perfilError.message)

        return {
            message: "Profile not found",
            errors: {},
        }
    }
    const perfil_id = perfilData.id

    // Validate with the schema
    const validatedFields = PRODUCT_FORM_SCHEMA.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
        price: Number(formData.get("price")),
        image_url: formData.get("image_url"),
    })

    if (!validatedFields.success) {
        return {
            message: "Hubo un problema al crear el producto.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // Insert the product with validated data and the profile ID
    const { data: productDataResponse, error: productError } = await supabase
        .from("product")
        .insert({ ...validatedFields.data, perfil_id: perfil_id })

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

export const deleteProductAction = async (
    id: string
): Promise<ProductState> => {
    const supabase = await createClient()
    const { error, data, statusText, status } = await supabase
        .from("product")
        .delete()
        .eq("id", id)

    {
        /*
        console.log("id", id)
        console.log("error", error)
        console.log("data", data)
        console.log("statusText", statusText)
        
        */
    }

    if (error) {
        console.error("Error deleting product:", error.message)
        return {
            message: "Error deleting product",
            errors: {},
        }
    }
    revalidatePath("/dashboard/products")
    return {
        message: "Product deleted successfully!",
        errors: {},
    }
}

export async function updateUserAvatarAction(avatarUrl: string | null) {
    try {
        const user = await getUser()
        if (!user) throw new Error("Must be logged in to update avatar")

        const supabase = await createClient()

        const { error } = await supabase
            .from("profile")
            .update({ image_url: avatarUrl })
            .eq("user_id", user.id)

        if (error) throw error
        revalidatePath("/dashboard")
        return { errorMessage: null }
    } catch (error) {
        return { errorMessage: "Something went wrong" }
    }
}
