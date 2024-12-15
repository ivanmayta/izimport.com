import { ThemeProvider } from "../components/ui/theme-provider"
import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import "./globals.css"

export const metadata = {
    title: "izimport",
    description: "Cotiza y rastrea tus envios de forma rapida y sencilla",
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="min-w-[480px] ">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <main className="min-h-screen">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
