"use client"
import { LogosGoogleIcon } from "@/icons/google"
import { Button } from "../ui/button"
import { logout, signInWithGoole } from "@/actions/auth"
import { LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
//TODO:
// [ ] Make mobile version
export function MenuHeader({ user }) {
    const pathName = usePathname()
    //console.log(pathName)
    //console.log(user)
    return (
        <>
            {user == null ? (
                <Button variant="outline" formAction={signInWithGoole}>
                    <LogosGoogleIcon className="h-5 w-5 mr-2" />
                    Iniciar sesión
                </Button>
            ) : (
                <>
                    <Button variant="link" formAction={logout}>
                        <LogOut className="size-6" />
                        Cerrar sesión
                    </Button>
                    {pathName !== "/dashboard" && (
                        <Link
                            className="text-zinc-700 hover:bg-yellow-300 font-semibold px-3 py-1 rounded-md bg-[#FCD535]"
                            href="/dashboard"
                        >
                            Dashboard
                        </Link>
                    )}
                </>
            )}
        </>
    )
}
