import { Card, Skeleton } from "@radix-ui/themes"

export const CardDashBoardSkeleton = () => {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="!flex !flex-col">
                <div className="flex flex-row items-center justify-between space-y-0 ">
                    <Skeleton loading height="20px" width="100%" />
                </div>
                <div className="flex-grow pb-6">
                    <Skeleton loading height="20px" width="100%" />
                    <Skeleton loading height="20px" width="100%" />
                </div>
                <Skeleton loading height="20px" width="100%" />
            </Card>
            <Card className="!flex !flex-col">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Skeleton loading height="20px" width="100%" />
                    <Skeleton loading height="20px" width="100%" />
                </div>
                <div className="flex-grow pb-6">
                    <Skeleton loading height="20px" width="100%" />
                    <Skeleton loading height="20px" width="100%" />
                </div>
                <Skeleton loading height="20px" width="100%" />
            </Card>
            <Card className="!flex !flex-col">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Skeleton loading height="20px" width="100%" />
                    <Skeleton loading height="20px" width="100%" />
                </div>
                <div className="flex-grow pb-6">
                    <Skeleton loading height="20px" width="100%" />
                    <Skeleton loading height="20px" width="100%" />
                </div>
                <Skeleton loading height="20px" width="100%" />
            </Card>
        </div>
    )
}
