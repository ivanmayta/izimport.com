"use client"
import { createProfile, updateProfile } from "@/lib/actions"
import { cn } from "@/lib/utils"
import {
    Button,
    Card,
    Grid,
    Spinner,
    Text,
    TextArea,
    TextField,
} from "@radix-ui/themes"
import { ArrowRight, Copy, Link } from "lucide-react"
import { Check } from "lucide-react"
import { useActionState, useEffect, useState } from "react"
import { toast } from "sonner"
import { Profile } from "@/types/profile"
import { FacebookColor } from "@/icons/facebook-color"
import { InstagramColor } from "@/icons/instagram-color"
import { TikTokColor } from "@/icons/tiktok-color"
export default function FormProfile({ profile }: { profile: Profile }) {
    const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN
    const { name, description, username, RUC, whatsapp, address, social_urls } =
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
    //console.log("render FORM PROFILE")
    const handleCopy = () => {
        console.log(baseDomain)
        const fullUrl = `${baseDomain}/${username || ""}`
        navigator.clipboard.writeText(fullUrl)
        setHasCopied(true)
        setTimeout(() => setHasCopied(false), 2000)
    }

    return (
        <>
            <Card variant="ghost">
                <form className="flex flex-col gap-6" action={formAction}>
                    <fieldset className="flex flex-col gap-4 flex-1">
                        <Grid
                            columns={{ initial: "1", md: "2" }}
                            gap="4"
                            width="auto"
                        >
                            <Text as="label" className="font-medium">
                                Nombre
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
                                Enlace
                                <div className="flex gap-2">
                                    <TextField.Root
                                        name="username"
                                        placeholder="izimport"
                                        defaultValue={username}
                                        className="flex-1"
                                    >
                                        <TextField.Slot
                                            pr="1"
                                            className="font-bold text-black bg-zinc-200 dark:bg-zinc-700"
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
                                        {username && (
                                            <TextField.Slot
                                                side="right"
                                                className="bg-black text-white rounded-r-sm dark:bg-zinc-700 !cursor-pointer !px-3 !py-2 hover:bg-zinc-800 dark:hover:bg-zinc-600 transition-colors"
                                                onClick={() =>
                                                    window.open(
                                                        `${baseDomain}/${username}`,
                                                        "_blank",
                                                        "noopener,noreferrer"
                                                    )
                                                }
                                            >
                                                <ArrowRight
                                                    className="text-white"
                                                    size={16}
                                                />
                                            </TextField.Slot>
                                        )}
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
                        </Grid>
                        <Text as="label" className="font-medium">
                            Descripción del Negocio
                            <TextArea
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
                        <Grid
                            columns={{ initial: "1", md: "2" }}
                            gap="4"
                            width="auto"
                        >
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
                        </Grid>
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

                        <div className="flex flex-col my-3 gap-2">
                            <div className="flex items-center justify-center gap-2">
                                <span className="border-b-2 border-zinc-300 w-full"></span>
                                <div className="flex items-center justify-center gap-2 w-full">
                                    <Link size={18} strokeWidth={3} />
                                    <Text as="div" size="3" weight="medium">
                                        Redes sociales
                                    </Text>
                                </div>
                                <span className="border-b-2 border-zinc-300 w-full"></span>
                            </div>
                            <Text
                                as="span"
                                size="2"
                                color="gray"
                                className="mb-3"
                            >
                                Nota: Solo necesitas agregar tu Nombre de
                                usuario.
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
                        <Grid
                            columns={{ initial: "1", md: "2" }}
                            gap="5"
                            width="auto"
                        >
                            <TextField.Root
                                radius="large"
                                size="2"
                                name="facebook"
                                placeholder="izimport"
                                defaultValue={social_urls?.facebook}
                            >
                                <TextField.Slot>
                                    <FacebookColor className="h-4 w-4" />
                                    https://www.facebook.com/
                                </TextField.Slot>
                            </TextField.Root>

                            <TextField.Root
                                radius="large"
                                name="instagram"
                                placeholder="izimport"
                                defaultValue={social_urls?.instagram}
                            >
                                <TextField.Slot>
                                    <InstagramColor className="h-4 w-4" />
                                    https://www.instagram.com/
                                </TextField.Slot>
                            </TextField.Root>
                            <TextField.Root
                                radius="large"
                                name="tiktok"
                                placeholder="@izimport"
                                defaultValue={social_urls?.tiktok}
                            >
                                <TextField.Slot>
                                    <TikTokColor className="h-4 w-4" />
                                    https://www.tiktok.com/
                                </TextField.Slot>
                            </TextField.Root>
                        </Grid>
                    </fieldset>
                    <Button
                        className="!mt-auto !self-end"
                        variant="solid"
                        color="orange"
                        size="2"
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
