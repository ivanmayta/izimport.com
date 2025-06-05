import { Skeleton } from "@radix-ui/themes"

export const ProductListSkeleton = () => {
    return (
        <div className="flex flex-col gap-4">
            <Skeleton loading height="60px" width="100%" />
            <Skeleton loading height="400px" width="100%" />
        </div>
    )
}
