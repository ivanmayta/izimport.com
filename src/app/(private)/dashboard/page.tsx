import ProfileForm from "./profile-form"
import { createClient } from "@/utils/supabase/server"

export default async function SettingsProfilePage() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    const user_id = data.user.id
    const { data: profile, error: profileError } = await supabase
        .from("profile")
        .select("*")
        .eq("user_id", user_id)
        .single()
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    {JSON.stringify(profile, null, 2)}
                </p>
                {/* <p>{JSON.stringify(data, null, 2)}</p> */}
            </div>

            <ProfileForm profile={profile} />
        </div>
    )
}
