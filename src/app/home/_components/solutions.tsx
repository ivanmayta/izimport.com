import { ArrowRight } from "lucide-react"

export default async function Soluciones() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <section className="">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                            Más{" "}
                            <span className="text-orange-600">soluciones</span>{" "}
                            que ofrecemos para ti
                        </h2>
                        <span className=" text-2xl font-normal text-zinc-700">
                            Utilidades para la comunidad importadora
                        </span>
                    </div>
                    <ul className="flex flex-col space-y-16 sm:space-y-24">
                        <li className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-4">
                                    Tipo de cambio
                                </h3>
                                <p className="text-lg ">
                                    Consulta el tipo de cambio en tiempo real
                                    para mantenerte informado de la variación de
                                    las monedas en tu país. (disponible en USD,
                                    PEN, MXN, COP, BRL)
                                </p>
                            </div>

                            <div className="flex items-center justify-end">
                                {/*<Exchange data={data} />*/}
                            </div>
                        </li>

                        <li className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="flex items-center justify-start order-2 md:order-1">
                                <div className="relative w-full p-3 bg-white rounded-lg shadow-lg">
                                    <img
                                        src="/images/track.png"
                                        alt="Perfil personalizado"
                                        className="object-contain w-full h-auto border p-4 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center order-1 md:order-2">
                                <h3 className="text-2xl font-bold mb-4">
                                    Seguimiento de envios por DHL
                                </h3>
                                <p className="text-lg">
                                    Realiza el seguimiento de tu paquete enviado
                                    por DHL Express. Puedes ingresar el número
                                    de guía y ver el estado de tu envío en
                                    tiempo real.
                                </p>

                                <a
                                    className="text-orange-600 flex items-center mt-3 font-bold gap-2"
                                    target="_blank"
                                    href="https://track.izimport.com/"
                                >
                                    Rastrear envios
                                    <ArrowRight size={18} />
                                </a>
                            </div>
                        </li>
                        <li className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-4">
                                    Costea importaciones
                                </h3>
                                <p className="text-lg ">
                                    Calcula el costo de tu importación en
                                    diferentes modalidades, simplifica,
                                    exonerada, de usa. Basado en el valor de
                                    producto, incluyendo impuestos y gastos de
                                    envío.
                                </p>
                                <a
                                    className="text-orange-600 flex items-center mt-3 font-bold gap-2"
                                    target="_blank"
                                    href="https://quotes.izimport.com/"
                                >
                                    Cotiza importaciones
                                    <ArrowRight size={18} />
                                </a>
                            </div>

                            <div className="flex items-center justify-start order-2 md:order-1">
                                <div className="relative w-full p-3 bg-white rounded-lg shadow-lg">
                                    <img
                                        src="/images/quotes.png"
                                        alt="Perfil personalizado"
                                        className="object-contain w-full h-auto border p-4 rounded-md"
                                    />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
