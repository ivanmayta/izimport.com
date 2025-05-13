"use client"
import { createProfile, updateProfile } from "@/lib/actions"
import { cn } from "@/lib/utils"
import { Button, Card, Spinner, Text, TextField } from "@radix-ui/themes"
import { Copy } from "lucide-react"
import { Check } from "lucide-react"
import { useActionState, useEffect, useState } from "react"
import { toast } from "sonner"
export type Profile = {
    name: string
    description: string
    username: string
    RUC: string
    whatsapp: string
    address: string
}
export default function FormProfile({ profile }: { profile: Profile }) {
    const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN
    const { name, description, username, RUC, whatsapp, address } =
        profile ?? {}
    const [hasCopied, setHasCopied] = useState(false)
    const initialState = { message: null, error: null, success: false }
    const action = profile ? updateProfile : createProfile
    const [state, formAction, isPending] = useActionState(action, initialState)
    useEffect(() => {
        if (state.success) {
            toast.success(state.message)
        }
        if (state.errors) {
            toast.error(state.message)
        }
    }, [state])
    const {
        name: nameError,
        description: descriptionError,
        username: usernameError,
        RUC: RUCError,
        whatsapp: whatsappError,
        address: addressError,
        social_urls: socialUrlsError,
    } = state?.errors || {}
    console.log("render FORM PROFILE")
    const handleCopy = () => {
        console.log(baseDomain)
        const fullUrl = `${baseDomain}/${username || ""}`
        navigator.clipboard.writeText(fullUrl)
        setHasCopied(true)
        setTimeout(() => setHasCopied(false), 2000)
    }

    return (
        <>
            <Card variant="ghost" className="h-full">
                <div className="flex flex-col my-6">
                    <Text as="div" size="4" weight="medium">
                        Información de tu Negocio
                    </Text>
                    <Text as="span" size="2" color="gray" className="mb-3">
                        Esta información será visible para los clientes.
                    </Text>
                </div>
                <form className="flex flex-col gap-6" action={formAction}>
                    <fieldset className="flex flex-col gap-4 flex-1">
                        <Text as="label" className="font-medium">
                            Nombre del Negocio
                            <TextField.Root
                                name="name"
                                placeholder="Nombre del Negocio"
                                defaultValue={name}
                            />
                            <Text
                                as="p"
                                size="1"
                                className={cn(
                                    "text-gray-500",
                                    nameError && "text-red-500"
                                )}
                                trim="end"
                            >
                                {nameError
                                    ? nameError
                                    : `Se mostrará en tu perfil como Titulo (maximo 60
                                caracteres)`}
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            Descripción del Negocio
                            <TextField.Root
                                name="description"
                                placeholder="Breve descripción del negocio"
                                defaultValue={description}
                            />
                            <Text
                                as="p"
                                size="1"
                                className={cn(
                                    "text-gray-500",
                                    descriptionError && "text-red-500"
                                )}
                                trim="end"
                            >
                                {descriptionError
                                    ? descriptionError
                                    : "Cuenta un poco sobre tu Negocio (maximo 160 caracteres)"}
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            Enlace de la tienda
                            <div className="flex gap-2">
                                <TextField.Root
                                    name="username"
                                    placeholder="izimport"
                                    defaultValue={username}
                                    className="flex-1"
                                >
                                    <TextField.Slot
                                        color="gray"
                                        pr="1"
                                        className="font-medium bg-slate-300"
                                    >
                                        izimport.com/
                                    </TextField.Slot>
                                    <TextField.Slot
                                        onClick={handleCopy}
                                        className="!px-2 !cursor-pointer"
                                    >
                                        {hasCopied ? (
                                            <Check className="h-4 w-4 text-green-500 border rounded-md" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </TextField.Slot>
                                </TextField.Root>
                            </div>
                            <Text
                                as="p"
                                size="1"
                                className={cn(
                                    "text-gray-500",
                                    usernameError && "text-red-500"
                                )}
                                trim="end"
                            >
                                {usernameError
                                    ? usernameError
                                    : "Ingrese el enlace de la tienda"}
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            RUC
                            <TextField.Root
                                name="RUC"
                                placeholder="Número de RUC"
                                defaultValue={RUC}
                            />
                            <Text
                                as="p"
                                size="1"
                                className={cn(
                                    "text-gray-500",
                                    RUCError && "text-red-500"
                                )}
                                trim="end"
                            >
                                {RUCError
                                    ? RUCError
                                    : "Ingrese el número de RUC"}
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            WhatsApp
                            <TextField.Root
                                name="whatsapp"
                                placeholder="Ingrese su número de WhatsApp"
                                defaultValue={whatsapp}
                            />
                            <Text
                                as="p"
                                size="1"
                                className={cn(
                                    "text-gray-500",
                                    whatsappError && "text-red-500"
                                )}
                                trim="end"
                            >
                                {whatsappError
                                    ? whatsappError
                                    : "Ingrese su número de WhatsApp"}
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            Dirección
                            <TextField.Root
                                name="address"
                                placeholder="Ingrese su dirección"
                                defaultValue={address}
                            />
                            <Text
                                as="p"
                                size="1"
                                className={cn(
                                    "text-gray-500",
                                    addressError && "text-red-500"
                                )}
                                trim="end"
                            >
                                {addressError
                                    ? addressError
                                    : "Ingrese su dirección"}
                            </Text>
                        </Text>

                        <div className="flex flex-col my-3">
                            <Text as="div" size="4" weight="medium">
                                Redes sociales
                            </Text>
                            <Text
                                as="span"
                                size="2"
                                color="gray"
                                className="mb-3"
                            >
                                Agrega tus redes sociales para que los clientes
                                puedan contactarte.
                            </Text>
                            <Text
                                as="p"
                                size="1"
                                className={cn("text-gray-500", {
                                    "text-red-500": socialUrlsError,
                                })}
                                trim="end"
                            >
                                {socialUrlsError
                                    ? JSON.stringify(socialUrlsError).slice(
                                          1,
                                          -1
                                      )
                                    : ""}
                            </Text>
                        </div>
                        <Text as="label" className="font-medium">
                            Facebook
                            <TextField.Root
                                name="facebook"
                                placeholder="https://www.facebook.com/izimport"
                            />
                            <Text as="p" size="1" color="gray" trim="end">
                                {" "}
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            Facebook
                            <TextField.Root
                                name="instagram"
                                placeholder="https://www.instagram.com/izimport"
                            />
                            <Text as="p" size="1" color="gray" trim="end">
                                {" "}
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            Facebook
                            <TextField.Root
                                name="tiktok"
                                placeholder="https://www.tiktok.com/@izimport"
                            />
                            <Text as="p" size="1" color="gray" trim="end">
                                {" "}
                            </Text>
                        </Text>
                    </fieldset>
                    <Button
                        className="!mt-auto !self-start"
                        variant="solid"
                        color="orange"
                        disabled={isPending}
                    >
                        <Spinner loading={isPending} />
                        {isPending
                            ? "Procesando..."
                            : profile
                            ? "Actualizar Perfil"
                            : "Crear Perfil"}
                    </Button>
                </form>
            </Card>
        </>
    )
}
