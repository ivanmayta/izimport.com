import { ClerkProvider } from "@clerk/nextjs"
import { Theme } from "@radix-ui/themes"
import { Toaster } from "sonner"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <Toaster position="top-center" richColors />
            <Theme>{children}</Theme>
        </ClerkProvider>
    )
}
