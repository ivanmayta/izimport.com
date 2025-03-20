"use client"

import type React from "react"

import { useRef, useState, useTransition, useEffect } from "react"
import Image from "next/image"
import { Camera, Loader2, PencilLine } from "lucide-react"
import { deleteImage, uploadImage } from "@/supabase/storage/client"
import { updateUserAvatarAction } from "@/actions/supabase"
import { getAuth } from "@/lib/supabase/auth/client"
import { convertBlobUrlToFile } from "@/lib/utils"
import toast from "react-hot-toast"
import { Label } from "../ui/label"

export default function ProfileImageUploader({
    user,
    profile,
    size = 80, // Smaller default size
}) {
    const [imageUrl, setImageUrl] = useState<string>("")
    const [isPending, startTransition] = useTransition()

    const imageInputRef = useRef<HTMLInputElement>(null)

    // Clean up object URL when component unmounts or when imageUrl changes
    useEffect(() => {
        return () => {
            if (imageUrl && imageUrl.startsWith("blob:")) {
                URL.revokeObjectURL(imageUrl)
            }
        }
    }, [imageUrl])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            // Clean up previous blob URL if it exists
            if (imageUrl && imageUrl.startsWith("blob:")) {
                URL.revokeObjectURL(imageUrl)
            }

            const file = e.target.files[0]
            const newImageUrl = URL.createObjectURL(file)
            setImageUrl(newImageUrl)

            // Auto-upload when file is selected
            handleUploadImage(file)

            // Reset the input value so the same file can be selected again if needed
            e.target.value = ""
        }
    }

    const handleUploadImage = async (file?: File) => {
        if (!user) {
            toast.error("You need to be logged in to upload an image")
            return
        }

        if (!imageUrl && !file) {
            toast.error("Please select an image to upload")
            return
        }

        startTransition(async () => {
            try {
                // First, delete the existing profile image if there is one
                if (profile?.image_url) {
                    const { data, error } = await deleteImage(profile.image_url)
                    if (error) {
                        console.error("Error deleting previous image:", error)
                        // Continue with upload even if delete fails
                    }
                }

                // Then upload the new image
                const imageFile = file || (await convertBlobUrlToFile(imageUrl))

                const { imageUrl: avatarUrl, error } = await uploadImage({
                    file: imageFile,
                    bucket: "profile-images",
                    folder: user.id,
                })

                if (error) {
                    throw new Error(error)
                }

                await updateUserAvatarAction(avatarUrl)
                const auth = getAuth()
                await auth.updateUser({})

                toast.success("Profile image updated")

                // Clean up the blob URL after successful upload
                if (imageUrl && imageUrl.startsWith("blob:")) {
                    URL.revokeObjectURL(imageUrl)
                }
                setImageUrl("")
            } catch (error) {
                toast.error(
                    error instanceof Error
                        ? error.message
                        : "Failed to upload image"
                )
            }
        })
    }

    return (
        <div className="flex flex-col gap-4">
            {/* Avatar with edit overlay */}
            <Label className="font-semibold">Imagen de Perfil</Label>

            <div className="relative">
                <div
                    className="relative rounded-full overflow-hidden bg-muted"
                    style={{ width: size, height: size }}
                >
                    {imageUrl ? (
                        <Image
                            src={imageUrl || "/placeholder.svg"}
                            alt="Profile preview"
                            fill
                            className="object-cover"
                        />
                    ) : profile?.image_url ? (
                        <Image
                            src={profile.image_url || "/placeholder.svg"}
                            alt="Current profile"
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full w-full bg-muted text-muted-foreground">
                            <Camera size={size / 2.5} />
                        </div>
                    )}

                    {/* Edit button overlay */}
                    <button
                        onClick={() => imageInputRef.current?.click()}
                        disabled={isPending}
                        className="absolute  inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-full"
                        aria-label="Change profile picture"
                    >
                        {isPending ? (
                            <Loader2 className="h-6 w-6 text-white animate-spin" />
                        ) : (
                            <PencilLine className="h-5 w-5 text-white" />
                        )}
                    </button>

                    <input
                        type="file"
                        hidden
                        ref={imageInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                        disabled={isPending}
                        aria-label="Upload profile image"
                    />
                </div>
            </div>

            {/* Optional text prompt */}
            <div className="text-sm text-muted-foreground">
                {isPending ? (
                    "Updating..."
                ) : (
                    <span>Haz clic en la foto de perfil para cambiarla.</span>
                )}
            </div>
        </div>
    )
}
