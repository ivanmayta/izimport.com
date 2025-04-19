import { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { SidebarNav } from "@/components/app/(dashboard)/sidebar-nav"
import { Montserrat } from "next/font/google"
export const metadata: Metadata = {
    title: "izimport - Panel de administración",
    description: "Administra tu cuenta en izimport.com",
}
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["700"],
    style: ["normal"],
})
interface SettingsLayoutProps {
    children: React.ReactNode
}

export default async function SettingsLayout({
    children,
}: SettingsLayoutProps) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect("/login")
    }
    return (
        <>
            <aside className="transform -translate-x-full fixed z-10 flex h-full flex-col  border-r p-4 pr-2 transition-all sm:w-60 sm:translate-x-0 bg-background ">
                <div className="flex  items-center gap-2">
                    <img
                        className=" size-10"
                        src="/logo.webp"
                        alt="Logo de Izimport"
                    />

                    <span className={`${montserrat.className} text-2xl`}>
                        izimport
                    </span>
                </div>
                <div className="flex flex-col justify-between h-full ">
                    <SidebarNav />
                    <div className="space-y-0.5 ">
                        <h2 className=" font-bold tracking-tight">
                            Dashboard
                            <span className="ms-1 text-xs font-medium px-2.5 py-0.5 rounded-sm bg-orange-500 text-yellow-100">
                                Beta
                            </span>
                        </h2>
                        <p className=" text-sm text-muted-foreground">
                            Desarrollado por iverse.dev
                        </p>
                    </div>
                </div>
            </aside>
            <div className="min-h-screen dark:bg-black sm:pl-60">
                <div className="h-14 border-b flex items-center justify-between sticky top-0 bg-white dark:bg-black z-10 px-4 md:px-6"></div>
                <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
                    {children}
                </div>
            </div>
        </>
    )
}
