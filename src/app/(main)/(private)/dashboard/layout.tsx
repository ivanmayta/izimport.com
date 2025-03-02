import { Metadata } from "next"
import Image from "next/image"

import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { ExchangeBadge } from "@/components/exchange/exchange-badge"
import { ModeToggle } from "@/components/ui/mode-togglee"
import { Button } from "@/components/ui/button"
import { logout, signInWithGoole } from "@/actions/auth"

export const metadata: Metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
}

interface SettingsLayoutProps {
    children: React.ReactNode
}

export default async function SettingsLayout({
    children,
}: SettingsLayoutProps) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect("/")
    }
    return (
        <>
            <div className="space-y-6 pb-16 md:block max-w-[1320px] mx-auto">
                <header className="flex items-center py-4 justify-between ">
                    <Link
                        className="text-3xl font-extrabold tracking-tight lg:text-2xl"
                        href="/"
                    >
                        izimport<span className="text-orange-600">.com</span>
                    </Link>
                    <div className="flex gap-4 items-center">
                        <form className="flex gap-4 items-center flex-col sm:flex-row">
                            {data.user == null ? (
                                <Button
                                    variant="outline"
                                    formAction={signInWithGoole}
                                >
                                    Iniciar sesión con google
                                </Button>
                            ) : (
                                <Button variant="link" formAction={logout}>
                                    Cerrar sesión
                                </Button>
                            )}
                        </form>
                        <ExchangeBadge />
                        <ModeToggle />
                    </div>
                </header>
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className=" lg:w-1/5 sticky top-0 h-full">
                        <div className="space-y-0.5 ">
                            <h2 className="text-2xl font-bold tracking-tight">
                                Dashboard
                            </h2>
                            <p className="text-muted-foreground">
                                Administra la informacion de tu cuenta
                            </p>
                        </div>
                        <hr className="my-2" />
                        <SidebarNav />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl">{children}</div>
                </div>
            </div>
        </>
    )
}
