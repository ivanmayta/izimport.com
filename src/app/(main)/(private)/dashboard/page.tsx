import ProfileForm from "./profile-form"
import { createClient } from "@/utils/supabase/server"
import Link from "next/link"
import { ArrowUpRightFromSquareIcon } from "lucide-react"

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
            <header className="flex items-center justify-between pb-8">
                <h3 className="text-2xl font-bold">Informacion del Negocio</h3>
                <Link
                    href={`http://localhost:3000/b2b/${username}`}
                    target="_blank"
                    hidden={!username}
                >
                    <button className=" bg-orange-600/30 text-orange-600 flex py-1 px-2 justify-center items-center rounded-md  hover:scale-105 transition-transform">
                        Ver sitio
                        <ArrowUpRightFromSquareIcon className="h-4 w-4" />
                    </button>
                </Link>
            </header>

            <p className="text-sm text-muted-foreground">
                {JSON.stringify(profile, null, 2)}
            </p>

            {/* <p>{JSON.stringify(data, null, 2)}</p> */}
            <ProfileForm profile={profile} />
        </div>
    )
}
