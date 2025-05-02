import { getAuthUrlOrigin } from "@/lib/utils"

async function Hero() {
    return (
        <section className=" text-zinc-900">
            <div className="max-w-screen-xl px-2 sm:px-6 lg:px-0 mx-auto flex flex-col lg:flex-row items-start pt-20">
                <div className="flex flex-col w-full lg:w-3/5 justify-center  text-center lg:text-left mb-5 md:mb-0 ">
                    <h1 className="my-4 text-5xl sm:text-[3.3rem] font-medium leading-tight text-balance">
                        Tu Catálogo Online, Listo para Vender por WhatsApp
                    </h1>
                    <p className="leading-normal text-xl font-light">
                        Tu tienda en línea en minutos.
                    </p>
                    <p className="leading-normal text-xl font-light mb-8">
                        Crea tu catálogo, comparte el enlace y comienza a
                        recibir pedidos sin complicaciones.
                    </p>
                    <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
                        <a
                            href={getAuthUrlOrigin()}
                            className="lg:mx-0 bg-[#FCD535] text-zinc-800 text-xl font-bold rounded-xl py-3.5 px-8 focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out"
                        >
                            ¡Pruebalo Ya!
                        </a>
                    </div>
                </div>
                <div
                    className="w-full pt-6 lg:pt-0 self-center sm:w-3/5 lg:w-2/5 relative"
                    id="girl"
                >
                    <img
                        alt="banner principal"
                        className="w-10/12 mx-auto 2"
                        src="img/banner.png"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
