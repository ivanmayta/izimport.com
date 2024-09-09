import { Onest } from "next/font/google"
import { ThemeProvider } from "../components/ui/theme-provider"
import { MainNav } from "../components/MainNav"
import { NavHeader } from "../components/NavHeader"
import "./globals.css"

const onest = Onest({ subsets: ["latin"] })

export const metadata = {
    title: "izimport",
    description: "Cotiza y rastrea tus envios de forma rapida y sencilla",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={onest.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <header className="w-full fixed z-50 backdrop-blur-md ">
                        <NavHeader />
                        <MainNav className="mx-auto max-w-4xl flex justify-start bg-transparent" />
                    </header>
                    <main className=" flex flex-col max-w-3xl mx-auto min-h-screen">
                        {children}
                    </main>
                    <footer className="flex justify-center">
                        Hecho por izimport.com
                    </footer>
                </ThemeProvider>

                <div className="absolute top-0 z-[-2] h-screen w-full  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
            </body>
        </html>
    )
}
