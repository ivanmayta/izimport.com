"use client"
import { uploadImage } from "@/lib/cloudinary"
import { cn } from "@/lib/utils"
import { Text } from "@radix-ui/themes"
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
        <div>
            <div className="flex flex-col  my-6">
                <Text as="div" size="4" weight="medium">
                    Imagen de Perfil
                </Text>
                <Text as="span" size="2" color="gray" className="mb-3">
                    Sube una imagen para el perfil de negocio
                </Text>
            </div>
            <form className="flex flex-col gap-4">
                <div className="relative">
                    {initialImage ? (
                        <img
                            className="w-20 h-20 border rounded-full object-contain"
                            src={initialImage}
                            alt="Logo del negocio"
                        />
                    ) : (
                        <div className="w-20 h-20 border rounded-full flex items-center justify-center">
                            <Camera className="w-4 h-4" />
                        </div>
                    )}
                    <label
                        htmlFor="image-uploader"
                        className={cn(
                            "absolute w-20 h-20 cursor-pointer inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center rounded-full",
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
                            accept="image/jpeg,image/png,image/gif,image/webp"
                        />
                    </label>
                </div>
                <p className="text-sm text-gray-500">
                    {isPending
                        ? "actualizando..."
                        : "Click en la imagen para editar"}
                </p>
            </form>
        </div>
    )
}
