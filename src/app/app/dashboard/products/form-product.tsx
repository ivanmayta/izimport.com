"use client"
import { addProduct } from "@/lib/actions"

import { ProductState } from "@/types/states"
import { Flex, Text, TextField, Button, Card } from "@radix-ui/themes"
import { Dialog } from "@radix-ui/themes"
import { Plus, FileImage } from "lucide-react"
import { useActionState, useEffect, useState } from "react"
import { toast } from "sonner"

export default function FormProduct() {
    const [image, setImage] = useState<File | undefined>(undefined)
    const [open, setOpen] = useState(false)
    const initialState: ProductState = {
        success: false,
        message: "",
        errors: null,
    }
    const [state, formAction, isPending] = useActionState(
        addProduct,
        initialState
    )
    const {
        name: nameError,
        description: descriptionError,
        price: priceError,
    } = state?.errors || {}

    useEffect(() => {
        setImage(undefined)
        if (state.success) {
            toast.success(state.message)
            setOpen(false)
        }
        if (state.errors) {
            toast.error(state.message)
        }
    }, [state])
    const handleSubmit = (formData: FormData) => {
        const data = Object.fromEntries(formData)
        const file = data.file as File
        if (!file) {
            toast.error("La imagen es requerida")
            return
        }
        if (file.size > 1024 * 1024) {
            toast.error("El archivo es demasiado grande, 1mb máximo")
            setImage(undefined)
            return
        }
        formAction(formData)
    }
    return (
        <div>
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger>
                    <Button size="3" color="orange">
                        <Plus />
                        Añadir producto
                    </Button>
                </Dialog.Trigger>

                <Dialog.Content maxWidth="600px">
                    <Dialog.Title>Añadir producto</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Añade un producto a tu inventario.
                    </Dialog.Description>

                    <form action={handleSubmit} className="flex flex-col gap-6">
                        <Card>
                            <Flex direction="column" gap="4">
                                {/* Imagen Upload Section */}
                                <div>
                                    <Text as="label" size="2" weight="bold">
                                        Imagen
                                    </Text>
                                    <div className="relative w-full h-32">
                                        <label
                                            htmlFor="image-uploader"
                                            className="absolute border-2 border-dashed border-gray-300 hover:border-orange-500 hover:bg-orange-50 cursor-pointer inset-0 transition-all flex flex-col justify-center gap-2 rounded-md bg-gray-50 active:scale-[0.98]"
                                        >
                                            {image ? (
                                                <img
                                                    src={
                                                        image
                                                            ? URL.createObjectURL(
                                                                  image
                                                              )
                                                            : ""
                                                    }
                                                    alt="Imagen del producto"
                                                    className="w-30 h-30 p-1 object-cover rounded-md aspect-square"
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center justify-center gap-2">
                                                    <FileImage className="w-6 h-6 text-gray-400" />
                                                    <Text size="2" color="gray">
                                                        Haz clic para subir una
                                                        imagen
                                                    </Text>
                                                    <Text size="1" color="gray">
                                                        PNG, JPG hasta 5MB
                                                    </Text>
                                                </div>
                                            )}

                                            <input
                                                onChange={(e) => {
                                                    setImage(
                                                        e.target.files?.[0] ??
                                                            undefined
                                                    )
                                                }}
                                                id="image-uploader"
                                                className="hidden"
                                                type="file"
                                                name="file"
                                                accept="image/jpeg,image/png,image/gif,image/webp"
                                            />
                                        </label>
                                    </div>
                                    <Text as="p" size="1" color="gray" mt="1">
                                        SVG, PNG, JPG (MAX. 800x400px). Máximo 1
                                        imágenes.
                                    </Text>
                                </div>

                                {/* Product Name */}
                                <div>
                                    <Text as="label" size="2" weight="bold">
                                        Título
                                    </Text>
                                    <TextField.Root
                                        name="name"
                                        placeholder="Nombre del producto"
                                        mt="1"
                                    />
                                    <Text
                                        as="p"
                                        size="1"
                                        color={nameError ? "red" : "gray"}
                                        mt="1"
                                    >
                                        {nameError
                                            ? nameError
                                            : "Nombre del tu producto (maximo 100 caracteres)"}
                                    </Text>
                                </div>

                                {/* Description */}
                                <div>
                                    <Text as="label" size="2" weight="bold">
                                        Descripción
                                    </Text>
                                    <TextField.Root
                                        name="description"
                                        placeholder="Descripción del producto"
                                        mt="1"
                                    />
                                    <Text
                                        as="p"
                                        size="1"
                                        color={
                                            descriptionError ? "red" : "gray"
                                        }
                                        mt="1"
                                    >
                                        {descriptionError
                                            ? descriptionError
                                            : "Descripción breve del producto (maximo 230 caracteres)"}
                                    </Text>
                                </div>

                                {/* Price */}
                                <div>
                                    <Text as="label" size="2" weight="bold">
                                        Precio
                                    </Text>
                                    <TextField.Root
                                        name="price"
                                        placeholder="0.00"
                                        type="number"
                                        mt="1"
                                    >
                                        <TextField.Slot>S/</TextField.Slot>
                                    </TextField.Root>
                                    <Text
                                        as="p"
                                        size="1"
                                        color={priceError ? "red" : "gray"}
                                        mt="1"
                                    >
                                        {priceError
                                            ? priceError
                                            : "El precio debe ser mayor a 0"}
                                    </Text>
                                </div>
                            </Flex>
                        </Card>

                        <Flex gap="3" justify="end">
                            <Dialog.Close>
                                <Button variant="soft" color="gray">
                                    Cancelar
                                </Button>
                            </Dialog.Close>
                            <Button disabled={isPending} color="orange">
                                {isPending ? "Añadiendo..." : "Añadir Producto"}
                            </Button>
                        </Flex>
                    </form>
                </Dialog.Content>
            </Dialog.Root>
        </div>
    )
}
