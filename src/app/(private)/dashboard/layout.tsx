import { Metadata } from "next"
import Image from "next/image"

import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/dashboard",
    },
    {
        title: "Account",
        href: "/dashboard/account",
    },
    {
        title: "Productos",
        href: "/dashboard/products",
    },
]

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
            <div className=" space-y-6 p-10 pb-16 md:block max-w-[1320px] mx-auto">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Settings
                    </h2>
                    <p className="text-muted-foreground">
                        Manage your account settings and set e-mail preferences.
                    </p>
                </div>
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl">{children}</div>
                </div>
            </div>
        </>
    )
}
