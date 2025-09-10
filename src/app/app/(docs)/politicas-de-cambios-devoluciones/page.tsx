"use client"

import Header from "@/app/home/_components/header"
import Footer from "@/app/home/_components/footer"
import { Lexend } from "next/font/google"

const lexend = Lexend({ subsets: ["latin"] })

export default function PoliticasDeCambiosDevoluciones() {
    return (
        <div className={lexend.className}>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-green-600 to-teal-600 px-8 py-12 text-white text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Políticas de Cambios y Devoluciones
                            </h1>
                            <p className="text-xl opacity-90">
                                Políticas para servicios SaaS - Versión
                                actualizada al:{" "}
                                {new Date().toLocaleDateString("es-ES", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </div>

                        <div className="px-8 py-12">
                            <div className="prose prose-gray prose-lg max-w-none space-y-8">
                                {/* Introducción */}
                                <div className="space-y-6">
                                    <p className="text-lg leading-8 text-gray-700">
                                        Como proveedor de servicios de software
                                        como servicio (SaaS) para empresas B2B,
                                        nuestras políticas de cambios y
                                        devoluciones están específicamente
                                        diseñadas para servicios digitales,
                                        suscripciones de software y herramientas
                                        empresariales en línea. Estas políticas
                                        se aplican a todos los planes de
                                        suscripción, servicios adicionales y
                                        funcionalidades premium de nuestra
                                        plataforma.
                                    </p>

                                    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg
                                                    className="h-5 w-5 text-blue-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-blue-800 font-semibold">
                                                    <strong>IMPORTANTE:</strong>{" "}
                                                    Al tratarse de servicios
                                                    digitales de software,
                                                    nuestras políticas difieren
                                                    de las aplicables a
                                                    productos físicos. Le
                                                    recomendamos leer
                                                    atentamente antes de
                                                    contratar nuestros
                                                    servicios.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-gray-200 my-12" />

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-500 pb-2">
                                        1. Naturaleza de Nuestros Servicios
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Ofrecemos dos tipos de servicios
                                        diferenciados:
                                    </p>

                                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                        <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                            📦 Servicios incluidos en planes de
                                            suscripción:
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2 text-blue-700">
                                            <li>
                                                Plataforma de dashboard
                                                empresarial administrativo
                                            </li>
                                            <li>
                                                Creación y gestión de perfiles
                                                de negocio públicos
                                            </li>
                                            <li>
                                                Almacenamiento en la nube y
                                                procesamiento de datos
                                            </li>
                                            <li>
                                                Límites de productos según el
                                                plan (ej: 15 productos en plan
                                                gratuito)
                                            </li>
                                            <li>
                                                Gestión de inventario y catálogo
                                                empresarial
                                            </li>
                                            <li>
                                                Herramientas de personalización
                                                del perfil público
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-orange-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-orange-800 mb-3">
                                            🔗 Servicios adicionales
                                            independientes:
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2 text-orange-700">
                                            <li>
                                                Herramientas de cotización de
                                                importaciones
                                            </li>
                                            <li>
                                                Servicios de rastreo de paquetes
                                                DHL
                                            </li>
                                            <li>
                                                Consultas a APIs externas de
                                                terceros
                                            </li>
                                        </ul>
                                        <p className="mt-3 text-sm text-orange-600 italic">
                                            * Estos servicios no forman parte de
                                            los planes de suscripción y están
                                            sujetos a políticas separadas.
                                        </p>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-500 pb-2">
                                        2. Política de Cancelación de
                                        Suscripciones
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Puede cancelar su suscripción en
                                        cualquier momento desde su dashboard:
                                    </p>
                                    <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
                                        <li>
                                            <strong>
                                                Cancelación inmediata:
                                            </strong>{" "}
                                            Puede cancelar desde su cuenta sin
                                            penalizaciones
                                        </li>
                                        <li>
                                            <strong>
                                                Acceso hasta el final del
                                                período:
                                            </strong>{" "}
                                            Mantendrá acceso completo hasta el
                                            final de su período de facturación
                                            actual
                                        </li>
                                        <li>
                                            <strong>
                                                Sin renovación automática:
                                            </strong>{" "}
                                            Su suscripción no se renovará
                                            automáticamente después de la
                                            cancelación
                                        </li>
                                        <li>
                                            <strong>Datos preservados:</strong>{" "}
                                            Sus datos se mantendrán disponibles
                                            por 30 días adicionales para
                                            descarga
                                        </li>
                                    </ul>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-500 pb-2">
                                        3. Política de Reembolsos
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Debido a la naturaleza digital de
                                        nuestros servicios, aplicamos las
                                        siguientes condiciones de reembolso:
                                    </p>

                                    <div className="bg-green-50 p-6 rounded-lg mb-6">
                                        <h3 className="text-xl font-semibold text-green-800 mb-3">
                                            ✅ Casos donde SÍ aplica reembolso
                                            (100%)
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2 text-green-700">
                                            <li>
                                                Fallas técnicas graves que
                                                impidan el uso del servicio por
                                                más de 48 horas
                                            </li>
                                            <li>
                                                Cobranza duplicada o errores en
                                                la facturación
                                            </li>
                                            <li>
                                                Incumplimiento de
                                                funcionalidades prometidas en el
                                                plan contratado
                                            </li>
                                            <li>
                                                Cancelación dentro de las
                                                primeras 7 días (período de
                                                prueba extendido)
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-red-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-red-800 mb-3">
                                            ❌ Casos donde NO aplica reembolso
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-2 text-red-700">
                                            <li>
                                                Cambio de opinión después del
                                                período de prueba
                                            </li>
                                            <li>
                                                Falta de uso de los servicios
                                                contratados
                                            </li>
                                            <li>
                                                Problemas de conectividad del
                                                usuario
                                            </li>
                                            <li>
                                                Cancelación después de 7 días de
                                                uso
                                            </li>
                                            <li>
                                                Servicios de terceros
                                                (cotizaciones, rastreo DHL) que
                                                dependan de APIs externas
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-500 pb-2">
                                        4. Cambios de Plan
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Facilitamos la flexibilidad en su
                                        suscripción:
                                    </p>
                                    <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
                                        <li>
                                            <strong>Upgrade:</strong> Puede
                                            cambiar a un plan superior en
                                            cualquier momento. Se aplicará un
                                            prorrateo por los días restantes del
                                            período actual.
                                        </li>
                                        <li>
                                            <strong>Downgrade:</strong> Puede
                                            cambiar a un plan inferior. El
                                            cambio será efectivo al inicio del
                                            siguiente período de facturación.
                                        </li>
                                        <li>
                                            <strong>Migración de datos:</strong>{" "}
                                            Todos sus datos se mantienen al
                                            cambiar de plan
                                        </li>
                                        <li>
                                            <strong>
                                                Sin cargos adicionales:
                                            </strong>{" "}
                                            No cobramos fees por cambios de plan
                                        </li>
                                    </ul>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-500 pb-2">
                                        5. Garantía de Disponibilidad del
                                        Servicio
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Nos comprometemos a mantener altos
                                        estándares de disponibilidad:
                                    </p>
                                    <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
                                        <li>
                                            <strong>Uptime garantizado:</strong>{" "}
                                            99.5% de disponibilidad mensual
                                        </li>
                                        <li>
                                            <strong>
                                                Mantenimientos programados:
                                            </strong>{" "}
                                            Se notificarán con 48 horas de
                                            anticipación
                                        </li>
                                        <li>
                                            <strong>
                                                Compensación por interrupciones:
                                            </strong>{" "}
                                            Créditos proporcionales al tiempo de
                                            inactividad no programado
                                        </li>
                                        <li>
                                            <strong>Soporte técnico:</strong>{" "}
                                            Disponible para resolver problemas
                                            de acceso
                                        </li>
                                    </ul>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-500 pb-2">
                                        6. Proceso de Solicitud de Reembolso
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Para solicitar un reembolso que
                                        califique según nuestras políticas:
                                    </p>
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
                                            <li>
                                                <strong>
                                                    Contacto inicial:
                                                </strong>{" "}
                                                Envíe su solicitud a través de
                                                nuestros canales oficiales
                                                (WhatsApp, Facebook, Instagram)
                                                o desde su dashboard
                                            </li>
                                            <li>
                                                <strong>Documentación:</strong>{" "}
                                                Proporcione detalles específicos
                                                del problema o situación
                                            </li>
                                            <li>
                                                <strong>Evaluación:</strong>{" "}
                                                Nuestro equipo revisará su caso
                                                en un plazo máximo de 5 días
                                                hábiles
                                            </li>
                                            <li>
                                                <strong>Resolución:</strong> Los
                                                reembolsos aprobados se
                                                procesarán en 7-14 días hábiles
                                            </li>
                                            <li>
                                                <strong>
                                                    Método de reembolso:
                                                </strong>{" "}
                                                Se realizará por el mismo método
                                                de pago utilizado originalmente
                                            </li>
                                        </ol>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-500 pb-2">
                                        7. Servicios de Terceros (No incluidos
                                        en planes)
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Los servicios de cotización de
                                        importaciones y rastreo DHL son
                                        servicios adicionales independientes que
                                        no forman parte de los planes de
                                        suscripción:
                                    </p>

                                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                                            ⚠️ Política especial para servicios
                                            de terceros:
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-3 text-yellow-700">
                                            <li>
                                                <strong>
                                                    Facturación independiente:
                                                </strong>{" "}
                                                Se cobran por separado de los
                                                planes de suscripción
                                            </li>
                                            <li>
                                                <strong>Disponibilidad:</strong>{" "}
                                                Depende de la disponibilidad de
                                                APIs externas (DHL, proveedores
                                                de cotización)
                                            </li>
                                            <li>
                                                <strong>
                                                    Sin reembolsos por
                                                    indisponibilidad:
                                                </strong>{" "}
                                                No aplicamos reembolsos por
                                                fallas de servicios externos
                                            </li>
                                            <li>
                                                <strong>
                                                    Créditos por interrupciones
                                                    prolongadas:
                                                </strong>{" "}
                                                Ofrecemos créditos cuando las
                                                interrupciones superen 72 horas
                                                continuas
                                            </li>
                                            <li>
                                                <strong>
                                                    Cancelación independiente:
                                                </strong>{" "}
                                                Se pueden cancelar sin afectar
                                                su plan de suscripción principal
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-500 pb-2">
                                        8. Protección de Datos y Límites de Plan
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Nuestro sistema de gestión de datos
                                        funciona de la siguiente manera:
                                    </p>

                                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                            📊 Límites por plan y conservación
                                            de datos:
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                            <li>
                                                <strong>Plan gratuito:</strong>{" "}
                                                Máximo 15 productos visibles (se
                                                muestran los 15 más recientes)
                                            </li>
                                            <li>
                                                <strong>
                                                    Productos excedentes:
                                                </strong>{" "}
                                                Se mantienen guardados pero
                                                ocultos hasta upgrade del plan
                                            </li>
                                            <li>
                                                <strong>
                                                    Cambio a plan superior:
                                                </strong>{" "}
                                                Todos los productos anteriores
                                                vuelven a ser visibles
                                            </li>
                                            <li>
                                                <strong>
                                                    Downgrade de plan:
                                                </strong>{" "}
                                                Solo se ocultan productos que
                                                excedan el nuevo límite (no se
                                                eliminan)
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                            🗂️ Al cancelar suscripción o
                                            solicitar reembolsos:
                                        </h3>
                                        <ul className="list-disc pl-6 space-y-3 text-blue-700">
                                            <li>
                                                <strong>
                                                    Período de gracia:
                                                </strong>{" "}
                                                30 días para descargar sus datos
                                                después de la cancelación
                                            </li>
                                            <li>
                                                <strong>
                                                    Exportación de datos:
                                                </strong>{" "}
                                                Formato estándar (JSON/CSV)
                                                disponible para TODOS los datos
                                            </li>
                                            <li>
                                                <strong>
                                                    Reversión automática:
                                                </strong>{" "}
                                                La cuenta pasa automáticamente a
                                                límites del plan gratuito
                                            </li>
                                            <li>
                                                <strong>
                                                    Datos preservados:
                                                </strong>{" "}
                                                Ningún dato se elimina, solo se
                                                aplican límites de visualización
                                            </li>
                                            <li>
                                                <strong>
                                                    Perfiles públicos:
                                                </strong>{" "}
                                                Su perfil /{"{username}"} se
                                                mantiene activo con productos
                                                del límite gratuito
                                            </li>
                                            <li>
                                                <strong>
                                                    Eliminación definitiva:
                                                </strong>{" "}
                                                Solo ocurre si solicita
                                                explícitamente la eliminación de
                                                cuenta
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-500 pb-2">
                                        9. Contacto y Soporte
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Para cualquier consulta sobre cambios,
                                        cancelaciones o reembolsos, puede
                                        contactarnos a través de nuestros
                                        canales oficiales o mediante el libro de
                                        reclamaciones disponible en nuestro
                                        sitio web. Nuestro compromiso es
                                        resolver todas las consultas en un plazo
                                        máximo de 5 días hábiles.
                                    </p>

                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h3 className="text-lg font-semibold text-green-800 mb-4">
                                            📞 Canales oficiales de contacto:
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-green-700">
                                            <div className="flex items-center space-x-2">
                                                <span className="font-semibold">
                                                    WhatsApp:
                                                </span>
                                                <span>+51 972 677 175</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className="font-semibold">
                                                    Facebook:
                                                </span>
                                                <span>@izimportcom</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className="font-semibold">
                                                    Instagram:
                                                </span>
                                                <span>@_izimport</span>
                                            </div>
                                        </div>
                                        <p className="mt-3 text-sm text-green-600 italic">
                                            * También puede contactarnos desde
                                            la sección de soporte en su
                                            dashboard empresarial.
                                        </p>
                                    </div>
                                </section>

                                <hr className="border-gray-200 my-12" />

                                <div className="text-center py-8 bg-gray-50 rounded-lg">
                                    <p className="text-gray-600">
                                        © {new Date().getFullYear()} - Todos los
                                        derechos reservados.
                                        <br />
                                        Estas políticas están específicamente
                                        diseñadas para servicios SaaS B2B y se
                                        rigen por la legislación peruana
                                        aplicable a servicios digitales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
