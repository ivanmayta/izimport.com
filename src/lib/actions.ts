"use server"

import { createServerSupabaseClient } from "./supbase-clerk/server"

export const inserProfile = async (id: string, formData: FormData) => {
    const supabase = createServerSupabaseClient()
    const dataToInsert = Object.fromEntries(formData.entries())
    const { data, error } = await supabase.from("profiles").insert({
        user_id: `${id}`,
        username: dataToInsert.username,
    })
    console.log("data", data)
    console.log("error", error)
}
export const updateProfile = async (id: string, formData: FormData) => {
    const supabase = createServerSupabaseClient()
    const dataToInsert = Object.fromEntries(formData.entries())
    console.log("id", id)
    console.log("dataToInsert", dataToInsert)
    const { data, error, status, statusText } = await supabase
        .from("profiles")
        .update({
            username: dataToInsert.username,
        })
        .eq("user_id", `${id}`)
    console.log("info->", { data, error, status, statusText })
    if (error) {
        console.error("Error updating profile:", error)
    } else {
        console.log("Update successful:", data)
    }
}

export const handleAction = async (formData: FormData) => {
    "use server"
    console.log("formData", formData)
    // const data = Object.fromEntries(formData.entries())
    // console.log("data", data)
}
