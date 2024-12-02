import Link from "next/link"
import { ModeToggle } from "./mode-togglee"
function Header() {
    return (
        <header className="border-b">
            <div className="max-w-5xl mx-auto flex justify-between items-center h-16">
                <nav className="flex gap-8 items-center">
                    <h1 className="bold text-2xl font-extrabold tracking-tight lg:text-2xl">
                        <Link href="/">izimport</Link>
                    </h1>
                    <a href="">Inicio</a>
                    <a href="">Rastreo</a>
                    <a href="">Cotización</a>
                </nav>

                <ModeToggle />
            </div>
        </header>
    )
}

export default Header
