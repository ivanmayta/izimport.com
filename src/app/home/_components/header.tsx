import Link from "next/link"
import { APP_URLS } from "@/config"

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 flex flex-col items-center gap-2">
            {/* Promo banner integrated above the main nav */}
            <div className="w-full max-w-5xl bg-zinc-950 text-white py-1.5 px-4 rounded-full text-center text-[10px] md:text-xs tracking-wide uppercase font-medium animate-in slide-in-from-top-4 duration-700">
                <span className="opacity-70 tracking-widest">🚀 ¿Vendes por WhatsApp?</span>{" "}
                <a
                    href={`${APP_URLS.dashboard}`}
                    className="font-bold text-orange-500 hover:text-orange-400 transition-colors"
                >
                    Crea tu tienda GRATIS aquí →
                </a>
            </div>

            <div className="w-full max-w-7xl mx-auto">
                <nav className="flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-xl border border-zinc-200/50 rounded-2xl shadow-sm transition-all hover:shadow-md hover:border-zinc-300/50">
                    <div className="flex items-center gap-10">
                        <Link
                            className="flex items-center gap-2 font-black text-xl tracking-tighter text-zinc-900 group"
                            href="/"
                        >
                            <img
                                className="h-8 w-8 rounded-full border border-zinc-200 transition-transform group-hover:scale-110"
                                src="/images/logo.png"
                                alt="logo izimport"
                            />
                            <span>izimport</span>
                        </Link>
                        
                        <div className="hidden md:flex items-center gap-8 border-l border-zinc-200 pl-8">
                            <Link
                                className="text-sm font-semibold text-zinc-500 hover:text-orange-600 transition-colors"
                                href={APP_URLS.tracking}
                                target="_blank"
                            >
                                Rastrear
                            </Link>
                            <Link
                                className="text-sm font-semibold text-zinc-500 hover:text-orange-600 transition-colors"
                                href={APP_URLS.quotes}
                                target="_blank"
                            >
                                Cotizar
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            className="hidden sm:inline-flex text-sm font-bold text-zinc-500 hover:text-zinc-950 transition-colors"
                            href={`${APP_URLS.dashboard}`}
                        >
                            Entrar
                        </Link>
                        <Link
                            className="inline-flex items-center px-6 py-2.5 text-sm font-black bg-[#FCD535] text-zinc-950 rounded-xl transition-all hover:bg-orange-400 hover:text-white hover:scale-[1.03] shadow-lg shadow-orange-500/10 active:scale-[0.98]"
                            href={`${APP_URLS.dashboard}`}
                        >
                            Crear tienda gratis
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
