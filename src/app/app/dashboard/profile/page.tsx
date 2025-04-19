import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import {
    ArrowUpRightFromSquareIcon,
    CreditCard,
    ShoppingBag,
    UserCircle,
} from "lucide-react"
import { getFrontEndUrl } from "@/lib/utils"
import ProfileImageUploader from "@/components/app/profile-image-uploader"
import { Label } from "@/components/ui/label"
import { DashboardHeader } from "@/components/app/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ProfileForm from "./profile-form"

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
                <DashboardHeader
                    heading="Perfil"
                    text="Gestiona la información de tu negocio."
                />
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

            <Tabs defaultValue="general" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="general">
                        Información General
                    </TabsTrigger>
                    <TabsTrigger value="personalization" disabled={!profile}>
                        Personalización
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Información del Negocio</CardTitle>
                            <CardDescription>
                                Completa la información básica de tu negocio
                                para crear tu perfil
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {<ProfileForm profile={profile} />}
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="personalization" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Imagen de Perfil</CardTitle>
                            <CardDescription>
                                Sube una imagen para tu perfil de negocio
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {
                                <ProfileImageUploader
                                    user={data.user}
                                    profile={profile}
                                />
                            }
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
            {/* <p>{JSON.stringify(data, null, 2)}</p> */}
        </div>
    )
}
