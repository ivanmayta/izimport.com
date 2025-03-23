import type { ReactNode } from "react"

interface DashboardHeaderProps {
    heading: string
    text?: string
    children?: ReactNode
}

export function DashboardHeader({
    heading,
    text,
    children,
}: DashboardHeaderProps) {
    return (
        <div className="flex items-center justify-between px-2">
            <div className="grid gap-1">
                <h1 className="font-bold text-3xl">{heading}</h1>
                {text && <p className="text-muted-foreground">{text}</p>}
            </div>
            {children}
        </div>
    )
}
