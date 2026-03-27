import { Sora, Inter } from "next/font/google"
import Header from "./_components/header"
import Hero from "./_components/hero"
import Services from "./_components/services"
import Footer from "./_components/footer"
import Timeline from "./_components/timeline"

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export default function Home() {
    return (
        <div className={`${sora.variable} ${inter.variable} font-sans selection:bg-[#25D366]/30`}>
            <Header />
            <main>
                <Hero />
                <Services />
                <Timeline />
            </main>
            <Footer />
        </div>
    )
}
