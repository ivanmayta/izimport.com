import { Tracking } from "@components/shipment/tracking-dhl"
import { Suspense } from "react"
import { highlightedText } from "@/lib/utils"
import {
    Card,
    CardDescription,
    CardHeader,
    CardContent,
} from "@/components/ui/card"
import { ExchangeFill } from "@/icons/exchange-fill"

const highlighText = {
    text: "Cotiza y Rastrea tus envios de forma rapida y sencilla",
    keywords: ["Cotiza", "Rastrea"],
    styles: "text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-orange-500",
}
export default function Home() {
    const { text, keywords, styles } = highlighText

    return (
        <>
            <section className="my-20 lg:flex lg:items-center lg:justify-between lg:space-x-12 space-y-8 lg:space-y-0">
                <h2 className="lg:w-3/5 text-4xl sm:text-5xl font-bold">
                    {highlightedText(text, keywords, styles)}
                </h2>
                <Card className="dark:bg-exchange lg:w-2/5 border-[0px]">
                    <CardHeader>
                        <CardDescription className="text-center">
                            Tipo de cambio
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="relative flex flex-col gap-2 ">
                        <div className=" h-12 border-2 rounded-lg flex">
                            <input
                                className="h-full rounded-l-lg flex-grow"
                                text=""
                            ></input>
                            <label className="w-1/3 h-full bg-black text-white px-2 rounded-r-lg flex items-center justify-center">
                                Dolares
                            </label>
                        </div>
                        <div className="absolute top-[40%] right-[30%] -translate-y-1/3 -translate-x-1/3">
                            <div className="bg-background/40 w-6 h-6 rounded-full">
                                <ExchangeFill  />
                            </div>
                        </div>
                        <div className="h-12 border-2 rounded-lg flex">
                            <input
                                className="h-full rounded-l-lg flex-grow"
                                text=""
                            ></input>
                            <label className="w-1/3 h-full bg-black text-white px-2 rounded-r-lg flex items-center justify-center">
                                Soles
                            </label>
                        </div>
                    </CardContent>
                </Card>
            </section>
            <Suspense fallback={<div>Loading...</div>}>
                <Tracking />
            </Suspense>
        </>
    )
}
