import { ThemeProvider } from "../components/ui/theme-provider"
import Header from "@components/header"
import Footer from "@components/footer"
import "./globals.css"

export const metadata = {
    title: "izimport",
    description: "Cotiza y rastrea tus envios de forma rapida y sencilla",
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="min-w-[420px]">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <main className=" flex flex-col max-w-5xl mx-auto min-h-screen min-w-96">
                        {children}
                    </main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
