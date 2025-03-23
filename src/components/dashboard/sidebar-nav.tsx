"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
    Building2,
    LayoutDashboardIcon,
    Package2Icon,
    UsersIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
const navItems = [
    { icon: LayoutDashboardIcon, label: "Dashboard", href: "/dashboard" },
    { icon: Building2, label: "Perfil", href: "/dashboard/profile" },
    { icon: UsersIcon, label: "Cuenta", href: "/dashboard/account" },
    { icon: Package2Icon, label: "Productos", href: "/dashboard/products" },
]

export function SidebarNav() {
    const pathname = usePathname()

    return (
        <nav className="flex justify-between flex-col lg:min-h-[80vh]">
            <div className="flex lg:flex-col lg:space-y-1 lg:space-x-0 lg:gap-1">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} passHref>
                        <Button
                            variant={
                                pathname === item.href ? "secondary" : "ghost"
                            }
                            className={cn(
                                "justify-start rounded-none lg:rounded-md gap-2 w-full border-b border-zinc-500 lg:border-transparent",
                                {
                                    "border-b  border-orange-500":
                                        pathname === item.href,
                                }
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </Button>
                    </Link>
                ))}
            </div>
        </nav>
    )
}
