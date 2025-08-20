import { ClerkProvider } from "@clerk/nextjs"
import { Theme } from "@radix-ui/themes"
import { Toaster } from "sonner"
import { esES } from "@clerk/localizations"

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <ClerkProvider
            localization={esES}
            appearance={{ cssLayerName: "clerk" }}
        >
            <Toaster position="top-center" richColors expand={true} />
            <Theme>{children}</Theme>
        </ClerkProvider>
    )
}
