"use client"

import { APP_URLS } from "@/config"
import { ArrowRight, X, Smartphone, ListChecks, Settings2, Rocket } from "lucide-react"
import { useState } from "react"

export default function Timeline() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const steps = [
        {
            tag: "Paso 1",
            title: "URL personalizada",
            description: "Elige tu nombre único: izimport.com/tunombre. Tu marca, tu dirección.",
            icon: <Smartphone className="h-5 w-5" />,
            active: true
        },
        {
            tag: "Paso 2",
            title: "Carga tu catálogo",
            description: "Sube fotos y precios. Configura tu WhatsApp para recibir los pedidos.",
            icon: <ListChecks className="h-5 w-5" />,
            active: false
        },
        {
            tag: "Paso 3",
            title: "Personaliza",
            description: "Ajusta colores y logo para que la tienda se sienta 100% tuya.",
            icon: <Settings2 className="h-5 w-5" />,
            active: false
        },
        {
            tag: "¡Listo!",
            title: "Vende por WhatsApp",
            description: "Comparte tu link y empieza a recibir pedidos organizados.",
            icon: <Rocket className="h-5 w-5" />,
            active: false
        }
    ]

    const showcases = [
        { title: "Configuración URL", image: "/images/1.png", step: "Paso 1" },
        { title: "Personalización", image: "/images/2.png", step: "Paso 2" },
        { title: "Gestión de Productos", image: "/images/3.png", step: "Paso 3" },
        { title: "Tienda Finalizada", image: "/images/main.png", step: "Resultado" }
    ]

    return (
        <>
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-zinc-950/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full animate-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors"
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Vista ampliada"
                            className="w-full h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}

            <section className="py-24 px-6 bg-zinc-50/50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight">
                            Tu tienda lista en <span className="text-red-600 italic">5 minutos</span>
                        </h2>
                        <p className="text-zinc-500 text-lg font-medium">Un proceso diseñado para que no pierdas tiempo.</p>
                    </div>

                    {/* Simplified Steps Flow */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative p-8 rounded-3xl transition-all duration-500 border ${
                                    step.active 
                                    ? "bg-white border-zinc-200 shadow-xl shadow-zinc-200/50 scale-105 z-10" 
                                    : "bg-transparent border-transparent hover:bg-white/50 hover:border-zinc-100"
                                }`}
                            >
                                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-6 ${
                                    step.active ? "bg-orange-500 text-white" : "bg-zinc-200 text-zinc-500"
                                }`}>
                                    {step.icon}
                                </div>
                                <span className={`block text-[10px] font-black uppercase tracking-[0.2em] mb-2 ${
                                    step.active ? "text-orange-600" : "text-zinc-400"
                                }`}>
                                    {step.tag}
                                </span>
                                <h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Visual Showcase Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {showcases.map((item, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-zinc-300/50 transition-all duration-500 cursor-pointer"
                                onClick={() => setSelectedImage(item.image)}
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/20 transition-colors duration-500 flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                                            <ArrowRight className="h-5 w-5 text-zinc-950 -rotate-45" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5 border-t border-zinc-50">
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-bold text-zinc-900 text-sm tracking-tight">{item.title}</h4>
                                        <span className="text-[10px] font-black text-orange-600 uppercase bg-orange-50 px-2 py-0.5 rounded-md">
                                            {item.step}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <a
                            href={APP_URLS.dashboard}
                            target="_blank"
                            className="group relative inline-flex items-center justify-center bg-[#FCD535] text-zinc-950 text-lg font-black rounded-2xl py-4 px-12 transition-all hover:scale-[1.05] hover:shadow-2xl hover:shadow-[#FCD535]/20 active:scale-95 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Crear mi tienda gratis
                                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}
