"use client"

import * as React from "react"
import {
    AudioWaveform,
    Building,
    Command,
    Frame,
    GalleryVerticalEnd,
    LayoutDashboard,
    Map,
    PieChart,
    User,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"

import { NavMain } from "./nav-main"
import NavTop from "./nav-top"

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Inicio",
            url: "#",
            icon: LayoutDashboard,
            isActive: true,
            items: [
                {
                    title: "dashboard",
                    url: "/dashboard",
                },
            ],
        },
        {
            title: "Negocio",
            url: "#",
            icon: Building,
            isActive: true,
            items: [
                {
                    title: "Perfil",
                    url: "/dashboard/profile",
                },
                {
                    title: "Productos",
                    url: "/dashboard/products",
                },
            ],
        },
        {
            title: "Cuenta",
            url: "/app/dashboard/account",
            icon: User,
            items: [
                {
                    title: "Información",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <NavTop />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/*
                    <NavProjects projects={data.projects} />
                */}
            </SidebarContent>
            <SidebarFooter>
                {/*<NavUser user={data.user} />
                 */}
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
