"use client"

import { useState } from "react"
import Header from "@/app/home/_components/header"
import Footer from "@/app/home/_components/footer"
import { Sora } from "next/font/google"
import { CheckCircle2, AlertCircle } from "lucide-react"

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700", "800"] })

type FormData = {
    nombre: string
    dni: string
    email: string
    telefono: string
    tipo: "reclamo" | "queja" | ""
    producto: string
    descripcion: string
    solucion: string
}

const initialForm: FormData = {
    nombre: "",
    dni: "",
    email: "",
    telefono: "",
    tipo: "",
    producto: "",
    descripcion: "",
    solucion: "",
}

export default function LibroDeReclamaciones() {
    const [form, setForm] = useState<FormData>(initialForm)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setError("")
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const required = ["nombre", "dni", "email", "telefono", "tipo", "descripcion"] as const
        for (const field of required) {
            if (!form[field]) {
                setError("Por favor completa todos los campos obligatorios.")
                return
            }
        }
        setSubmitted(true)
    }

    return (
        <div className={sora.className}>
            <Header />

            {/* Form section */}
            <div className="bg-zinc-50 min-h-screen">
                {/* Title */}
                <div className="bg-white border-b border-zinc-100">
                    <div className="max-w-3xl mx-auto px-6 pt-36 pb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em]">Legal</span>
                            <span className="text-zinc-300 text-xs">·</span>
                            <span className="text-zinc-400 text-xs font-bold uppercase tracking-[0.15em]">INDECOPI</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tighter leading-[1.05] mb-3">
                            Libro de Reclamaciones
                        </h1>
                        <p className="text-zinc-500 text-base leading-relaxed max-w-xl">
                            De acuerdo con el Código de Protección y Defensa del Consumidor
                            (Ley N° 29571), ponemos a tu disposición este libro virtual.
                        </p>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto px-6 py-16">

                    {submitted ? (
                        <div className="bg-white rounded-2xl border border-zinc-200 p-12 text-center shadow-sm">
                            <div className="flex justify-center mb-6">
                                <div className="h-16 w-16 rounded-full bg-green-50 flex items-center justify-center">
                                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 tracking-tight mb-3">
                                Reclamación registrada
                            </h2>
                            <p className="text-zinc-500 leading-relaxed max-w-md mx-auto mb-8">
                                Hemos recibido tu {form.tipo}. Nos comunicaremos contigo en un
                                plazo máximo de <strong className="text-zinc-900">15 días hábiles</strong>{" "}
                                al correo <strong className="text-zinc-900">{form.email}</strong>.
                            </p>
                            <div className="inline-block bg-zinc-100 rounded-xl px-6 py-3 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">
                                Número de caso: #{Math.floor(Math.random() * 900000) + 100000}
                            </div>
                            <div>
                                <button
                                    onClick={() => { setSubmitted(false); setForm(initialForm) }}
                                    className="text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors underline underline-offset-4"
                                >
                                    Registrar otra reclamación
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Info banner */}
                            <div className="bg-orange-50 border border-orange-100 rounded-xl px-5 py-4 flex gap-3">
                                <AlertCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-orange-800 leading-relaxed">
                                    Todos los campos marcados con <span className="font-bold">*</span> son obligatorios.
                                    Tu reclamación será atendida en un plazo máximo de 15 días hábiles.
                                </p>
                            </div>

                            {/* Personal data */}
                            <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm space-y-6">
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                                    Datos del reclamante
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <Field label="Nombre completo *" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Juan Pérez García" />
                                    <Field label="DNI *" name="dni" value={form.dni} onChange={handleChange} placeholder="12345678" maxLength={8} />
                                    <Field label="Correo electrónico *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="juan@email.com" />
                                    <Field label="Teléfono *" name="telefono" value={form.telefono} onChange={handleChange} placeholder="987654321" />
                                </div>
                            </div>

                            {/* Claim data */}
                            <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm space-y-6">
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                                    Detalle de la reclamación
                                </h2>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-zinc-700">
                                        Tipo de registro *
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {(["reclamo", "queja"] as const).map((tipo) => (
                                            <label
                                                key={tipo}
                                                className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 cursor-pointer transition-all ${
                                                    form.tipo === tipo
                                                        ? "border-orange-500 bg-orange-50"
                                                        : "border-zinc-200 hover:border-zinc-300"
                                                }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="tipo"
                                                    value={tipo}
                                                    checked={form.tipo === tipo}
                                                    onChange={handleChange}
                                                    className="sr-only"
                                                />
                                                <span className={`h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                                                    form.tipo === tipo ? "border-orange-500" : "border-zinc-300"
                                                }`}>
                                                    {form.tipo === tipo && (
                                                        <span className="h-2 w-2 rounded-full bg-orange-500 block" />
                                                    )}
                                                </span>
                                                <div>
                                                    <p className="text-sm font-bold text-zinc-900 capitalize">{tipo}</p>
                                                    <p className="text-[10px] text-zinc-500">
                                                        {tipo === "reclamo" ? "Producto o servicio insatisfactorio" : "Mala atención o trato"}
                                                    </p>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <Field label="Producto o servicio involucrado" name="producto" value={form.producto} onChange={handleChange} placeholder="Ej: Zapatillas Nike Air Max - Tienda ejemplo" />

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-zinc-700">
                                        Descripción del problema *
                                    </label>
                                    <textarea
                                        name="descripcion"
                                        value={form.descripcion}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Describe con detalle qué ocurrió, cuándo y cómo."
                                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all resize-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-bold text-zinc-700">
                                        Solución esperada
                                    </label>
                                    <textarea
                                        name="solucion"
                                        value={form.solucion}
                                        onChange={handleChange}
                                        rows={3}
                                        placeholder="¿Qué solución esperas de nosotros?"
                                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className="flex items-center gap-2 text-red-600 text-sm font-medium">
                                    <AlertCircle className="h-4 w-4 shrink-0" />
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full bg-zinc-950 text-white font-black py-4 rounded-xl hover:bg-zinc-800 active:scale-[0.99] transition-all text-sm uppercase tracking-widest shadow-lg shadow-zinc-950/10"
                            >
                                Enviar reclamación
                            </button>

                            <p className="text-center text-xs text-zinc-400 leading-relaxed">
                                Al enviar, confirmas que la información proporcionada es verídica.
                                Este registro queda guardado conforme al Código de Protección del Consumidor — Ley N° 29571.
                            </p>
                        </form>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
    maxLength,
}: {
    label: string
    name: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    type?: string
    maxLength?: number
}) {
    return (
        <div className="space-y-2">
            <label htmlFor={name} className="block text-sm font-bold text-zinc-700">
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all"
            />
        </div>
    )
}
