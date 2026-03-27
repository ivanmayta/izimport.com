import { NEXT_PUBLIC_APP_URL, NEXT_PUBLIC_BASE_DOMAIN } from "@/config"
import { ArrowRight, Sparkles } from "lucide-react"
import { Whatsapp } from "@/icons/whatsapp"

function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/5 via-white to-transparent"></div>
            <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            
            <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
                {/* Left Content - More space (3/5) */}
                <div className="lg:w-[60%] text-center lg:text-left relative z-10 animate-in fade-in slide-in-from-left-8 duration-1000">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-[10px] md:text-xs font-bold tracking-wider uppercase mb-8 shadow-sm">
                        <Sparkles className="h-3 w-3 text-orange-500" />
                        <span>La forma más rápida de vender online</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-zinc-950 leading-[1.1] tracking-tight mb-8">
                        Tu catálogo online,{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text font-black">
                                listo hoy.
                            </span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-orange-500/10 -rotate-1 -z-10"></span>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl font-medium text-zinc-600 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                        Crea tu tienda en minutos, comparte tu link y recibe pedidos organizados directamente en tu WhatsApp. Sin comisiones.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start">
                        <a
                            href={`${NEXT_PUBLIC_APP_URL}`}
                            target="_blank"
                            className="group relative inline-flex items-center justify-center bg-zinc-950 text-white text-lg font-bold rounded-2xl py-4 px-10 transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/20 active:scale-95"
                        >
                            ¡Empezar ahora!
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href={`${NEXT_PUBLIC_BASE_DOMAIN}/izimport`}
                            target="_blank"
                            className="inline-flex items-center justify-center text-zinc-500 font-bold text-base px-8 py-4 hover:text-zinc-950 transition-all"
                        >
                            Ver ejemplo
                        </a>
                    </div>
                </div>

                {/* Right Image / Mockup Area - Less space (2/5) */}
                <div className="lg:w-[40%] relative animate-in fade-in zoom-in duration-1000 delay-300">
                    <div className="relative group">
                        {/* Decorative circle backdrop */}
                        <div className="absolute -inset-10 -z-10 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
                        
                        {/* Browser Mockup - Restored style with 1:1 aspect ratio */}
                        <div className="relative mx-auto max-w-[480px] bg-white rounded-3xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-zinc-200 ring-1 ring-black/5 rotate-2 group-hover:rotate-0 transition-all duration-700 overflow-hidden">
                            <div className="bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 aspect-square">
                                <img
                                    alt="Vista previa de tu catálogo"
                                    className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                                    src="/images/main.png"
                                />
                            </div>
                        </div>

                        {/* Floating Glass Badges - Restored both */}
                        <div className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-md border border-white/50 px-4 py-3 rounded-2xl shadow-xl flex flex-col gap-1 -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-110">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Status</span>
                            </div>
                            <span className="text-xs font-black text-zinc-900 leading-none">Tienda Activa</span>
                        </div>

                        <div className="absolute -bottom-10 -left-6 bg-white/80 backdrop-blur-md border border-white/50 px-5 py-4 rounded-2xl shadow-xl flex flex-col gap-1 rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-110">
                            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Recibe Pedidos</span>
                            <div className="flex items-center gap-2">
                                <Whatsapp className="h-4 w-4 text-[#25D366]" />
                                <span className="text-xs font-black text-zinc-900 leading-none">Vía WhatsApp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
