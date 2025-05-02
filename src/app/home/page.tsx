import Hero from "@/components/home/(sections)/hero"
import Soluciones from "@/components/home/(sections)/solutions"
import { Services } from "@/components/home/(sections)/services"
import Steps from "@/components/home/(sections)/steps"

export default async function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Steps />
            <Soluciones />
        </>
    )
}
