import Exchange from "@components/sections/exchange"
import { ReactNode, Suspense } from "react"
import Container from "@/components/custom/container"
import SearchForm from "../tracking/search-form"
import { getRates } from "@/actions/loaders"

async function Hero() {
    const data = await getRates()
    return (
        <section>
            <Container className="flex flex-col lg:flex-row  py-20 gap-8">
                <div>
                    <h1 className=" text-5xl text-pretty md:text-6xl  font-bold sm:text-balance pb-10">
                        <HighlightText>Cotiza</HighlightText> y
                        <HighlightText> rastrea </HighlightText>
                        tus envíos de forma rápida y sencilla
                    </h1>
                    <Suspense fallback={<p>Loading...</p>}>
                        <SearchForm />
                    </Suspense>
                </div>
                {
                    <Exchange data={data} />

                    //
                }
            </Container>
        </section>
    )
}

const HighlightText = ({ children }: { children: ReactNode }) => {
    return (
        <span className="text-transparent bg-clip-text bg-[#F0B90B]">
            {children}
        </span>
    )
}

export default Hero
