"use server"
import {
    v2 as cloudinary,
    UploadApiResponse,
    UploadApiErrorResponse,
} from "cloudinary"
import { createServerSupabaseClient } from "./supbase-clerk/server"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { revalidateBusinessProfile } from "./revalidate"

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
const apiSecret = process.env.CLOUDINARY_API_SECRET

if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
        "Cloudinary configuration is missing. Please check your environment variables."
    )
}

cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
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
        const { data, error } = await supbase
            .from("profiles")
            .update({
                image_url: imageUrl.secure_url,
            })
            .eq("user_id", userId)
        if (error) {
            return { success: false, imageUrl: null, error: error.message }
        }
        console.log("data", data)
        revalidatePath("/dashboard/profile")
        await revalidateBusinessProfile()

        return { success: true, imageUrl: imageUrl.secure_url, error: null }
    }
    return { success: false, imageUrl: null, error: "Failed to upload image" }
}
export const uploadProductImage = async (file: File | undefined) => {
    try {
        if (!file) {
            return {
                success: false,
                imageUrl: null,
                error: "No se ha subido ningún archivo",
            }
        }

        const { userId } = (await auth()) ?? {}
        if (!userId) {
            return {
                success: false,
                imageUrl: null,
                error: "No se pudo autenticar al usuario",
            }
        }
        const arrayBuffer = await file.arrayBuffer()
        const buffer = new Uint8Array(arrayBuffer)

        try {
            const imageUrl = await new Promise<
                UploadApiResponse | UploadApiErrorResponse | undefined
            >((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream(
                        {
                            resource_type: "image",
                            folder: FOLDER,
                            tags: [`${userId}`],
                        },
                        function (error, result) {
                            if (error) {
                                console.error("Error en Cloudinary:", error)
                                reject(error)
                                return
                            }
                            resolve(result)
                        }
                    )
                    .end(buffer)
            })

            if (!imageUrl || "error" in imageUrl) {
                return {
                    success: false,
                    imageUrl: null,
                    error: "Error al procesar la imagen en Cloudinary",
                }
            }
            return {
                success: true,
                imageUrl: imageUrl.secure_url,
                error: null,
            }
        } catch (uploadError) {
            console.error("Error en la subida a Cloudinary:", uploadError)
            return {
                success: false,
                imageUrl: null,
                error:
                    uploadError instanceof Error
                        ? uploadError.message
                        : "Error al subir la imagen a Cloudinary",
            }
        }
    } catch (error) {
        console.error("Error general en uploadProductImage:", error)
        return {
            success: false,
            imageUrl: null,
            error:
                error instanceof Error
                    ? error.message
                    : "Error desconocido al procesar la imagen",
        }
    }
}
