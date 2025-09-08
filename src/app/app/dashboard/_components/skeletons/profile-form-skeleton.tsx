import { Card, Grid, Skeleton } from "@radix-ui/themes"

export const ProfileFormSkeleton = () => {
    return (
        <Card variant="ghost">
            <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-4 items-center">
                    <div>
                        <Skeleton
                            loading
                            height="64px"
                            width="64px"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Skeleton loading height="14px" width="220px" />
                        <Skeleton loading height="12px" width="200px" />
                    </div>
                </div>
                <fieldset className="flex flex-col gap-4 flex-1">
                    <Grid
                        columns={{ initial: "1", md: "2" }}
                        gap="4"
                        width="auto"
                    >
                        <div className="flex flex-col gap-2">
                            <Skeleton loading height="16px" width="120px" />
                            <Skeleton loading height="36px" width="100%" />
                            <Skeleton loading height="12px" width="60%" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Skeleton loading height="16px" width="80px" />
                            <Skeleton loading height="36px" width="100%" />
                            <Skeleton loading height="12px" width="50%" />
                        </div>
                    </Grid>

                    <div className="flex flex-col gap-2">
                        <Skeleton loading height="16px" width="180px" />
                        <Skeleton loading height="80px" width="100%" />
                        <Skeleton loading height="12px" width="50%" />
                    </div>

                    <Grid
                        columns={{ initial: "1", md: "2" }}
                        gap="4"
                        width="auto"
                    >
                        <div className="flex flex-col gap-2">
                            <Skeleton loading height="16px" width="40px" />
                            <Skeleton loading height="36px" width="100%" />
                            <Skeleton loading height="12px" width="40%" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Skeleton loading height="16px" width="80px" />
                            <Skeleton loading height="36px" width="100%" />
                            <Skeleton loading height="12px" width="40%" />
                        </div>
                    </Grid>

                    <div className="flex flex-col my-3 gap-3">
                        <div className="flex items-center justify-center gap-2">
                            <span className="border-b-2 border-zinc-300 w-full"></span>
                            <div className="flex items-center justify-center gap-2 w-full">
                                <Skeleton loading height="18px" width="140px" />
                            </div>
                            <span className="border-b-2 border-zinc-300 w-full"></span>
                        </div>
                        <Skeleton loading height="12px" width="50%" />
                    </div>

                    <Grid
                        columns={{ initial: "1", md: "2" }}
                        gap="5"
                        width="auto"
                    >
                        <Skeleton loading height="36px" width="100%" />
                        <Skeleton loading height="36px" width="100%" />
                        <Skeleton loading height="36px" width="100%" />
                    </Grid>
                </fieldset>
                <div className="!mt-auto !self-end">
                    <Skeleton loading height="36px" width="160px" />
                </div>
            </div>
        </Card>
    )
}
