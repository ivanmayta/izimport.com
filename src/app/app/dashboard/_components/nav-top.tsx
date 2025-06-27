import { SidebarMenuButton } from "@/components/ui/sidebar"
import { Badge } from "@radix-ui/themes"

export default function NavTop() {
    return (
        <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
                <img
                    src="/images/logo.png"
                    className="size-8"
                    alt="logo de izimport.com"
                />
            </div>
            <div className="grid flex-1 text-left text-lg leading-tight">
                <span className="truncate font-bold">izimport.com</span>
                <span className="truncate font-semibold text-xs">
                    <Badge color="orange" size="1">
                        Beta
                    </Badge>
                </span>
            </div>
        </SidebarMenuButton>
    )
}
