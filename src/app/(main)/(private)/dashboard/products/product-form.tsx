"use client"
import { uploadImage } from "@/actions/storage"
import { addProduct } from "@/actions/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn, convertBlobUrlToFile } from "@/lib/utils"
import { FileImageIcon, X } from "lucide-react"
import Image from "next/image"
import {
    type ChangeEvent,
    useActionState,
    useEffect,
    useRef,
    useState,
    useTransition,
} from "react"
import toast from "react-hot-toast"

export default function ProductForm({ user, setActiveView }) {
    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [imageUrlUploaded, setImageUrlUploaded] = useState<string[]>([])
    const [uploadingIndex, setUploadingIndex] = useState<number | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const initialState = { message: null, errors: {} }
    const [state, formAction, pending] = useActionState(
        addProduct,
        initialState
    )
    const [isPending, startTransition] = useTransition()

    // Handle file selection
    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return

        // Check if adding new files would exceed the 3-image limit
        const filesArray = Array.from(e.target.files)
        const totalImages =
            imageUrls.length + imageUrlUploaded.length + filesArray.length

        if (totalImages > 3) {
            toast.error("Maximum 3 images allowed")
            return
        }

        // Create object URLs for preview
        const newImageUrls = filesArray.map((file) => {
            return URL.createObjectURL(file)
        })
        setImageUrls([...imageUrls, ...newImageUrls])

        // Automatically upload images when selected
        if (!user) {
            toast.error("You need to be logged in to upload images")
            return
        }

        startTransition(async () => {
            const urls = []
            for (let i = 0; i < newImageUrls.length; i++) {
                const url = newImageUrls[i]
                setUploadingIndex(i)

                const imageFile = await convertBlobUrlToFile(url)

                const { imageUrl, error } = await uploadImage({
                    file: imageFile,
                    bucket: "izmport-images",
                    folder: user.id,
                })

                if (error) {
                    toast.error(error)
                    // Remove the failed image from preview
                    setImageUrls((prev) => prev.filter((item) => item !== url))
                    continue
                }

                urls.push(imageUrl)
            }

            setUploadingIndex(null)
            setImageUrlUploaded((prev) => [...prev, ...urls])
            setImageUrls([]) // Clear previews after successful upload

            if (urls.length > 0) {
                toast.success("Images uploaded successfully")
            }
        })
    }

    // Handle form submission
    const handleSubmit = async (formData: FormData) => {
        if (imageUrlUploaded.length === 0) {
            toast.error("Please upload at least one image")
            return
        }

        // Join all image URLs with comma
        formData.append("image_url", imageUrlUploaded[0])
        formAction(formData)
    }

    // Handle removing an uploaded image
    const handleRemoveUploadedImage = (index: number) => {
        setImageUrlUploaded((prev) => {
            const newUrls = [...prev]
            newUrls.splice(index, 1)
            return newUrls
        })
    }

    // Handle removing a preview image
    const handleRemovePreviewImage = (index: number) => {
        setImageUrls((prev) => {
            const newUrls = [...prev]
            newUrls.splice(index, 1)
            return newUrls
        })
    }

    // Show toast messages based on state
    useEffect(() => {
        if (!state?.message) return

        if (state.message === "Product created successfully!") {
            toast.success(state.message)
            //change to list
            setActiveView("list")
            // Clear images after successful product creation
            setImageUrlUploaded([])
        } else if (state.message === "Profile not found") {
            toast.error("Perfil no encontrado. Por favor, complete su perfil")
        } else if (state.message.includes("Error")) {
            toast.error(state.message)
        } else {
            toast.error(state.message)
        }
    }, [state?.message])

    // Calculate total images
    const totalImages = imageUrls.length + imageUrlUploaded.length
    const canAddMoreImages = totalImages < 1

    return (
        <form className="flex gap-3 flex-col" action={handleSubmit}>
            <ul className="flex flex-col gap-3">
                <li>
                    <input
                        type="file"
                        multiple
                        hidden
                        ref={inputRef}
                        onChange={handleChange}
                        accept="image/*"
                        aria-describedby="file_input_help"
                    />
                    <Label className="font-semibold">Imagen</Label>
                    <div className="flex items-center flex-col justify-center border rounded-md p-4 gap-3">
                        {canAddMoreImages ? (
                            <button
                                type="button"
                                className="w-full border flex flex-col items-center justify-center gap-2 py-6 rounded"
                                onClick={() => inputRef.current?.click()}
                                disabled={isPending}
                            >
                                <FileImageIcon className="h-8 w-8 text-gray-400" />
                                <span>
                                    {isPending
                                        ? "Subiendo..."
                                        : `Seleccionar Imágenes (${totalImages}/1)`}
                                </span>
                            </button>
                        ) : (
                            <div className=" flex flex-col items-center w-full text-center text-sm text-gray-500 py-2">
                                <FileImageIcon className="h-8 w-8 text-gray-400" />

                                <span>
                                    {isPending
                                        ? "Subiendo..."
                                        : `Seleccionar Imágenes (${totalImages}/1)`}
                                </span>
                                <span>Límite de 1 imágenes alcanzado</span>
                            </div>
                        )}

                        {/* Preview images */}
                        {imageUrls.length > 0 && (
                            <div className="w-full">
                                <p className="text-sm font-medium mb-2">
                                    Imágenes pendientes de subir:
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    {imageUrls.map((url, index) => (
                                        <div key={url} className="relative">
                                            <div className="relative aspect-square overflow-hidden rounded-md border">
                                                <Image
                                                    src={
                                                        url ||
                                                        "/placeholder.svg"
                                                    }
                                                    fill
                                                    alt={`Preview ${index + 1}`}
                                                    className="object-cover"
                                                />
                                                {uploadingIndex === index && (
                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                        <span className="text-white text-sm font-medium">
                                                            Subiendo...
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemovePreviewImage(
                                                        index
                                                    )
                                                }
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                                                disabled={isPending}
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Uploaded images */}
                        {imageUrlUploaded.length > 0 && (
                            <div className="w-full">
                                <p className="text-sm font-medium mb-2">
                                    Imágenes subidas:
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    {imageUrlUploaded.map((url, index) => (
                                        <div key={url} className="relative">
                                            <div className="relative aspect-square overflow-hidden rounded-md border">
                                                <Image
                                                    src={
                                                        url ||
                                                        "/placeholder.svg"
                                                    }
                                                    fill
                                                    alt={`Uploaded ${
                                                        index + 1
                                                    }`}
                                                    className="object-cover"
                                                />
                                                <div className="absolute bottom-1 right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                                    Subida
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    handleRemoveUploadedImage(
                                                        index
                                                    )
                                                }
                                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                                                disabled={isPending || pending}
                                            >
                                                <X className="h-4 w-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <p
                        className={cn("text-sm mt-1", {
                            "text-red-500": state?.errors?.image_url,
                            "text-slate-500": !state?.errors?.image_url,
                        })}
                    >
                        {state?.errors?.image_url
                            ? state.errors?.image_url
                            : "SVG, PNG, JPG (MAX. 800x400px). Máximo 1 imágenes."}
                    </p>
                </li>
                <li>
                    <Label className="font-semibold">Titulo</Label>
                    <Input name="name" placeholder="Product Name" />
                    <p
                        className={cn("text-sm", {
                            "text-red-500": state?.errors?.name,
                            "text-slate-500": !state?.errors?.name,
                        })}
                    >
                        {state?.errors?.name
                            ? state.errors.name
                            : "Nombre del tu producto (maximo 100 caracteres)"}
                    </p>
                </li>
                <li>
                    <Label className="font-semibold">Descripcion</Label>
                    <Input
                        name="description"
                        placeholder="Product Description"
                    />
                    <p
                        className={cn("text-sm", {
                            "text-red-500": state?.errors?.description,
                            "text-slate-500": !state?.errors?.description,
                        })}
                    >
                        {state?.errors?.description
                            ? state.errors?.description
                            : "Descripción breve del producto (maximo 230 caracteres)"}
                    </p>
                </li>
                <li>
                    <Label className="font-semibold">Precio</Label>
                    <Input name="price" placeholder="Product Price" />
                    <p
                        className={cn("text-sm", {
                            "text-red-500": state?.errors?.price,
                            "text-slate-500": !state?.errors?.price,
                        })}
                    >
                        {state?.errors?.price
                            ? state.errors.price
                            : "El precio debe ser mayor a 0"}
                    </p>
                </li>
            </ul>

            <Button
                className="mt-8"
                type="submit"
                disabled={pending || isPending || imageUrlUploaded.length === 0}
            >
                {pending ? "Añadiendo producto..." : "Añadir Producto"}
            </Button>
        </form>
    )
}
