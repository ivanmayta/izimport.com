"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
    Building2,
    LayoutDashboardIcon,
    Package2Icon,
    UsersIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import LogOutButton from "../(login)/logout-button"

const navItems = [
    {
        icon: LayoutDashboardIcon,
        label: "Dashboard",
        href: "/dashboard",
        category: "Inicio",
    },
    {
        icon: Building2,
        label: "Perfil",
        href: "/dashboard/profile",
        category: "Negocio",
    },
    {
        icon: Package2Icon,
        label: "Productos",
        href: "/dashboard/products",
        category: "Negocio",
    },
    {
        icon: UsersIcon,
        label: "Cuenta",
        href: "/dashboard/account",
        category: "Cuenta",
    },
]

export function SidebarNav() {
    const pathname = usePathname()

    // Group navigation items by category
    const groupedNavItems = navItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = []
        }
        acc[item.category].push(item)
        return acc
    }, {} as Record<string, typeof navItems>)

    // Get categories in the original order they appear
    const categories = Array.from(
        new Set(navItems.map((item) => item.category))
    )

    return (
        <nav className="flex flex-col mt-12">
            <div className="flex flex-col lg:space-y-1 lg:space-x-0 lg:gap-1">
                {categories.map((category) => (
                    <div key={category} className="mb-4">
                        <h3 className="px-3 mb-2 text-xs font-bold  uppercase">
                            {category}
                        </h3>
                        <div className="flex flex-col space-y-1">
                            {groupedNavItems[category].map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    passHref
                                    className="text-zinc-600 font-extralight"
                                >
                                    <Button
                                        variant={
                                            pathname === item.href
                                                ? "secondary"
                                                : "ghost"
                                        }
                                        className={cn(
                                            "justify-start rounded-none lg:rounded-md gap-2 w-full"
                                        )}
                                    >
                                        <item.icon className="h-4 w-4" />
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}

                <LogOutButton />
            </div>
        </nav>
    )
}
