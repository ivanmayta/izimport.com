import { Suspense } from "react"
import Features from "@/components/sections/features"
import Hero from "@/components/sections/hero"
import SearchForm from "@/components/tracking/search-form"
import Header from "@/components/sections/header"
import Footer from "@/components/sections/footer"
import Exchange from "@/components/sections/exchange"
import { getRates } from "@/actions/loaders"
import Soluciones from "@/components/sections/solutions"

export default async function Home() {
    const data = await getRates()
    return (
        <>
            <Hero />

            <Features />
            <div className="flex  flex-col container items-center justify-center space-y-6 pb-16">
                <h2 className="my-4 text-4xl font-bold leading-tight max-w-[38ch] text-center">
                    Realiza el{" "}
                    <span className="text-orange-600">seguimiento</span> de tu
                    paquete enviado por{" "}
                    <span className="text-orange-600">Dhl Express</span>
                </h2>
                <Suspense fallback={<div>Loading...</div>}>
                    <SearchForm className="w-full max-w-3xl mx-auto" />
                </Suspense>
            </div>
            <Soluciones />
            <Footer />
        </>
    )
}
