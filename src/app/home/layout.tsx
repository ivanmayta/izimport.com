import Footer from "@/components/home/(sections)/footer"
import Header from "@/components/home/(sections)/header"
import { Lexend } from "next/font/google"

const lexend = Lexend({ subsets: ["latin"] })

export default function MainLayout({ children }) {
    return (
        <>
            <main
                className={`${lexend.className} overflow-x-hidden bg-slate-50`}
                suppressHydrationWarning
            >
                <Header />
                {children}
                <Footer />
            </main>
        </>
    )
}
