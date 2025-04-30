import Hero from "@/components/home/(sections)/hero"
import Soluciones from "@/components/home/(sections)/solutions"
import { Services } from "@/components/home/(sections)/services"

export default async function Home() {
    return (
        <>
            <Hero />
            <Services />
            <section className="max-w-7xl mx-auto p-4">
                <h1>Pasos</h1>
                <div className="grid grid-cols-2">
                    <div>
                        <h1>Inicia sesión</h1>
                    </div>
                    <div>Crear un perfil de Negocio</div>
                    <div>Carga tus Productos</div>
                    <div>Comparte tu enlace</div>
                </div>
            </section>
            <Soluciones />
            {
                //Realiza el seguimiento de tu paquete enviado por Dhl Express
            }
        </>
    )
}
