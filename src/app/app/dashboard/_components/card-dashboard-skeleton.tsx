import { Skeleton } from "@radix-ui/themes"

export const CardDashBoardSkeleton = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton loading height="200px" width="100%" />
            <Skeleton loading height="200px" width="100%" />
            <Skeleton loading height="200px" width="100%" />
        </div>
    )
}
