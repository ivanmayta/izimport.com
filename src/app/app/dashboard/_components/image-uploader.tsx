"use client"
import { uploadImage } from "@/lib/cloudinary"
import { cn } from "@/lib/utils"
import { Camera, Edit, Loader2 } from "lucide-react"
import { ChangeEvent, useTransition } from "react"
import { toast } from "sonner"

export function ImageUploader({ initialImage }: { initialImage: string }) {
    const [isPending, startTransition] = useTransition()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            startTransition(async () => {
                const { success } = await uploadImage(file)
                if (success) {
                    toast.success("Imagen subida correctamente")
                } else {
                    toast.error("Error al subir la imagen")
                }
            })
        }
    }
    return (
        <form className="flex flex-row gap-4 items-center">
            <div className="relative">
                {initialImage ? (
                    <img
                        className="w-16 h-16 border rounded-full object-contain"
                        src={initialImage}
                        alt="Logo del negocio"
                    />
                ) : (
                    <div className="w-16 h-16 border rounded-full flex items-center justify-center">
                        <Camera className="w-4 h-4" />
                    </div>
                )}
                <label
                    htmlFor="image-uploader"
                    className={cn(
                        "absolute w-16 h-16 cursor-pointer inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-full",
                        isPending && "opacity-100"
                    )}
                >
                    {isPending ? (
                        <Loader2 className="h-6 w-6 text-white animate-spin" />
                    ) : (
                        <Edit className="h-5 w-5 text-white" />
                    )}
                    <input
                        onChange={handleChange}
                        id="image-uploader"
                        className="hidden"
                        type="file"
                        name="file"
                        accept="image/jpeg,image/png,image/gif,image/webp,image/avif"
                    />
                </label>
            </div>
            <div>
                <p className="text-sm text-orange-600 font-bold">
                    {isPending
                        ? "actualizando..."
                        : "Click para cargar nueva imagen"}
                </p>
                <p className="text-sm text-gray-500">
                    Tamaño recomendado: 100x100px
                </p>
            </div>
        </form>
    )
}
