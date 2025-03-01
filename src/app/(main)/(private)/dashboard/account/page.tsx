import { createClient } from "@/utils/supabase/server"
export default async function SettingsAccountPage() {
    const supabase = await createClient()
    const user = await supabase.auth.getUser()
    console.log(user)
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Account</h3>
                <p className="text-sm text-muted-foreground">
                    Información de inicio de sesión
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <h3>Nombre</h3>
                    <p className="text-sm text-muted-foreground">
                        {user.data.user.user_metadata.name}
                    </p>
                </div>
                <div>
                    <h3> email</h3>
                    <p className="text-sm text-muted-foreground">
                        {user.data.user.email}
                    </p>
                </div>
            </div>
        </div>
    )
}
