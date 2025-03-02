"use client"

import { useActionState, useEffect, useRef } from "react"
import { updateProfile, State, createProfile } from "@/actions/supabase"

import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { SpinnerButton } from "@/components/custom/button-spinner"
import { cn } from "@/lib/utils"
import toast from "react-hot-toast"

export default function ProfileForm({ profile }) {
    const { username, whatsapp, address, social_urls, RUC, name, description } =
        profile || {}

    const initialState: State = { message: null, errors: {} }
    const submitFunction = profile ? updateProfile : createProfile

    const [state, formAction, pending] = useActionState(
        submitFunction,
        initialState
    )

    console.log("estado", state)
    useEffect(() => {
        if (state?.message) {
          toast.custom(`${state.message}`)
        }
      }, [state])

    return (
        <form action={formAction} className="space-y-6">
            <ul className="flex flex-col  gap-2">
                {/*Nombre de la empresa*/}
                <li className="flex flex-col gap-2">
                    <Label className="font-semibold">Nombre del Negocio</Label>
                    <Input name="name" defaultValue={name}></Input>
                    <p
                        className={cn("text-sm", {
                            "text-red-500": state?.errors?.name,
                            "text-slate-500": !state?.errors?.name,
                        })}
                    >
                        {state?.errors?.name
                            ? state.errors.name
                            : "Se mostrará en tu perfil como Titulo (maximo 60 caracteres)"}
                    </p>
                </li>
                {/*Description*/}
                <li>
                    <Label className="font-semibold">Descripción</Label>
                    <Textarea
                        name="description"
                        placeholder="Rubro, productos, servicios, etc."
                        className="resize-none"
                        defaultValue={description}
                    />
                    <p
                        className={cn("text-sm", {
                            "text-red-500": state?.errors?.description,
                            "text-slate-500": !state?.errors?.description,
                        })}
                    >
                        {state?.errors?.description
                            ? state.errors.description
                            : "Cuenta un poco sobre tu Negocio (maximo 160 caracteres)"}
                    </p>
                </li>

                {/*Nombre de usuario*/}
                <li className="flex flex-col gap-2">
                    <Label className="font-semibold">Nombre de usuario</Label>
                    <div className="relative w-full">
                        <div className="text-sm font-medium dark:text-white/60 absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                            https://izimport.com/b2b/
                        </div>
                        <Input
                            className="block w-full z-20 ps-48 "
                            name="username"
                            placeholder="Nombre de usuario"
                            defaultValue={username}
                        />
                    </div>

                    <p
                        aria-live="polite"
                        className={cn("text-sm", {
                            "text-red-500": state?.errors?.username,
                            "text-slate-500": !state?.errors?.username,
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
                </li>
                {/*RUC*/}
                <li>
                    <Label className="font-semibold">RUC</Label>
                    <Input name="RUC" defaultValue={RUC}></Input>
                    <p
                        className={cn("text-sm", {
                            "text-red-500": state?.errors?.RUC,
                            "text-slate-500": !state?.errors?.RUC,
                        })}
                    >
                        {state?.errors?.RUC ? state.errors.RUC : "(Opcional"}
                    </p>
                </li>
                {/*Whatsapp*/}
                <li>
                    <Label className="font-semibold">Whatsapp</Label>
                    <Input name="whatsapp" defaultValue={whatsapp}></Input>
                    <p
                        className={cn("text-sm", {
                            "text-red-500": state?.errors?.whatsapp,
                            "text-slate-500": !state?.errors?.whatsapp,
                        })}
                    >
                        {state?.errors?.whatsapp
                            ? state.errors.whatsapp
                            : "Número de whatsapp de tu negocio"}
                    </p>
                </li>
                {/*Direccion*/}
                <li>
                    <Label className="font-semibold">Dirección</Label>
                    <Textarea
                        name="address"
                        placeholder="Cuentanos un poco sobre ti"
                        className="resize-none"
                        defaultValue={address}
                    />
                    {
                        <p
                            className={cn("text-sm", {
                                "text-red-500": state?.errors?.address,
                                "text-slate-500": !state?.errors?.address,
                            })}
                        >
                            {state?.errors?.address
                                ? state.errors.address
                                : "Dirección de tu negocio (maximo 160 caracteres)"}
                        </p>
                    }
                </li>
                <li>
                    <div className="flex flex-col gap-2">
                        <div>
                            <h3 className="font-semibold">Redes sociales</h3>
                            <p className="text-sm text-muted-foreground pb-4">
                                Ingrese la URL completa:
                                https://facebook.com/username. (Opcional)
                            </p>
                        </div>
                        <Label>Facebook</Label>
                        <Input
                            name="social_urls[facebook]"
                            defaultValue={social_urls?.facebook || ""}
                        ></Input>
                        <Label>Instagram</Label>
                        <Input
                            name="social_urls[instagram]"
                            defaultValue={social_urls?.instagram || ""}
                        ></Input>
                        <Label>TikTok</Label>
                        <Input
                            name="social_urls[tiktok]"
                            defaultValue={social_urls?.tiktok || ""}
                        ></Input>
                    </div>
                </li>
            </ul>

            <div className="flex gap-2 flex-col"></div>
            {profile ? (
                <Button type="submit">
                    {pending ? <SpinnerButton /> : ""}
                    Update Profile
                </Button>
            ) : (
                <Button type="submit">Create Profile</Button>
            )}
        </form>
    )
}
