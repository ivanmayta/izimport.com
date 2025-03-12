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
import { createClient } from "@/lib/supabase/server"
import { LogosGoogleIcon } from "@/icons/google"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { LogOut, Menu } from "lucide-react"

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
        <header className="h-16 sticky top-0 bg-background z-50 border-b">
            <div className="container h-full flex items-center justify-between">
                {/* Left side: Logo and Desktop Navigation */}
                <div className="flex items-center gap-8">
                    {/* Logo - visible on all screens */}
                    <h1 className="text-2xl font-extrabold tracking-tight">
                        <a href="/">izimport.com</a>
                    </h1>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <nav className="hidden md:flex items-center">
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
                                    <Link
                                        href="/search"
                                        legacyBehavior
                                        passHref
                                    >
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
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                                            {components.map(
                                                (component, key) => (
                                                    <NavigationMenuLink
                                                        asChild
                                                        key={key}
                                                    >
                                                        <Link
                                                            href={
                                                                component.href
                                                            }
                                                            className={cn(
                                                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                            )}
                                                        >
                                                            <div className="text-sm font-medium leading-none">
                                                                {
                                                                    component.title
                                                                }
                                                            </div>
                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                {
                                                                    component.description
                                                                }
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                )
                                            )}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>
                </div>

                {/* Right side: Actions and Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    {/* Desktop Actions - Hidden on mobile */}
                    <div className="hidden md:flex items-center gap-4">
                        <form className="flex gap-4 items-center">
                            <ExchangeBadge />
                            {data.user == null ? (
                                <Button
                                    variant="outline"
                                    formAction={signInWithGoole}
                                >
                                    <LogosGoogleIcon className="h-5 w-5 mr-2" />
                                    Iniciar sesión
                                </Button>
                            ) : (
                                <>
                                    <Button variant="link" formAction={logout}>
                                        <LogOut className="size-6" />
                                        Cerrar sesión
                                    </Button>
                                    <Link
                                        className="text-zinc-700 hover:bg-yellow-300 font-semibold px-3 py-1 rounded-md bg-[#FCD535]"
                                        href="/dashboard"
                                    >
                                        Dashboard
                                    </Link>
                                </>
                            )}
                        </form>
                        <ModeToggle />
                    </div>

                    {/* Mobile Menu Button - Only visible on small screens */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            className="w-[80%] sm:w-[350px]"
                        >
                            <SheetHeader>
                                <SheetTitle className="text-left">
                                    Menu
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-6">
                                <SheetClose asChild>
                                    <a
                                        href="/"
                                        className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
                                    >
                                        Inicio
                                    </a>
                                </SheetClose>
                                <SheetClose asChild>
                                    <a
                                        href="/search"
                                        className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
                                    >
                                        Rastrea
                                    </a>
                                </SheetClose>

                                <div className="px-4 py-2">
                                    <h3 className="mb-2 text-sm font-medium">
                                        Cotiza
                                    </h3>
                                    <div className="pl-2 border-l-2 border-muted space-y-2">
                                        {components.map((component, key) => (
                                            <SheetClose asChild key={key}>
                                                <a
                                                    href={component.href}
                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <div className="text-sm font-medium leading-none">
                                                        {component.title}
                                                    </div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        {component.description}
                                                    </p>
                                                </a>
                                            </SheetClose>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 px-4">
                                    <form className="flex flex-col gap-4">
                                        <ExchangeBadge />
                                        {data.user == null ? (
                                            <Button
                                                variant="outline"
                                                formAction={signInWithGoole}
                                                className="w-full justify-start"
                                            >
                                                <LogosGoogleIcon className="h-5 w-5 mr-2" />
                                                Iniciar sesión
                                            </Button>
                                        ) : (
                                            <div className="flex flex-col gap-2">
                                                <Button
                                                    variant="link"
                                                    formAction={logout}
                                                    className="justify-start px-0"
                                                >
                                                    Cerrar sesión
                                                </Button>
                                                <SheetClose asChild>
                                                    <a
                                                        className="text-zinc-700 hover:bg-yellow-300 font-semibold px-3 py-1 rounded-md bg-[#FCD535] text-center"
                                                        href="/dashboard"
                                                    >
                                                        Dashboard
                                                    </a>
                                                </SheetClose>
                                            </div>
                                        )}
                                    </form>
                                    <div className="mt-4 flex justify-start">
                                        <ModeToggle />
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
