import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonTrackResponse() {
    return (
        <div className="w-full rounded-xl max-w-3xl mx-auto space-y-2">
            <Skeleton className="h-[125px]" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}
