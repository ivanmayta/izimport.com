"use client"

import { NEXT_PUBLIC_APP_URL } from "@/config"
import { ArrowRight, CheckCircle, X } from "lucide-react"
import { useState } from "react"

export default function Timeline() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <>
            {/* Modal de zoom */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <img
                            src={selectedImage || "/placeholder.svg"}
                            alt="Vista ampliada"
                            className="w-full h-full object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}

            <section className="py-16 px-4 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-gray-900">
                            En menos de 5 minutos, tu{" "}
                            <span className="italic text-orange-600">
                                tienda online
                            </span>{" "}
                            estará lista para recibir pedidos por WhatsApp
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Proceso simple y directo
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="grid md:grid-cols-4 gap-8 relative mb-16">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-300"></div>

                        {[
                            {
                                day: "Paso 1",
                                title: "Elige tu URL personalizada",
                                description:
                                    "Selecciona tu nombre único para tu tienda: izimport.com/tunombre. Será tu dirección web personal.",
                                active: true,
                            },
                            {
                                day: "Paso 2",
                                title: "Sube tu catálogo de productos",
                                description:
                                    "Agrega tus productos con fotos, precios y descripciones. Configura tu número de WhatsApp para recibir pedidos.",
                                active: false,
                            },
                            {
                                day: "Paso 3",
                                title: "Personaliza tu tienda",
                                description:
                                    "Ajusta colores, logo y información de contacto. Tu tienda estará lista para compartir.",
                                active: false,
                            },
                            {
                                day: "¡Listo!",
                                title: "Comparte y recibe pedidos",
                                description:
                                    "Comparte tu URL única. Los clientes verán tu catálogo y te enviarán pedidos por WhatsApp.",
                                active: false,
                            },
                        ].map((step, index) => (
                            <div
                                key={index}
                                className={`relative bg-white rounded-lg border shadow-sm p-6 ${
                                    step.active ? "ring-2 ring-orange-300" : ""
                                }`}
                            >
                                <div
                                    className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-sm font-medium ${
                                        step.active
                                            ? "bg-orange-600 text-white"
                                            : "bg-gray-700 text-white"
                                    }`}
                                >
                                    {step.day}
                                </div>
                                <div className="pt-8 pb-6">
                                    <div className="flex items-start space-x-3">
                                        <div
                                            className={`p-2 rounded-lg ${
                                                step.active
                                                    ? "bg-orange-100"
                                                    : "bg-gray-100"
                                            }`}
                                        >
                                            <CheckCircle
                                                className={`h-5 w-5 ${
                                                    step.active
                                                        ? "text-orange-600"
                                                        : "text-gray-600"
                                                }`}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2 text-balance text-gray-900">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 text-balance">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Grid de imágenes con zoom */}
                    <div className="mb-12">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "Configuración URL",
                                    image: "/images/1.png",
                                    step: "Paso 1",
                                },
                                {
                                    title: "Personalización",
                                    image: "/images/2.png",
                                    step: "Paso 2",
                                },
                                {
                                    title: "Catálogo de Productos",
                                    image: "/images/3.png",
                                    step: "Paso 3",
                                },
                                {
                                    title: "Tienda Lista",
                                    image: "/images/main.png",
                                    step: "Resultado",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg border shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => setSelectedImage(item.image)}
                                >
                                    <div className="relative">
                                        <img
                                            src={
                                                item.image || "/placeholder.svg"
                                            }
                                            alt={item.title}
                                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-2 left-2 bg-orange-600 text-white px-2 py-1 rounded text-xs font-medium">
                                            {item.step}
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center">
                                            <div className="opacity-0 hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2">
                                                <svg
                                                    className="h-5 w-5 text-gray-700"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-semibold text-center text-gray-900">
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <a
                            href={`${NEXT_PUBLIC_APP_URL}`}
                            target="_blank"
                            className="inline-flex items-center mx-auto bg-[#FCD535] text-zinc-800 text-base font-bold rounded-xl py-3.5 px-8 focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out"
                        >
                            Crear Mi Tienda Gratis
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
