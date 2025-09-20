import { NEXT_PUBLIC_APP_URL, NEXT_PUBLIC_BASE_DOMAIN } from "@/config"
function Hero() {
    return (
        <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="lg:w-2/3 text-center lg:text-left">
                    <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold  text-balance mb-8">
                        Tu Catálogo Online,{" "}
                        <span className="text-transparent bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text">
                            Listo para Vender
                        </span>{" "}
                        por WhatsApp
                    </h1>

                    <div className=" mb-10">
                        <p className="text-xl lg:text-2xl font-light text-gray-700 leading-relaxed">
                            Tu tienda en línea en minutos.
                        </p>
                        <p className="text-lg lg:text-xl font-light text-gray-600 leading-relaxed max-w-2xl">
                            Crea tu catálogo, comparte el enlace y comienza a
                            recibir pedidos sin complicaciones.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start">
                        <a
                            href={`${NEXT_PUBLIC_APP_URL}`}
                            target="_blank"
                            className="lg:mx-0 bg-[#FCD535] text-zinc-800 text-xl font-bold rounded-xl py-3.5 px-8 focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out"
                        >
                            ¡Pruebalo Ya!
                        </a>
                        <a
                            href={`${NEXT_PUBLIC_BASE_DOMAIN}/izimport`}
                            target="_blank"
                            className="text-lg px-8 py-3 border-2 border-zinc-500 rounded-xl hover:border-orange-600 hover:text-orange-600 transition-colors bg-transparent"
                        >
                            Ver Ejemplo
                        </a>
                    </div>

                    {/* Social Proof */}
                </div>

                {/* Right Image */}
                <div className="lg:w-1/3 relative">
                    <div className="relative max-w-md mx-auto">
                        <img
                            alt="banner principal"
                            className="w-full h-auto rounded-2xl shadow-2xl"
                            src="/images/main.png"
                        />
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            ✅ URL Personalizada
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-[#FCD535] text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            📱 Checkout WhatsApp
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
