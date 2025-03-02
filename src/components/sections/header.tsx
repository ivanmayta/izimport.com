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
import { ExchangeBadge } from "@components/exchange/exchange-badge"
import { Button } from "../ui/button"
import { signInWithGoole, logout } from "@/actions/auth"
import { createClient } from "@/utils/supabase/server"

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
export default async function Header() {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    console.log("Render Home", data)
    return (
        <header className=" h-16 sticky top-0  z-50">
            <Container className=" h-full flex items-center justify-between">
                <nav className="flex gap-8 items-center">
                    <h1 className=" text-3xl font-extrabold tracking-tight lg:text-2xl">
                        <Link href="/">izimport.com</Link>
                    </h1>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Inicio
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
                                        {components.map((component, key) => (
                                            <NavigationMenuLink
                                                asChild
                                                key={key}
                                            >
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
                <div className="flex gap-4 items-center">
                    <form className="flex gap-4 items-center flex-col sm:flex-row">
                        {data.user == null ? (
                            <Button
                                variant="outline"
                                formAction={signInWithGoole}
                            >
                                Iniciar sesión con google
                            </Button>
                        ) : (
                            <Button variant="link" formAction={logout}>
                                Cerrar sesión
                            </Button>
                        )}
                    </form>
                    <ExchangeBadge />
                    <ModeToggle />
                </div>
            </Container>
        </header>
    )
}
