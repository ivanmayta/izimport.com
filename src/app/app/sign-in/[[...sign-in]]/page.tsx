"use client"

import { SignIn } from "@clerk/nextjs"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Whatsapp as WhatsappIcon } from "@/icons/whatsapp"
import { APP_URLS } from "@/config"

function LoginSkeleton() {
    return (
        <div className="w-full max-w-md animate-pulse">
            <div className="bg-white rounded-[2rem] shadow-2xl p-10 space-y-8 border border-zinc-100">
                <div className="h-4 bg-zinc-100 rounded-full w-32"></div>
                <div className="h-14 bg-zinc-50 rounded-2xl"></div>
                <div className="h-14 bg-zinc-50 rounded-2xl"></div>
                <div className="h-14 bg-zinc-100 rounded-2xl w-full"></div>
            </div>
        </div>
    )
}

export default function Page() {
    return (
        <section className="min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden font-sans">
            {/* Left Side: Solid Brand Panel */}
            <div className="hidden lg:flex lg:w-[45%] bg-zinc-950 relative p-16 flex-col justify-between border-r border-zinc-800">
                <Link href={APP_URLS.base} className="relative z-10 flex items-center gap-3 group">
                    <img
                        src="/images/logo.png"
                        alt="logo izimport"
                        className="h-10 w-10 rounded-xl border border-white/10 transition-transform group-hover:scale-110"
                    />
                    <span className="text-white text-xl font-black tracking-tighter">izimport</span>
                </Link>

                <div className="relative z-10 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                            Tus ventas, <br/>
                            <span className="text-orange-500">más organizadas.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg font-medium leading-relaxed max-w-sm">
                            Accede a tu panel y gestiona tu catálogo para recibir pedidos directamente en tu WhatsApp.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 py-6 border-y border-white/5">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-10 w-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden">
                                    <img src={`/images/perfil.png`} alt="" className="h-full w-full object-cover opacity-80" />
                                </div>
                            ))}
                        </div>
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">
                            +1,000 tiendas activas hoy
                        </p>
                    </div>
                </div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 text-zinc-600">
                        <WhatsappIcon className="h-5 w-5 opacity-30" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Workflow optimizado</span>
                    </div>
                </div>
            </div>

            {/* Right Side: Clean Form Container */}
            <div className="flex-1 bg-white flex flex-col items-center justify-center p-8 lg:p-12 relative">
                <a 
                    href={APP_URLS.base} 
                    className="absolute top-8 left-8 lg:left-auto lg:right-16 group flex items-center gap-2 text-zinc-400 hover:text-zinc-950 transition-colors font-bold text-xs tracking-tight uppercase"
                >
                    <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
                    Volver a inicio
                </a>

                <div className="w-full max-w-md space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-black text-zinc-950 tracking-tighter text-center lg:text-left">Inicia sesión</h1>
                        <p className="text-zinc-500 font-medium text-sm text-center lg:text-left text-balance">Gestiona tu tienda y aumenta tus pedidos.</p>
                    </div>

                    <div className="flex justify-center relative">
                        <SignIn
                            fallback={<LoginSkeleton />}
                            appearance={{
                                elements: {
                                    rootBox: "w-full",
                                    card: "shadow-none border-none p-0 w-full bg-transparent",
                                    header: "hidden",
                                    socialButtonsBlockButton: "rounded-2xl border-zinc-200 hover:bg-zinc-50 transition-all font-bold text-zinc-700 h-12",
                                    formButtonPrimary: "bg-zinc-950 hover:bg-zinc-800 rounded-2xl py-4 text-base font-black shadow-xl shadow-zinc-950/10 transition-all active:scale-95",
                                    formFieldInput: "rounded-2xl border-zinc-200 focus:border-orange-500 focus:ring-orange-500/10 py-3.5 transition-all bg-zinc-50/50",
                                    footerActionLink: "text-orange-600 hover:text-orange-700 font-bold",
                                    formFieldLabel: "text-zinc-500 font-bold uppercase text-[10px] tracking-widest mb-1",
                                    identityPreviewText: "text-zinc-900 font-bold",
                                    formResendCodeLink: "text-orange-600 hover:text-orange-700 font-bold",
                                    formFieldInputShowPasswordButton: "text-zinc-400 hover:text-orange-600",
                                    dividerLine: "bg-zinc-100",
                                    dividerText: "text-zinc-400 font-bold text-[10px] uppercase",
                                },
                                layout: {
                                    socialButtonsPlacement: "bottom",
                                    shimmer: true
                                }
                            }}
                        />
                    </div>

                    <p className="text-[10px] text-zinc-400 font-medium text-center leading-relaxed opacity-70">
                        Al entrar, confirmas que aceptas nuestros <br/>
                        <Link href={`${APP_URLS.base}/terminos-y-condiciones`} target="_blank" className="text-zinc-950 hover:text-orange-600 underline underline-offset-4 decoration-zinc-200 transition-colors">Términos</Link> y <Link href={`${APP_URLS.base}/politicas-de-cambios-devoluciones`} target="_blank" className="text-zinc-950 hover:text-orange-600 underline underline-offset-4 decoration-zinc-200 transition-colors">Privacidad</Link>.
                    </p>
                </div>
            </div>
        </section>
    )
}
