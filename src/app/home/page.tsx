import Header from "@/components/home/header"
import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import Steps from "@/components/home/steps"
import Soluciones from "@/components/home/solutions"
import Footer from "@/components/home/footer"
import { Lexend } from "next/font/google"
import { HOST_APP_URL } from "@/config"

const lexend = Lexend({ subsets: ["latin"] })
export default function Home() {
    return (
        <>
            <div className={`${lexend.className} `}>
                <Header />
                <Hero />
                <Services />
                <Steps />
                <Soluciones />
                <Footer />
                {HOST_APP_URL}
            </div>
        </>
    )
}
