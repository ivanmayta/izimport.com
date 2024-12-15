import Link from "next/link"
import { ModeToggle } from "@/components/ui/mode-togglee"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@components/ui/navigation-menu"
import Container from "../custom/container"
function Header() {
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
                                <Link href="/rastrea" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        Rastrea
                                    </NavigationMenuLink>
                                </Link>
                                <NavigationMenuTrigger>
                                    Cotiza
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        <Link
                                            href="/simplificado"
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Proceso Simplificado
                                            </NavigationMenuLink>
                                        </Link>
                                        <Link
                                            href="/exonerado"
                                            legacyBehavior
                                            passHref
                                        >
                                            <NavigationMenuLink
                                                className={navigationMenuTriggerStyle()}
                                            >
                                                Proceso exonerado
                                            </NavigationMenuLink>
                                        </Link>
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

export default Header
