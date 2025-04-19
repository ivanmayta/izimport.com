import { Button } from "@/components/ui/button"
import { logout } from "@/lib/actions/auth"
import { LogOut } from "lucide-react"

export default function LogOutButton() {
    return (
        <form className="flex gap-4 items-center">
            <Button
                variant="ghost"
                className="flex justify-start mt-4 rounded w-full"
                formAction={logout}
            >
                <LogOut className="h-4 w-4" />
                Salir
            </Button>
        </form>
    )
}
