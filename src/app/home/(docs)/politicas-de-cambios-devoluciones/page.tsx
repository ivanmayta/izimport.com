import Header from "@/app/home/_components/header"
import Footer from "@/app/home/_components/footer"
import { Sora } from "next/font/google"

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700", "800"] })

const sections = [
    { id: "alcance", label: "1. Alcance" },
    { id: "proceso", label: "2. Proceso" },
    { id: "plazos", label: "3. Plazos" },
    { id: "condiciones", label: "4. Condiciones" },
    { id: "exclusiones", label: "5. Exclusiones" },
    { id: "contacto", label: "6. Contacto" },
]

const steps = [
    {
        step: "01",
        title: "Solicitud",
        desc: "Contacta al vendedor directamente vía WhatsApp dentro del plazo establecido.",
    },
    {
        step: "02",
        title: "Revisión",
        desc: "El vendedor evalúa la solicitud y confirma si aplica la política dentro de 48 horas.",
    },
    {
        step: "03",
        title: "Coordinación",
        desc: "Se coordina la devolución o cambio del producto según lo acordado.",
    },
    {
        step: "04",
        title: "Resolución",
        desc: "Se completa el cambio o devolución conforme a los términos pactados.",
    },
]

export default function PoliticasCambiosDevoluciones() {
    return (
        <div className={sora.className}>
            <Header />

            {/* Content */}
            <div className="bg-white">
                <div className="max-w-6xl mx-auto px-6 pt-36 pb-16">

                    {/* Title — fuera del flex */}
                    <div className="mb-8 pb-8 border-b border-zinc-100">
                        <span className="inline-block text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            Legal
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tighter leading-[1.05] mb-4">
                            Políticas de Cambios y Devoluciones
                        </h1>
                        <p className="text-zinc-400 text-base mb-8">
                            Última actualización:{" "}
                            {new Date().toLocaleDateString("es-PE", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
                        {/* Steps — integrados bajo el título */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                            {steps.map((s, i) => (
                                <div key={i} className="flex flex-col gap-1.5">
                                    <span className="text-orange-500 text-xs font-black tracking-widest">
                                        {s.step}
                                    </span>
                                    <h3 className="text-zinc-900 font-bold text-sm">{s.title}</h3>
                                    <p className="text-zinc-500 text-xs leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-16">

                        {/* Sticky TOC — arranca junto a la primera sección */}
                        <aside className="hidden lg:block w-64 shrink-0">
                            <div className="sticky top-36">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                                    Contenido
                                </p>
                                <nav className="flex flex-col gap-1">
                                    {sections.map((s) => (
                                        <a
                                            key={s.id}
                                            href={`#${s.id}`}
                                            className="text-sm text-zinc-500 hover:text-orange-600 hover:translate-x-1 transition-all py-1 font-medium"
                                        >
                                            {s.label}
                                        </a>
                                    ))}
                                </nav>
                                <div className="mt-8 p-4 bg-zinc-950 rounded-xl">
                                    <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                                        Esta política aplica a productos vendidos a través de tiendas en izimport.com.
                                    </p>
                                </div>
                            </div>
                        </aside>

                        {/* Main content */}
                        <article className="flex-1 min-w-0">
                            <div className="text-zinc-600 text-lg leading-relaxed mb-12 pb-12 border-b border-zinc-100 border-dashed">
                                Esta política regula los procesos de cambios y devoluciones de productos
                                comercializados a través de las tiendas creadas en{" "}
                                <strong className="text-zinc-900">izimport.com</strong>. Cada vendedor
                                es responsable de cumplir con esta política frente a sus compradores.
                            </div>

                            <Section id="alcance" number="01" title="Alcance de la Política">
                                <p>
                                    Esta política aplica a todos los productos vendidos mediante tiendas
                                    activas en izimport.com. Los vendedores que utilizan la plataforma
                                    se comprometen a respetar estos lineamientos como parte de los
                                    Términos y Condiciones del servicio.
                                </p>
                                <p>
                                    Los compradores tienen derecho a solicitar un cambio o devolución
                                    cuando el producto recibido no corresponda a lo publicado en la
                                    tienda o presente defectos de fábrica.
                                </p>
                            </Section>

                            <Section id="proceso" number="02" title="Proceso de Cambio o Devolución">
                                <p>Para iniciar un proceso de cambio o devolución:</p>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>Contactar directamente al vendedor vía WhatsApp con foto/video del producto.</li>
                                    <li>Indicar el motivo: producto defectuoso, no corresponde a la descripción, o daño en tránsito.</li>
                                    <li>Aguardar confirmación del vendedor dentro de 48 horas hábiles.</li>
                                    <li>Coordinar la logística de devolución según lo acordado.</li>
                                </ol>
                            </Section>

                            <Section id="plazos" number="03" title="Plazos">
                                <ul>
                                    <li><strong>Producto defectuoso:</strong> 7 días calendario desde la recepción.</li>
                                    <li><strong>Producto no corresponde a descripción:</strong> 5 días calendario desde la recepción.</li>
                                    <li><strong>Cambio voluntario:</strong> a criterio del vendedor, no obligatorio.</li>
                                    <li><strong>Respuesta del vendedor:</strong> máximo 48 horas hábiles.</li>
                                </ul>
                            </Section>

                            <Section id="condiciones" number="04" title="Condiciones para Cambios y Devoluciones">
                                <p>El producto debe ser devuelto en las siguientes condiciones:</p>
                                <ul>
                                    <li>En su empaque original o con embalaje equivalente.</li>
                                    <li>Sin uso, a menos que el defecto haya sido detectado durante el primer uso.</li>
                                    <li>Con todos sus accesorios, manuales y componentes originales.</li>
                                    <li>Con el comprobante de compra o captura de la transacción.</li>
                                </ul>
                            </Section>

                            <Section id="exclusiones" number="05" title="Exclusiones">
                                <p>No aplica la política de cambios y devoluciones en los siguientes casos:</p>
                                <ul>
                                    <li>Productos con daños causados por mal uso del comprador.</li>
                                    <li>Productos modificados o intervenidos después de la entrega.</li>
                                    <li>Solicitudes fuera del plazo establecido.</li>
                                    <li>Productos de higiene personal abiertos o usados.</li>
                                    <li>Productos digitales o de descarga inmediata.</li>
                                </ul>
                            </Section>

                            <Section id="contacto" number="06" title="Contacto">
                                <p>
                                    Para disputas no resueltas directamente con el vendedor, puede
                                    contactarnos a través del Libro de Reclamaciones disponible en este
                                    sitio o mediante nuestros canales oficiales. Actuaremos como
                                    mediadores en conflictos entre compradores y vendedores de la
                                    plataforma.
                                </p>
                            </Section>
                        </article>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

function Section({
    id,
    number,
    title,
    children,
}: {
    id: string
    number: string
    title: string
    children: React.ReactNode
}) {
    return (
        <section id={id} className="mb-12 scroll-mt-36">
            <div className="flex items-start gap-4 mb-4">
                <span className="text-[10px] font-black text-orange-500 tracking-widest mt-1.5 shrink-0">
                    {number}
                </span>
                <h2 className="text-xl font-bold text-zinc-900 tracking-tight">{title}</h2>
            </div>
            <div className="pl-8 text-zinc-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_li]:text-zinc-600 [&_strong]:text-zinc-900">
                {children}
            </div>
            <div className="mt-8 border-b border-zinc-100" />
        </section>
    )
}
