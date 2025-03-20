import ProfileForm from "./profile-form"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { ArrowUpRightFromSquareIcon } from "lucide-react"
import { getFrontEndUrl } from "@/lib/utils"
import ProfileImageUploader from "@/components/dashboard/profile-image-uploader"
import { Label } from "@/components/ui/label"

const BASE_URL = getFrontEndUrl()
export default async function SettingsProfilePage() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    const user_id = data.user.id
    const { data: profile, error: profileError } = await supabase
        .from("profile")
        .select("*")
        .eq("user_id", user_id)
        .single()
    const username = profile?.username ? profile.username : ""
    return (
        <div>
            <header className="flex flex-col sm:flex-row  justify-between items-start sm:items-center mb-6">
                <div>
                    <h3 className="text-2xl font-bold">
                        Informacion del Negocio
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Se verá publicamente en tu sitio.
                    </p>
                </div>
                <Link
                    href={`${BASE_URL}/b2b/${username}`}
                    target="_blank"
                    hidden={!username}
                >
                    <button className=" bg-orange-600/25 text-orange-600 flex py-1 mt-2 px-2 justify-center items-center rounded-md  hover:scale-105 transition-transform">
                        Ver sitio
                        <ArrowUpRightFromSquareIcon className="ml-2 size-4" />
                    </button>
                </Link>
            </header>
            <hr className="mb-6 mt-4" />
            {/*
                <p className="text-sm text-muted-foreground">
                {JSON.stringify(profile, null, 2)}
                </p>
            */}

            {/* <p>{JSON.stringify(data, null, 2)}</p> */}
            <div className="px-0 pt-0 pb-6">
                <div className="text-base font-normal">
                    {profile
                        ? "Actualice la información de su negocio y cómo lo ven otros en la plataforma."
                        : "Configure su perfil de empresa para empezar."}
                </div>
            </div>
            {profile && (
                <ProfileImageUploader user={data.user} profile={profile} />
            )}
            <ProfileForm profile={profile} />
        </div>
    )
}
