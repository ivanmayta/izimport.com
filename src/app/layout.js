import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/ui/theme-provider"
import { ModeToggle } from "../components/ModeToggle"
import { MainNav } from "../components/MainNav"

import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "izimport",
    description: "Cotiza y rastrea tus envios de forma rapida y sencilla",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <header className="w-full fixed z-50 backdrop-blur-md dark:bg-background bg-white/90">
                        <nav className="flex py-2 px-5 dark:bg-background border-b border-neutral-200 dark:border-neutral-800 items-center justify-between">
                            <h2 className="bold text-2xl font-extrabold tracking-tight lg:text-2xl">
                                <Link href="/">izimport</Link>
                            </h2>
                            <ModeToggle />
                        </nav>
                        <section className="max-w-4xl mx-auto">
                            <MainNav />
                        </section>
                    </header>
                    <main className=" flex flex-col max-w-3xl mx-auto min-h-screen">
                        {children}
                    </main>
                    <footer className="flex justify-center">
                        Hecho por izimport.com
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    )
}
