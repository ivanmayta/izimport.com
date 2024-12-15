import Exchange from "@components/exchange"
import { ReactNode } from "react"
import Container from "../custom/container"

function Hero() {
    return (
        <section className=" ">
            <Container className="flex flex-col items-center justify-center pt-20 pb-10 lg:py-20 lg:flex-row">
                <h2 className="lg:w-3/5  text-center text-5xl lg:text-left md:text-6xl  font-bold text-pretty pb-8">
                    <HighlightText>Cotiza</HighlightText> y
                    <HighlightText> Rastrea </HighlightText>
                    Tus Envios de Forma Rapida y Sencilla
                </h2>
                {
                    <Exchange />
                    //
                }
            </Container>
        </section>
    )
}

const HighlightText = ({ children }: { children: ReactNode }) => {
    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-orange-500">
            {children}
        </span>
    )
}

export default Hero
