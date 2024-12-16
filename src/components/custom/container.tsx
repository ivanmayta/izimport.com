import { cn } from "@/lib/utils"
import { ReactNode } from "react"

function Container({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div className={cn("w-full max-w-7xl mx-auto px-4", className)}>
            {children}
        </div>
    )
}

export default Container
