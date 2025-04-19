import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
const components: { title: string; href: string; description: string }[] = [
    {
        title: "Proceso Simplificado",
        href: "/simplificado",
        description: "Para importaciones mayores a 200$ y menores a 2000$.",
    },
    {
        title: "Proceso exonerado",
        href: "/exonerado",
        description: "Para importaciones menores a 200$",
    },
]

const tools = [
    {
        title: "Rastrea",
        href: "https://track.izimport.com",
        description: "Rastrea tu paquete",
    },
]
export function NavDesktop() {
    return (
        <nav className="hidden md:flex items-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={`hover:border-b-2 hover:border-black py-2 px-3 font-medium text-zinc-950`}
                            >
                                Inicio
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={tools[0].href} legacyBehavior passHref>
                            <NavigationMenuLink
                                className={`hover:border-b-2 hover:border-black py-2 px-3 font-medium text-zinc-950`}
                            >
                                {tools[0].title}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="hover:bg-transparent rounded-none  border-b-2 border-transparent hover:border-black ">
                            Cotiza
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                                {components.map((component, key) => (
                                    <NavigationMenuLink asChild key={key}>
                                        <Link
                                            href={component.href}
                                            className={cn(
                                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                            )}
                                        >
                                            <div className="text-sm font-medium leading-none">
                                                {component.title}
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                {component.description}
                                            </p>
                                        </Link>
                                    </NavigationMenuLink>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}
