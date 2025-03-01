"use client"
import { uploadImage } from "@/actions/storage"
import { addProduct } from "@/actions/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { convertBlobUrlToFile } from "@/lib/utils"
import { getAuth, useGetUser } from "@/utils/supabase/auth/client"
import { Toast } from "@radix-ui/react-toast"
import { FileImageIcon } from "lucide-react"
import Image from "next/image"
import { ChangeEvent, useRef, useState, useTransition } from "react"
import toast from "react-hot-toast"
export default function ProductForm() {
    const user = useGetUser()

    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [imageUrlUploaded, setImageUrlUploaded] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files)
            const newImageUrls = filesArray.map((file) => {
                return URL.createObjectURL(file)
            })
            setImageUrls([...imageUrls, ...newImageUrls])
        }
    }
    const [isPending, startTransition] = useTransition()

    const handleClickUploadImagesButton = async () => {
        if (!user) {
            toast.error("You need to be logged in to upload image")
            return
        }
        if (!imageUrls.length) {
            toast.error("Please select an image to upload")
            return
        }

        startTransition(async () => {
            let urls = []
            for (const url of imageUrls) {
                const imageFile = await convertBlobUrlToFile(url)

                const { imageUrl, error } = await uploadImage({
                    file: imageFile,
                    bucket: "izmport-images",
                    folder: user.id,
                })

                if (error) {
                    toast.error(error)
                    return
                }

                urls.push(imageUrl)
            }
            setImageUrlUploaded(urls)
            console.log("urls", urls)
            const auth = getAuth()
            await auth.updateUser({})
            toast.success("Successfully uploaded image")
            setImageUrls([])
        })
    }
    const handleSubmit = async (formData: FormData) => {
        formData.append("image_url", imageUrlUploaded[0])
        const { message } = await addProduct(formData)
        toast.success(message)
        console.log("Product added")
        setImageUrlUploaded([])
    }
    return (
        <form className="flex gap-3 flex-col pt-8" action={handleSubmit}>
            <Label>Titulo</Label>
            <Input name="name" placeholder="Product Name" required />
            <Label>Descripcion</Label>
            <Input
                name="description"
                placeholder="Product Description"
                required
            />
            <Label>Precio</Label>
            <Input name="price" placeholder="Product Price" required />
            <input
                type="file"
                multiple
                hidden
                ref={inputRef}
                onChange={handleChange}
                aria-describedby="file_input_help"
                required
            />
            <Label>Imagen</Label>
            <div className="flex items-center flex-col justify-center border rounded-md p-2 gap-2">
                <button
                    className=" w-full border flex flex-col items-center justify-center gap-1 py-4 "
                    onClick={() => {
                        inputRef.current.click()
                    }}
                >
                    <FileImageIcon />
                    Seleccionar Imagenes
                </button>
                <div className="grid  w-full  grid-cols-1 md:grid-cols-2 gap-1">
                    {imageUrls.map((url) => (
                        <Image
                            key={url}
                            src={url}
                            width={300}
                            height={300}
                            alt={`image-${url}`}
                            className="w-full h-auto aspect-square object-cover"
                        />
                    ))}
                </div>
            </div>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                SVG, PNG, JPG (MAX. 800x400px).
            </p>
            <Button
                variant="link"
                className="border p-2 "
                type="button"
                onClick={handleClickUploadImagesButton}
                disabled={isPending}
            >
                {isPending ? "Subiendo..." : "Subir Imagen"}
            </Button>

            <Button className="mt-8" type="submit">
                Añadir Producto
            </Button>
        </form>
    )
}
