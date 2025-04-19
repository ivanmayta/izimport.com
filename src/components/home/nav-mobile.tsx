import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { ExchangeBadge } from "../home/exchange-badge"
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
export async function NavMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
                <SheetHeader>
                    <SheetTitle className="text-left">Menu</SheetTitle>
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
                            href={tools[0].href}
                            className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent"
                        >
                            {tools[0].title}
                        </a>
                    </SheetClose>

                    <div className="px-4 py-2">
                        <h3 className="mb-2 text-sm font-medium">Cotiza</h3>
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
                            <Link href="">Iniciar Sesión</Link>
                        </form>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
