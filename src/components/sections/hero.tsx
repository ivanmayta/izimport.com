import Exchange from "@components/sections/exchange"
import { ReactNode, Suspense } from "react"
import Container from "@/components/custom/container"
import SearchForm from "../tracking/search-form"
import { getRates } from "@/actions/loaders"
import { IconDhl } from "@/icons/icon-dhl"
import { signInWithGoole } from "@/actions/auth"

async function Hero() {
    const data = await getRates()
    return (
        <section className="bg-black text-white">
            <div className="max-w-screen-xl px-8 md:px-0 mx-auto flex flex-col lg:flex-row items-start pt-20 ">
                <div className="flex flex-col w-full lg:w-3/5 justify-center lg:pt-12 text-center lg:text-left mb-5 md:mb-0 ">
                    <h1 className="my-4 text-5xl font-bold leading-tight">
                        Vende Más con tu{" "}
                        <span className="text-[#F48C06]">
                            Catálogo de productos
                        </span>{" "}
                        en linea.
                    </h1>
                    <p className="leading-normal text-2xl mb-8">
                        Importa, Vende y Expande Tu Negocio
                    </p>
                    <div className="w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
                        <button
                            onClick={signInWithGoole}
                            className="lg:mx-0 bg-[#FCD535] text-zinc-800 text-xl font-bold rounded-xl py-3.5 px-8 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out"
                        >
                            ¡Pruebalo Ya!
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 lg:-mt-10 relative" id="girl">
                    <img className="w-10/12 mx-auto 2" src="img/banner.png" />
                    {/*
                    <div className="absolute top-20 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-10 lg:right-0 floating">
                        <img className="h-16 sm:h-12 rounded-md" src="img/dhl.svg" alt="Icono de DHL"/>
                    </div>
                    <div className="absolute bottom-40 md:bottom-42 lg:bottom-48 -right-7 lg:-right-12">
                        <img
                            className="bg-white bg-opacity-80 rounded-lg h-16 "
                            src="img/products.svg"
                            alt=""
                        />
                    </div>
                    <div className="absolute bottom-20 md:bottom-48 lg:bottom-20 -right-7 lg:right-1">
                        <img
                            className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16"
                            src="img/congrat.svg"
                            alt=""
                        />
                    </div>
                        */}
                </div>
            </div>
        </section>
    )
}

export default Hero
