"use client"

import Header from "@/app/home/_components/header"
import Footer from "@/app/home/_components/footer"
import { Lexend } from "next/font/google"

const lexend = Lexend({ subsets: ["latin"] })

export default function TerminosYCondiciones() {
    return (
        <div className={lexend.className}>
            <Header />
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Términos y Condiciones
                            </h1>
                            <p className="text-xl opacity-90">
                                Versión actualizada al:{" "}
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
                                        Estos términos de uso (el
                                        &ldquo;Acuerdo&rdquo;,
                                        &ldquo;Términos&rdquo; o
                                        &ldquo;TOS&rdquo;) forman un acuerdo
                                        vinculante entre usted como usuario
                                        (&ldquo;usted&rdquo; o &ldquo;su&rdquo;)
                                        y nuestra plataforma de comercio
                                        electrónico B2B
                                        (&ldquo;Plataforma&rdquo;,
                                        &ldquo;Compañía&rdquo;,
                                        &ldquo;nosotros&rdquo; o
                                        &ldquo;nos&rdquo;) y será el equivalente
                                        de un acuerdo escrito en papel entre
                                        usted y nosotros. La fecha efectiva de
                                        este Acuerdo es cuando usted acepta o se
                                        considera que acepta este Acuerdo como
                                        se indica a continuación.
                                    </p>

                                    <p className="text-lg leading-8 text-gray-700">
                                        Las presentes Condiciones se aplican al
                                        uso que usted haga de nuestros servicios
                                        y del software proporcionado en nuestro
                                        sitio web, nuestras aplicaciones móviles
                                        (la &ldquo;Aplicación&rdquo;) y
                                        cualesquiera servicios, contenidos,
                                        comunicaciones y funciones de productos
                                        relacionados con el Sitio y la
                                        Aplicación, incluyendo pero no limitado
                                        a: dashboards empresariales, perfiles de
                                        negocio, cotización de importaciones,
                                        rastreo de paquetes DHL, y servicios de
                                        suscripción (junto con el Sitio y la
                                        Aplicación, los
                                        &ldquo;Servicios&rdquo;).
                                    </p>

                                    <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8 rounded-r-lg">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <svg
                                                    className="h-5 w-5 text-amber-400"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-amber-800 font-semibold">
                                                    <strong>
                                                        NOTA IMPORTANTE:
                                                    </strong>{" "}
                                                    ESTAS CONDICIONES CONTIENEN
                                                    UNA DISPOSICIÓN DE ARBITRAJE
                                                    VINCULANTE CON RENUNCIA A
                                                    ACCIONES COLECTIVAS. LEA LA
                                                    SECCIÓN 23 ANTES DE UTILIZAR
                                                    NUESTROS SERVICIOS.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-lg leading-8 text-gray-700">
                                        Nos reservamos el derecho a modificar
                                        estas Condiciones en cualquier momento y
                                        por cualquier motivo. Por favor, revise
                                        estos Términos regularmente para
                                        asegurarse de que está al tanto de
                                        cualquier modificación realizada por
                                        nosotros. Si una modificación de
                                        nuestras Condiciones supone un aumento
                                        de las tarifas de suscripción, un
                                        incremento de la responsabilidad de
                                        nuestros usuarios, o limitaciones más
                                        estrictas en los servicios, se le
                                        notificará por correo electrónico 30
                                        días antes de la fecha de entrada en
                                        vigor. Al continuar accediendo o
                                        utilizando los Servicios después de que
                                        dichas revisiones entren en vigor, usted
                                        acepta quedar vinculado por las
                                        Condiciones revisadas.
                                    </p>
                                </div>

                                <hr className="border-gray-200 my-12" />

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        1. Generalidades
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700">
                                        Sujeto a los términos de este Acuerdo,
                                        usted es responsable de su uso de los
                                        Servicios, y de cualquier información,
                                        contenido, informes, datos, bases de
                                        datos, gráficos, interfaces, páginas
                                        web, texto, archivos, software, nombres
                                        de productos, nombres de empresas,
                                        marcas comerciales, logotipos y nombres
                                        comerciales (colectivamente, el
                                        &ldquo;Contenido&rdquo;) que publique en
                                        los Servicios, cualquier Contenido al
                                        que acceda desde los Servicios, y de
                                        cualquier consecuencia de los mismos.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        2. Privacidad y Protección de Datos
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700">
                                        Al acceder o utilizar los Servicios,
                                        usted tiene la intención y acepta
                                        expresamente quedar vinculado por todos
                                        los términos y condiciones del presente
                                        Acuerdo y nuestra Política de
                                        Privacidad. Cualquier información que
                                        nos proporcione está sujeta a la
                                        Política de Privacidad, que rige nuestra
                                        recopilación y uso de su información.
                                        Usted entiende que a través de su uso de
                                        los Servicios da su consentimiento a la
                                        recopilación y uso de su información
                                        como se establece en la Política de
                                        Privacidad.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        3. Cuentas y Perfiles de Negocio
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Los Servicios requieren que usted cree
                                        una cuenta para acceder a
                                        funcionalidades como el dashboard
                                        empresarial y la creación de perfiles de
                                        negocio. Al crear una cuenta, usted
                                        acepta que:
                                    </p>
                                    <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
                                        <li>
                                            Toda la información que proporcione
                                            será verdadera y exacta
                                        </li>
                                        <li>
                                            Tiene la autoridad legal para crear
                                            la cuenta y vincular su negocio
                                        </li>
                                        <li>
                                            Es responsable de mantener la
                                            información de su cuenta segura y
                                            confidencial
                                        </li>
                                        <li>
                                            Su perfil de negocio en /
                                            {"{username}"} reflejará información
                                            veraz de su empresa
                                        </li>
                                        <li>
                                            Se compromete a informarnos
                                            inmediatamente si sospecha que su
                                            cuenta se ha visto comprometida
                                        </li>
                                    </ul>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        4. Servicios de Suscripción
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Nuestra plataforma opera bajo un modelo
                                        de suscripciones que proporciona
                                        diferentes niveles de acceso y
                                        beneficios:
                                    </p>
                                    <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
                                        <li>
                                            Los planes de suscripción determinan
                                            el nivel de acceso a funcionalidades
                                            premium
                                        </li>
                                        <li>
                                            Los pagos de suscripción son
                                            recurrentes según el plan
                                            seleccionado
                                        </li>
                                        <li>
                                            Puede cambiar o cancelar su
                                            suscripción en cualquier momento
                                            desde su dashboard
                                        </li>
                                        <li>
                                            La cancelación será efectiva al
                                            final del período de facturación
                                            actual
                                        </li>
                                        <li>
                                            No se proporcionan reembolsos por
                                            períodos de suscripción parcialmente
                                            utilizados
                                        </li>
                                    </ul>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        5. Servicios de Importación y Logística
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Proporcionamos herramientas para
                                        cotización de importaciones y rastreo de
                                        paquetes DHL. En relación a estos
                                        servicios:
                                    </p>
                                    <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
                                        <li>
                                            Las cotizaciones son estimativas
                                            basadas en información proporcionada
                                            por terceros
                                        </li>
                                        <li>
                                            No garantizamos la exactitud
                                            absoluta de las cotizaciones de
                                            importación
                                        </li>
                                        <li>
                                            El rastreo de DHL depende de la
                                            disponibilidad de la API de terceros
                                        </li>
                                        <li>
                                            No somos responsables por retrasos o
                                            problemas en envíos gestionados por
                                            terceros
                                        </li>
                                        <li>
                                            Debe verificar toda información de
                                            importación con las autoridades
                                            competentes
                                        </li>
                                    </ul>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        6. Elegibilidad y Usuarios Autorizados
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700">
                                        Usted puede proporcionar acceso a los
                                        Servicios a otros usuarios de su
                                        organización según lo autoricemos
                                        nosotros y/o su nivel de suscripción
                                        vigente (cada uno de ellos, un
                                        &ldquo;Usuario Autorizado&rdquo;). Usted
                                        es el único responsable de las
                                        actividades de los Usuarios Autorizados
                                        y de su interacción con los Servicios.
                                        Se compromete a asegurarse de que todos
                                        los Usuarios Autorizados conocen todas
                                        las restricciones de uso de estas
                                        Condiciones.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        7. Uso Aceptable
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700 mb-6">
                                        Al utilizar nuestros Servicios, usted se
                                        compromete a NO:
                                    </p>
                                    <ul className="list-disc pl-8 space-y-3 text-lg text-gray-700">
                                        <li>
                                            Utilizar los Servicios para
                                            actividades ilegales o no
                                            autorizadas
                                        </li>
                                        <li>
                                            Interferir con la seguridad o
                                            funcionalidad de los Servicios
                                        </li>
                                        <li>
                                            Crear múltiples cuentas para evadir
                                            limitaciones de suscripción
                                        </li>
                                        <li>
                                            Compartir credenciales de acceso con
                                            terceros no autorizados
                                        </li>
                                        <li>
                                            Extraer o usar indebidamente datos
                                            de otros usuarios o empresas
                                        </li>
                                    </ul>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        8. Propiedad Intelectual
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700">
                                        Los Servicios y todo el contenido,
                                        características y funcionalidad son
                                        propiedad nuestra y están protegidos por
                                        derechos de autor, marcas comerciales y
                                        otras leyes de propiedad intelectual.
                                        Usted mantiene la propiedad del
                                        contenido que sube a su perfil de
                                        negocio, pero nos otorga una licencia
                                        para mostrarlo en la plataforma.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        9. Limitación de Responsabilidad
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700">
                                        En ningún caso seremos responsables por
                                        daños indirectos, incidentales,
                                        especiales, consecuenciales o punitivos,
                                        incluyendo sin limitación, pérdida de
                                        beneficios, datos, uso, buena voluntad u
                                        otras pérdidas intangibles, resultantes
                                        de su uso de los Servicios, incluyendo
                                        servicios de importación y rastreo de
                                        paquetes.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        10. Terminación
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700">
                                        Podemos terminar o suspender su cuenta
                                        inmediatamente, sin previo aviso o
                                        responsabilidad, por cualquier motivo,
                                        incluyendo sin limitación si usted
                                        incumple los Términos. Al terminar, su
                                        derecho a usar los Servicios cesará
                                        inmediatamente. Su perfil de negocio
                                        público puede permanecer visible
                                        temporalmente durante el proceso de
                                        eliminación.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        11. Ley Aplicable
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700">
                                        Estos Términos se regirán e
                                        interpretarán de acuerdo con las leyes
                                        del Perú, sin tener en cuenta sus
                                        disposiciones sobre conflicto de leyes.
                                        Cualquier disputa legal relacionada con
                                        estos Términos estará sujeta a la
                                        jurisdicción exclusiva de los tribunales
                                        competentes del Perú.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
                                        12. Contacto
                                    </h2>
                                    <p className="text-lg leading-8 text-gray-700">
                                        Si tiene preguntas sobre estos Términos
                                        y Condiciones, puede contactarnos a
                                        través de los canales oficiales
                                        disponibles en nuestra plataforma o
                                        mediante el libro de reclamaciones
                                        disponible en nuestro sitio web.
                                    </p>
                                </section>

                                <hr className="border-gray-200 my-12" />

                                <div className="text-center py-8 bg-gray-50 rounded-lg">
                                    <p className="text-gray-600">
                                        © {new Date().getFullYear()} - Todos los
                                        derechos reservados.
                                        <br />
                                        Estos términos están adaptados
                                        específicamente para nuestra plataforma
                                        B2B de comercio electrónico.
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
