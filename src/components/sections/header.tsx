import Link from "next/link"
import * as React from "react"

import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/ui/mode-togglee"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Container from "../custom/container"

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
export default function Header() {
    return (
        <header className="border-b h-16">
            <Container className=" h-full flex items-center justify-between">
                <nav className="flex gap-8 items-center">
                    <h1 className="bold text-2xl font-extrabold tracking-tight lg:text-2xl">
                        <Link href="/">izimport</Link>
                    </h1>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        inicio
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/search" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Rastrea
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    Cotiza
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                <ModeToggle />
            </Container>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
