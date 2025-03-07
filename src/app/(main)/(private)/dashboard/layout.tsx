import { Metadata } from "next"

import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: "Dashboard-izimport.com| Administra tu cuenta",
    description: "Administra tu cuenta en izimport.com",
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
            <div className="space-y-6 md:px-0  pb-16 md:block pt-11 mx-auto">
                <div className=" container flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className=" lg:w-1/5 sticky top-16 h-full bg-background z-50">
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
                    <div className="flex-1 lg:max-w-3xl">{children}</div>
                </div>
            </div>
        </>
    )
}
