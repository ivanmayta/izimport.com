"use client"
import { uploadImage } from "@/actions/storage"
import { addProduct } from "@/actions/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn, convertBlobUrlToFile } from "@/lib/utils"
import { getAuth, useGetUser } from "@/utils/supabase/auth/client"
import { Toast } from "@radix-ui/react-toast"
import { FileImageIcon } from "lucide-react"
import Image from "next/image"
import {
    ChangeEvent,
    useActionState,
    useEffect,
    useRef,
    useState,
    useTransition,
} from "react"
import toast from "react-hot-toast"
export default function ProductForm() {
    const user = useGetUser()

    const [imageUrls, setImageUrls] = useState<string[]>([])
    const [imageUrlUploaded, setImageUrlUploaded] = useState<string[]>([])
    const inputRef = useRef<HTMLInputElement>(null)
    const initialState = { message: null, errors: {} }
    const [state, formAction, pending] = useActionState(
        addProduct,
        initialState
    )
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
            console.log(imageUrlUploaded)
            //console.log("urls", urls)
            const auth = getAuth()
            await auth.updateUser({})
            toast.success("Successfully uploaded image")
            setImageUrls([])
        })
    }

    const handleSubmit = async (formData: FormData) => {
        formData.append("image_url", imageUrlUploaded[0])
        formAction(formData)
        //toast.success(message)
        //toast.custom(state.message)
        //console.log("Product added")
        setImageUrlUploaded([])
    }
    useEffect(() => {
        if (state?.message) {
            toast.custom(`${state.message}`)
        }
        if (state.message === "Profile not found") {
            toast.error("Perfil no encontrado. Por favor, complete su perfil")
        }
    }, [state])
    console.log(state)
    return (
        <form className="flex gap-3 flex-col pt-8" action={handleSubmit}>
            <ul className="flex flex-col gap-3">
                <li>
                    <input
                        type="file"
                        multiple
                        hidden
                        ref={inputRef}
                        onChange={handleChange}
                        aria-describedby="file_input_help"
                    />
                    <Label className="font-semibold">Imagen</Label>
                    <div className="flex items-center flex-col justify-center border rounded-md p-2 gap-2">
                        {imageUrls.length < 3 ? (
                            <button
                                className=" w-full border flex flex-col items-center justify-center gap-1 py-4 "
                                onClick={() => {
                                    inputRef.current.click()
                                }}
                            >
                                <FileImageIcon />
                                Seleccionar Imagenes
                            </button>
                        ) : null}

                        <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(200px,1fr))] gap-4">
                            {imageUrls.map((url) => (
                                <Image
                                    key={url}
                                    src={url}
                                    width={200}
                                    height={200}
                                    alt={`image-${url}`}
                                    className="w-48 h-auto aspect-square object-cover"
                                />
                            ))}
                            {imageUrlUploaded.map((url) => (
                                <Image
                                    key={url}
                                    src={url}
                                    width={200}
                                    height={200}
                                    alt={`image-${url}`}
                                    className="w-48 h-auto aspect-square object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    <p
                        className={cn("text-sm", {
                            "text-red-500": state?.errors?.image_url,
                            "text-slate-500": !state?.errors?.image_url,
                        })}
                    >
                        {state?.errors?.image_url
                            ? state.errors?.image_url
                            : "Suba la imagen antes de añadir el producto. SVG, PNG, JPG (MAX. 800x400px)"}
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

            <Button className="mt-8" type="submit">
                Añadir Producto
            </Button>
        </form>
    )
}
