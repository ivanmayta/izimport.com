import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { UserButton } from "@clerk/nextjs"
import "@radix-ui/themes/styles.css"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="bg-background sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b">
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <SidebarTrigger />

                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                    </div>
                    <div className="ml-auto px-3">
                        <UserButton fallback={<p>user</p>} showName />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 px-4 py-6">
                    {/* <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-muted/50" /> */}
                    <div className="mx-auto h-full w-full max-w-4xl rounded-xl  sm:p-8">
                        {children}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
