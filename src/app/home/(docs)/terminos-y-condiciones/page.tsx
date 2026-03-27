import Header from "@/app/home/_components/header"
import Footer from "@/app/home/_components/footer"
import { Sora } from "next/font/google"

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700", "800"] })

const sections = [
    { id: "generalidades", label: "1. Generalidades" },
    { id: "privacidad", label: "2. Privacidad" },
    { id: "cuentas", label: "3. Cuentas y Perfiles" },
    { id: "suscripcion", label: "4. Suscripción" },
    { id: "importacion", label: "5. Importación y Logística" },
    { id: "uso-aceptable", label: "6. Uso Aceptable" },
    { id: "propiedad", label: "7. Propiedad Intelectual" },
    { id: "responsabilidad", label: "8. Responsabilidad" },
    { id: "terminacion", label: "9. Terminación" },
    { id: "ley", label: "10. Ley Aplicable" },
    { id: "contacto", label: "11. Contacto" },
]

export default function TerminosYCondiciones() {
    return (
        <div className={sora.className}>
            <Header />

            {/* Content */}
            <div className="bg-white">
                <div className="max-w-6xl mx-auto px-6 pt-36 pb-16">

                    {/* Title — fuera del flex para que el TOC arranque con las secciones */}
                    <div className="mb-12 pb-12 border-b border-zinc-100">
                        <span className="inline-block text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            Legal
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tighter leading-[1.05] mb-4">
                            Términos y Condiciones
                        </h1>
                        <p className="text-zinc-400 text-base">
                            Última actualización:{" "}
                            {new Date().toLocaleDateString("es-PE", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </p>
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
                                <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
                                    <p className="text-xs text-orange-700 font-semibold leading-relaxed">
                                        Al usar izimport.com aceptas estos términos en su totalidad.
                                    </p>
                                </div>
                            </div>
                        </aside>

                        {/* Main content */}
                        <article className="flex-1 min-w-0">
                            <div className="prose prose-zinc max-w-none">
                                <p className="text-zinc-600 text-lg leading-relaxed mb-12 pb-12 border-b border-zinc-100">
                                    Estos Términos de Uso forman un acuerdo vinculante entre usted y{" "}
                                    <strong>izimport.com</strong>, plataforma SaaS B2B orientada a
                                    vendedores peruanos. Al acceder o utilizar nuestros servicios,
                                    usted acepta quedar sujeto a las siguientes condiciones.
                                </p>

                                <Section id="generalidades" number="01" title="Generalidades">
                                    <p>
                                        Usted es responsable de su uso de los Servicios, del contenido
                                        que publique y de cualquier consecuencia derivada. Nos reservamos
                                        el derecho de modificar estos Términos en cualquier momento. Si
                                        una modificación implica aumento de tarifas o restricciones, se
                                        le notificará por correo con 30 días de anticipación.
                                    </p>
                                </Section>

                                <Section id="privacidad" number="02" title="Privacidad y Protección de Datos">
                                    <p>
                                        Al usar los Servicios, usted acepta nuestra Política de Privacidad,
                                        que rige la recopilación y uso de su información. Nos comprometemos
                                        a proteger sus datos personales conforme a la normativa peruana
                                        vigente (Ley N° 29733).
                                    </p>
                                </Section>

                                <Section id="cuentas" number="03" title="Cuentas y Perfiles de Negocio">
                                    <p>Al crear una cuenta, usted se compromete a:</p>
                                    <ul>
                                        <li>Proporcionar información veraz y actualizada.</li>
                                        <li>Mantener sus credenciales de acceso seguras.</li>
                                        <li>Notificarnos inmediatamente ante cualquier uso no autorizado.</li>
                                        <li>Que su perfil en <code>/[username]</code> refleje información real de su negocio.</li>
                                        <li>No crear múltiples cuentas para evadir límites de suscripción.</li>
                                    </ul>
                                </Section>

                                <Section id="suscripcion" number="04" title="Servicios de Suscripción">
                                    <p>
                                        Operamos bajo un modelo de suscripciones con diferentes niveles de
                                        acceso. Los pagos son recurrentes según el plan elegido. Puede
                                        cancelar en cualquier momento desde su dashboard; la cancelación
                                        será efectiva al cierre del período de facturación en curso. No se
                                        emiten reembolsos por períodos parcialmente utilizados.
                                    </p>
                                </Section>

                                <Section id="importacion" number="05" title="Servicios de Importación y Logística">
                                    <p>Proporcionamos herramientas de cotización y rastreo DHL. Tenga en cuenta que:</p>
                                    <ul>
                                        <li>Las cotizaciones son estimativas; no garantizamos exactitud absoluta.</li>
                                        <li>El rastreo depende de la disponibilidad de la API de DHL Express.</li>
                                        <li>No somos responsables por retrasos o problemas en envíos de terceros.</li>
                                        <li>Debe verificar toda información con las autoridades aduaneras competentes.</li>
                                    </ul>
                                </Section>

                                <Section id="uso-aceptable" number="06" title="Uso Aceptable">
                                    <p>Al utilizar nuestros Servicios, usted se compromete a <strong>NO</strong>:</p>
                                    <ul>
                                        <li>Usar los Servicios para actividades ilegales.</li>
                                        <li>Interferir con la seguridad o funcionamiento de la plataforma.</li>
                                        <li>Compartir credenciales con terceros no autorizados.</li>
                                        <li>Extraer o usar datos de otros usuarios sin autorización.</li>
                                        <li>Publicar contenido falso, engañoso o difamatorio.</li>
                                    </ul>
                                </Section>

                                <Section id="propiedad" number="07" title="Propiedad Intelectual">
                                    <p>
                                        Los Servicios y todo su contenido son propiedad de izimport.com y
                                        están protegidos por derechos de autor y marcas. Usted retiene la
                                        propiedad del contenido que sube a su perfil, pero nos otorga una
                                        licencia no exclusiva para mostrarlo en la plataforma durante la
                                        vigencia de su cuenta.
                                    </p>
                                </Section>

                                <Section id="responsabilidad" number="08" title="Limitación de Responsabilidad">
                                    <p>
                                        En ningún caso seremos responsables por daños indirectos,
                                        incidentales, especiales o consecuenciales —incluyendo pérdida de
                                        beneficios, datos o buena voluntad— derivados del uso de los
                                        Servicios, incluyendo herramientas de importación y rastreo.
                                    </p>
                                </Section>

                                <Section id="terminacion" number="09" title="Terminación">
                                    <p>
                                        Podemos suspender o cerrar su cuenta sin previo aviso si incumple
                                        estos Términos. Al terminar, su acceso a los Servicios cesará
                                        inmediatamente. Su perfil público puede permanecer visible
                                        temporalmente durante el proceso de eliminación de datos.
                                    </p>
                                </Section>

                                <Section id="ley" number="10" title="Ley Aplicable">
                                    <p>
                                        Estos Términos se rigen por las leyes de la República del Perú.
                                        Cualquier disputa estará sujeta a la jurisdicción exclusiva de los
                                        tribunales competentes de Lima, Perú.
                                    </p>
                                </Section>

                                <Section id="contacto" number="11" title="Contacto">
                                    <p>
                                        Si tiene preguntas sobre estos Términos, contáctenos a través de
                                        los canales oficiales disponibles en nuestra plataforma o mediante
                                        el Libro de Reclamaciones disponible en este sitio.
                                    </p>
                                </Section>
                            </div>
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
            <div className="pl-8 text-zinc-600 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-zinc-600 [&_strong]:text-zinc-900 [&_code]:bg-zinc-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm">
                {children}
            </div>
            <div className="mt-8 border-b border-zinc-100" />
        </section>
    )
}
