import { Tracking } from "@components/shipment/tracking-dhl"
import { Suspense } from "react"
import { highlightedText } from "@/lib/utils"
import Exchange from "@/components/exchange"
import Features from "@/components/features"

const highlighText = {
    text: "Cotiza y Rastrea tus envios de forma rapida y sencilla",
    keywords: ["Cotiza", "Rastrea"],
    styles: "text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-orange-500",
}
export default function Home() {
    const { text, keywords, styles } = highlighText

    return (
        <>
            <section className="max-w-5xl mx-auto my-20 lg:flex lg:items-center lg:justify-between lg:space-x-12 space-y-8 lg:space-y-0">
                <h2 className="lg:w-3/5 text-4xl sm:text-5xl font-bold text-pretty">
                    {highlightedText(text, keywords, styles)}
                </h2>
                <Exchange />
            </section>
            <Suspense fallback={<div>Loading...</div>}>
                <Tracking />
            </Suspense>
            <Features />
        </>
    )
}
