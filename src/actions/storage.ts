import { createClient } from "@/lib/supabase/client"
import imageCompression from "browser-image-compression"
import { v4 as uuidv4 } from "uuid"

type uploadProps = {
    file: File
    bucket: string
    folder?: string
}
function getStorage() {
    const { storage } = createClient()
    return storage
}
export async function uploadImage({ file, bucket, folder }: uploadProps) {
    const fileName = file.name
    const fileExtension = fileName.slice(fileName.lastIndexOf("." + 1))
    const path = `${folder ? folder + "/" : ""}${uuidv4()}.${fileExtension}`

    try {
        file = await imageCompression(file, {
            maxSizeMB: 1,
        })
    } catch (e) {
        console.error(e)
        return { imageUrl: "", error: "Error comprimiendo la imagen" }
    }
    const storage = getStorage()
    const { data, error } = await storage.from(bucket).upload(path, file)
    if (error) {
        console.error(error)
        return { imageUrl: "", error: "Error subiendo la imagen" }
    }
    const imageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${bucket}/${data?.path}`
    return { imageUrl, error: "" }
}
