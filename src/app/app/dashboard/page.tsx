import { Text, Separator } from "@radix-ui/themes"
import { CardsDashboard } from "./_components/cards-dashboard"
import { Suspense } from "react"
import { CardDashBoardSkeleton } from "./_components/card-dashboard-skeleton"

export default async function DashboardPage() {
    return (
        <>
            <Text as="div" size="8" weight="bold">
                Dashboard
            </Text>

            <Text as="span" size="4" color="gray" className="mb-3">
                Actualiza tu información personal y de negocio.
            </Text>
            <Separator my="5" size="4" color="blue" />

            <Suspense fallback={<CardDashBoardSkeleton />}>
                <CardsDashboard />
            </Suspense>
        </>
    )
}
