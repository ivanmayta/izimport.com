import { ModeToggle } from "./mode-togglee"
import Link from "next/link"
import { Button } from "./ui/button"
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/dropdown"

export default function MenuBar() {
    return (
        <div className="flex py-2 px-5 bg-background/50 border-b border-neutral-400 dark:border-neutral-800 items-center justify-between">
            <h2 className="bold text-2xl font-extrabold tracking-tight lg:text-2xl">
                <Link href="/">izimport</Link>
            </h2>
            <ModeToggle />
        </div>
    )
}
