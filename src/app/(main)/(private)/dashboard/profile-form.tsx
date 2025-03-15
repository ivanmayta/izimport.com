"use client"

import { useActionState, useEffect } from "react"
import { updateProfile, createProfile } from "@/actions/supabase"
import { ProfileState } from "@/types/supabase"
import { toast } from "react-hot-toast"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { LoaderCircle } from "lucide-react"
import { json } from "stream/consumers"

export default function ProfileForm({ profile }) {
    const { username, whatsapp, address, social_urls, RUC, name, description } =
        profile || {}

    const initialState: ProfileState = { message: null, errors: {} }
    const submitFunction = profile ? updateProfile : createProfile

    const [state, formAction, pending] = useActionState(
        submitFunction,
        initialState
    )

    useEffect(() => {
        if (state?.message == "Perfil actualizado exitosamente!") {
            toast.success(`${state.message}`)
            return
        }
        if (state?.message) {
            toast.custom(`${state.message}`)
        }
    }, [state])
    console.log(state)
    return (
        <Card className="w-full border-0">
            
            <CardContent className="px-0">
                <form action={formAction} className="space-y-8">
                    {/* Business Name */}
                    <div className="space-y-2">
                        <Label className="font-semibold">
                            Nombre del Negocio
                        </Label>
                        <Input
                            className="text-foreground/70 focus:text-black focus:dark:text-white"
                            name="name"
                            defaultValue={name}
                        />
                        <p
                            className={cn("text-sm", {
                                "text-destructive": state?.errors?.name,
                                "text-muted-foreground": !state?.errors?.name,
                            })}
                        >
                            {state?.errors?.name
                                ? state.errors.name
                                : "Se mostrará en tu perfil como Titulo (maximo 60 caracteres)"}
                        </p>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <Label className="font-semibold">Descripción</Label>
                        <Textarea
                            name="description"
                            placeholder="Rubro, productos, servicios, etc."
                            className="resize-none text-foreground/70 focus:text-black focus:dark:text-white"
                            defaultValue={description}
                        />
                        <p
                            className={cn("text-sm", {
                                "text-destructive": state?.errors?.description,
                                "text-muted-foreground":
                                    !state?.errors?.description,
                            })}
                        >
                            {state?.errors?.description
                                ? state.errors.description
                                : "Cuenta un poco sobre tu Negocio (maximo 160 caracteres)"}
                        </p>
                    </div>

                    {/* Username */}
                    <div className="space-y-2">
                        <Label className="font-semibold">
                            Nombre de usuario
                        </Label>
                        <div className=" flex w-full">
                            <div className="px-2 text-sm bg-zinc-300/90 font-medium dark:text-black flex items-center pointer-events-none">
                                https://izimport.com/b2b/
                            </div>
                            <Input
                                className=" w-full rounded-none text-foreground/70 focus:text-black focus:dark:text-white"
                                name="username"
                                placeholder="Nombre de usuario"
                                defaultValue={username}
                            />
                        </div>
                        <p
                            className={cn("text-sm", {
                                "text-destructive": state?.errors?.username,
                                "text-muted-foreground":
                                    !state?.errors?.username,
                            })}
                        >
                            {state?.errors?.username
                                ? state.errors.username
                                : profile === null
                                ? `Tu enlace será: https://izimport.com/b2b/${
                                      username || ""
                                  }`
                                : ""}
                        </p>
                    </div>

                    {/* RUC */}
                    <div className="space-y-2">
                        <Label className="font-semibold">RUC</Label>
                        <Input
                            className="text-foreground/70 focus:text-black focus:dark:text-white"
                            name="RUC"
                            defaultValue={RUC}
                        />
                        <p
                            className={cn("text-sm", {
                                "text-destructive": state?.errors?.RUC,
                                "text-muted-foreground": !state?.errors?.RUC,
                            })}
                        >
                            {state?.errors?.RUC
                                ? state.errors.RUC
                                : "(Opcional)"}
                        </p>
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-2">
                        <Label className="font-semibold">Whatsapp</Label>
                        <Input
                            className="text-foreground/70 focus:text-black focus:dark:text-white"
                            name="whatsapp"
                            defaultValue={whatsapp}
                        />
                        <p
                            className={cn("text-sm", {
                                "text-destructive": state?.errors?.whatsapp,
                                "text-muted-foreground":
                                    !state?.errors?.whatsapp,
                            })}
                        >
                            {state?.errors?.whatsapp
                                ? state.errors.whatsapp
                                : "Número de whatsapp de tu negocio"}
                        </p>
                    </div>

                    {/* Address */}
                    <div className="space-y-2">
                        <Label className="font-semibold">Dirección</Label>
                        <Textarea
                            name="address"
                            placeholder="Dirección de tu negocio"
                            className="resize-none text-foreground/70 focus:text-black focus:dark:text-white"
                            defaultValue={address}
                        />
                        <p
                            className={cn("text-sm", {
                                "text-destructive": state?.errors?.address,
                                "text-muted-foreground":
                                    !state?.errors?.address,
                            })}
                        >
                            {state?.errors?.address
                                ? state.errors.address
                                : "Dirección de tu negocio (maximo 160 caracteres)"}
                        </p>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <div>
                            <Label className="font-semibold">
                                Redes sociales
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                                Ingrese la URL completa:
                                https://facebook.com/username. (Opcional)
                            </p>
                            <p
                                className={cn("text-sm", {
                                    "text-destructive":
                                        state?.errors?.social_urls,
                                    "text-muted-foreground":
                                        !state?.errors?.social_urls,
                                })}
                            >
                                {state?.errors?.social_urls
                                    ? JSON.stringify(state.errors.social_urls)
                                    : ""}
                            </p>
                        </div>

                        <div className="space-y-4 mt-4">
                            <div className="space-y-2">
                                <Label>Facebook</Label>
                                <Input
                                    className="text-foreground/70 focus:text-black focus:dark:text-white"
                                    name="facebook"
                                    defaultValue={social_urls?.facebook || ""}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Instagram</Label>
                                <Input
                                    className="text-foreground/70 focus:text-black focus:dark:text-white"
                                    name="instagram"
                                    defaultValue={social_urls?.instagram || ""}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>TikTok</Label>
                                <Input
                                    className="text-foreground/70 focus:text-black focus:dark:text-white"
                                    name="tiktok"
                                    defaultValue={social_urls?.tiktok || ""}
                                />
                            </div>
                        </div>
                    </div>

                    <Button type="submit" disabled={pending} className="w-full">
                        {pending ? (
                            <div className="flex items-center gap-2">
                                <LoaderCircle className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" />
                                Processing...
                            </div>
                        ) : profile ? (
                            "Update Profile"
                        ) : (
                            "Create Profile"
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
