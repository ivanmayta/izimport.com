import { getRates } from "@/actions/loaders"
import Image from "next/image"
import Exchange from "./exchange"

export default async function Soluciones() {
    const data = await getRates()
    return (
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <section className="">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 lg:mb-20">
                        Más <span className="text-orange-600">soluciones</span>{" "}
                        que ofrecemos para ti
                    </h2>

                    <ul className="flex flex-col space-y-16 sm:space-y-24">
                        {/* Tipo de cambio */}
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
                                <Exchange data={data} />
                            </div>
                        </li>

                        {/* Perfil personalizado */}
                        <li className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            <div className="flex items-center justify-start order-2 md:order-1">
                                <div className="relative w-full p-3 bg-white rounded-lg shadow-lg">
                                    <img
                                        src="/img/example.png"
                                        alt="Perfil personalizado"
                                        className="object-contain w-full h-auto"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center order-1 md:order-2">
                                <h3 className="text-2xl font-bold mb-4">
                                    Perfil personalizado
                                </h3>
                                <p className="text-lg">
                                    Crea un perfil personalizado para que tus
                                    clientes puedan ver la información de tu
                                    negocio en un solo lugar. Además, podrán
                                    realizar pedidos directamente al Whatsapp.
                                </p>
                                <span className="font-semibold">
                                    Demo:{" "}
                                    <a
                                        className="underline "
                                        target="_blank"
                                        href="https://izimport.com/b2b/izimport"
                                    >
                                        https://izimport.com/b2b/izimport
                                    </a>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 
            <h2 className="text-4xl font-bold text-center pb-24">
                Más <span className="text-orange-600">soluciones</span> que
                ofrecemos para ti
            </h2>

            <ul className="flex flex-col space-y-16">
                <li className="flex md:flex-row flex-col ">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">
                            Tipo de cambio
                        </h3>
                        <p className="text-lg text-balance">
                            Consulta el tipo de cambio en tiempo real para
                            mantenerte informado de la variación de las monedas
                            en tu pais. (disponible en USD, PEN, MXN, COP, BRL)
                        </p>
                    </div>

                    <div className="relative flex items-center justify-center flex-1">
                        <Exchange data={data} />
                    </div>
                </li>
                <li className="flex flex-col md:flex-row-reverse">
                    <div className=" flex-1 relative order-4 lg:order-3 flex items-center justify-start">
                        <img
                            src="/img/example.png"
                            alt="Operadores logísticos"
                            width={500}
                            height={400}
                            className="object-contain rounded-lg"
                        />
                    </div>

                    <div className=" flex-1 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-4">
                            Perfil perzonalizado
                        </h3>
                        <p className="text-lg">
                            Crea tu perfil personalizado para que tus clientes
                            puedan ver la información de tu negocio en un solo
                            lugar.
                            <strong className="text-base">
                                (izimport.com/b2b/(nombre de tu negocio))
                            </strong>
                        </p>
                    </div>
                </li>
                Pasarela de pagos 
                     <li className="flex md:flex-row flex-col ">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">
                            Tipo de cambio
                        </h3>
                        <p className="text-lg text-balance">
                            Consulta el tipo de cambio en tiempo real para
                            mantenerte informado de la variación de las monedas
                            en tu pais. (disponible en USD, PEN, MXN, COP, BRL)
                        </p>
                    </div>

                    <div className="relative flex items-center justify-center flex-1">
                        <Exchange data={data} />
                    </div>
                </li>
                    
            </ul>
            */}
        </div>
    )
}
