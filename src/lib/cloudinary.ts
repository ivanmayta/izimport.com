"use server"
import {
    v2 as cloudinary,
    UploadApiResponse,
    UploadApiErrorResponse,
} from "cloudinary"
import { createServerSupabaseClient } from "./supbase-clerk/server"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
})

const FOLDER = "izimport"

export const uploadImage = async (file: File | undefined) => {
    //TODO: Add validation for file size and type
    if (!file) {
        return { success: false, imageUrl: null, error: "No file uploaded" }
    }

    const supbase = createServerSupabaseClient()
    const { userId } = await auth()

    const arrayBuffer = await file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)
    const imageUrl: UploadApiErrorResponse | UploadApiResponse | undefined =
        await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream(
                    {
                        resource_type: "image",
                        folder: FOLDER,
                        tags: [`${userId}`],
                    },
                    function (error, result) {
                        if (error) {
                            reject(error)
                        }
                        resolve(result)
                    }
                )
                .end(buffer)
        })
    if (imageUrl) {
        const { error } = await supbase
            .from("profiles")
            .update({
                image_url: imageUrl.secure_url,
            })
            .eq("user_id", userId)
        if (error) {
            return { success: false, imageUrl: null, error: error.message }
        }
        revalidatePath("/app/dashboard/profile")
        return { success: true, imageUrl: imageUrl.secure_url, error: null }
    }
    return { success: false, imageUrl: null, error: "Failed to upload image" }
}
