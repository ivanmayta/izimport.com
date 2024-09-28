import { Onest } from "next/font/google"
import { ThemeProvider } from "../components/ui/theme-provider"
import MenuNavigation from "../components/menu-navigation"
import MenuBar from "../components/menu-bar"
import { ArrowUpRight, Github } from "lucide-react"
import "./globals.css"

const onest = Onest({ subsets: ["latin"] })

export const metadata = {
    title: "izimport",
    description: "Cotiza y rastrea tus envios de forma rapida y sencilla",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${onest.className} relative`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <header className="w-full fixed z-50 backdrop-blur-md ">
                        <MenuBar />
                        <MenuNavigation className="mx-auto max-w-4xl flex justify-start bg-transparent" />
                    </header>
                    <main className=" flex flex-col max-w-4xl mx-auto min-h-screen min-w-96">
                        {children}
                    </main>
                    <footer className="bg-trans flex justify-center">
                        <a
                            href="https://github.com/ivanmayta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex gap-1 decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
                        >
                            <span>Hecho por</span>
                            <Github className="w-4" />
                            <ArrowUpRight className="w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
                        </a>
                        <span>@2024</span>{" "}
                    </footer>
                </ThemeProvider>
            </body>
        </html>
    )
}
