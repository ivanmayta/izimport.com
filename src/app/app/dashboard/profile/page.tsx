import { createClient } from "@/lib/supabase/server"
import ProfileImageUploader from "@/components/app/profile-image-uploader"
import { DashboardHeader } from "@/components/app/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ProfileForm from "./profile-form"
import { getProfile, getUser } from "@/lib/fetchers"

export default async function SettingsProfilePage() {
    const supabase = await createClient()
    const { user } = await getUser(supabase)
    const profile = await getProfile(supabase, user.id)
    return (
        <div>
            <header className="flex flex-col sm:flex-row  justify-between items-start sm:items-center mb-6">
                <DashboardHeader
                    heading="Perfil"
                    text="Gestiona la información de tu negocio."
                />
            </header>
            <hr className="mb-6 mt-4" />

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
                                    user={user}
                                    profile={profile}
                                />
                            }
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
