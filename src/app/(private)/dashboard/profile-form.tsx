"use client"

import { useActionState } from "react"
import {
    updateProfile,
    State,
    updateProfileWithoudValidation,
    createProfile,
} from "@/actions/supabase"
import { useToast } from "@/hooks/use-toast"

import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { SpinnerButton } from "@/components/custom/button-spinner"

export default function ProfileForm({ profile }) {
    const { username, whatsapp, address, social_urls, RUC } = profile || {}

    const { toast } = useToast()

    const initialState: State = { message: null, errors: {} }
    const submitFunction = profile ? updateProfileWithoudValidation : createProfile
    const [state, formAction, pending] = useActionState(
        submitFunction,
        initialState
    )
    console.log(state)

    // if (state?.message) {
    //     toast({
    //         title: "Profile update",
    //         description: state.message,
    //     })
    // }
    // if (state.errors) {
    //     toast({
    //         title: "Ocurrio un error",
    //         description: state.errors,
    //     })
    // }

    return (
        <form action={formAction} className="space-y-6">
            <div className="flex gap-2 flex-col">
                <Label>Username</Label>
                <div className="relative w-full">
                    <div className="text-sm text-white/60 absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                        izimport.com/b2b/
                    </div>
                    <Input
                        className="block p-2.5 w-full z-20 ps-36"
                        name="username"
                        placeholder="Nombre de usuario"
                        defaultValue={username}
                    />
                </div>

                <p aria-live="polite" className="text-red-500 text-sm">
                    {state?.errors?.username}
                </p>
            </div>
            <div>
                <Label>RUC</Label>
                <Input name="RUC" defaultValue={RUC}></Input>
            </div>
            <div className="flex gap-2 flex-col">
                <Label>Whatsapp</Label>
                <Input name="whatsapp" defaultValue={whatsapp}></Input>
                Public Whatsapp Number.
            </div>
            <div className="flex gap-2 flex-col">
                <Label>Address</Label>
                <Textarea
                    name="address"
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    defaultValue={address}
                />
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-semibold">Redes sociales</span>
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
