import Hero from "@/components/home/(sections)/hero"
import Soluciones from "@/components/home/(sections)/solutions"
import { Services } from "@/components/home/(sections)/services"

export default async function Home() {
    return (
        <>
            <Hero />
            <Services />
            <Soluciones />
            {
                //Realiza el seguimiento de tu paquete enviado por Dhl Express
            }
        </>
    )
}
