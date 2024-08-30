import { ModeToggle } from "./ModeToggle"
import Link from "next/link"

export function NavHeader() {
    return (
        <nav className="flex py-2 px-5 bg-background/50 border-b border-neutral-200 dark:border-neutral-800 items-center justify-between">
            <h2 className="bold text-2xl font-extrabold tracking-tight lg:text-2xl">
                <Link href="/">izimport</Link>
            </h2>
            <ModeToggle />
        </nav>
    )
}
