import { Tracking } from "../components/tracking-dhl"
import { Poppins } from "next/font/google"
import { Suspense } from "react"
import { highlightedText } from "../lib/utils"
const poppins = Poppins({ subsets: ["latin"], weight: "700" })

const highlighText = {
    text: "Cotiza y Rastrea tus envios de forma rapida y sencilla",
    keywords: ["Cotiza", "Rastrea"],
    styles: "text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-orange-500",
}
export default function Home() {
    const { text, keywords, styles } = highlighText

    return (
        <>
            <section className="relative mt-40 w-full h-full border-neutral-300 p-3 px-12 placeholder-neutral-500 focus:outline-none   focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 flex flex-col gap-4">
                <h1
                    className={`${poppins.className} mb-10 sm:mb-20 text-3xl text-center sm:text-6xl dark:text-white text-stone-800`}
                >
                    {highlightedText(text, keywords, styles)}
                </h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <Tracking />
                </Suspense>
            </section>
        </>
    )
}
