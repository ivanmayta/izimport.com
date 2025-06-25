import { verifyAuthUser } from "@/lib/dal"
import { redirect } from "next/navigation"

export default async function Page() {
    const userId = await verifyAuthUser()
    if (!userId) {
        redirect("/sign-in")
    }
    return redirect("/dashboard")
}
