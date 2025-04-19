import { Button } from "@/components/ui/button"
import { LogosGoogleIcon } from "@/icons/google"
import { signInWithGoogle } from "@/lib/actions/auth"

export default function SignInButton() {
    return (
        <form className="flex gap-4 items-center">
            <Button className="w-full" variant="outline" formAction={signInWithGoogle}>
                <LogosGoogleIcon className="h-5 w-5 mr-2" />
                Iniciar sesión
            </Button>
        </form>
    )
}
