import { Lexend } from "next/font/google"
import Header from "./_components/header"
import Hero from "./_components/hero"
import Services from "./_components/services"
import Steps from "./_components/steps"
import Footer from "./_components/footer"
import Soluciones from "./_components/solutions"
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
            </div>
        </>
    )
}
