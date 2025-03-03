import { createClient } from "@/utils/supabase/server"
export default async function SettingsAccountPage() {
    const supabase = await createClient()
    const user = await supabase.auth.getUser()
    console.dir(user, { depth: null })
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-2xl font-bold">Información de la Cuenta</h3>
                <p className="text-sm text-muted-foreground">
                    Información de inicio de sesión
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <div>
                    <h3 className="font-semibold">Nombre</h3>
                    <p className="text-sm text-muted-foreground">
                        {user.data.user.user_metadata.name}
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold"> email</h3>
                    <p className="text-sm text-muted-foreground">
                        {user.data.user.email}
                    </p>
                </div>
            </div>
        </div>
    )
}
