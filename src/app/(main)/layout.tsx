import Footer from "@/components/sections/footer"
import Header from "@/components/sections/header"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export default function MainLayout({ children }) {
    return (
        <>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Header />
                <main className={`${inter.className} min-h-screen`}>
                    {children}
                    <Toaster
                        toastOptions={{
                            style: {
                                textAlign: "center",
                            },
                        }}
                    />
                </main>
                <Footer />
            </ThemeProvider>
        </>
    )
}
