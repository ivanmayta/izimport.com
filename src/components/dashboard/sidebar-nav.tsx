"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { LayoutDashboardIcon, Package2Icon, UsersIcon } from "lucide-react"
const navItems = [
    { icon: LayoutDashboardIcon, label: "Perfil", href: "/dashboard" },
    { icon: UsersIcon, label: "Cuenta", href: "/dashboard/account" },
    { icon: Package2Icon, label: "Productos", href: "/dashboard/products" },
]

export function SidebarNav() {
    const pathname = usePathname()

    return (
        <nav className="grid items-start text-base font-bold space-y-3">
            {navItems.map((item) => (
                <Link key={item.href} href={item.href} passHref>
                    <Button
                        variant={pathname === item.href ? "secondary" : "ghost"}
                        className="justify-start gap-2 w-full"
                    >
                        <item.icon className="h-4 w-4" />
                        {item.label}
                    </Button>
                </Link>
            ))}
        </nav>
    )
}
