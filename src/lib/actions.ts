"use server"

import { revalidatePath } from "next/cache"
import { createServerSupabaseClient } from "./supbase-clerk/server"
import { auth } from "@clerk/nextjs/server"
import { PROFILE_FORM_SCHEMA } from "./validations"
import { ProfileState } from "@/types/states"

//action for update profile
export const updateProfile = async (
    prevState: ProfileState,
    formData: FormData
): Promise<ProfileState> => {
    // create a supabase client and get the user
    const supabase = createServerSupabaseClient()
    const { userId } = await auth()
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
    revalidatePath("/dasboard")
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
    const { userId } = await auth()
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
    revalidatePath("/dashboard")
    return {
        success: true,
        message: "Perfil creado exitosamente!",
        errors: {},
    }
}
