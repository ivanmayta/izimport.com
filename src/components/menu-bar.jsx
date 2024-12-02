import { ModeToggle } from "./mode-togglee"
import Link from "next/link"

export default function MenuBar() {
    return (
        <section className="flex py-2 px-5 bg-background/50 border-b border-neutral-400 dark:border-neutral-800 items-center justify-between">
            <h1 className="bold text-2xl font-extrabold tracking-tight lg:text-2xl">
                <Link href="/">izimport</Link>
            </h1>
            <nav>
                <a href="">Inicio</a>
                <a href="">Rastreo</a>
                <a href="">Cotización</a>
            </nav>
            <ModeToggle />
        </section>
    )
}
