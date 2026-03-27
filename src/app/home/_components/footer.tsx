import { Button } from "@/components/ui/button"
import { Whatsapp } from "@/icons/whatsapp"
import { Facebook, Github, Globe, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { APP_URLS, SOCIAL_URLS } from "@/config"

function Footer() {
    return (
        <>
            <footer className="bg-black text-white py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Main footer content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Logo and social media */}
                        <div className="space-y-4">
                            <Link
                                href="/"
                                className="flex  items-center gap-2 font-semibold text-2xl"
                            >
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src="/images/logo.png"
                                    alt="logo izimport.com"
                                />
                                izimport.com
                            </Link>
                            <div className="flex justify-center">
                                <Link
                                    href={SOCIAL_URLS.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-12 w-12 bg-transparent"
                                >
                                    <Whatsapp className="h-5 w-5 " />
                                </Link>
                                <Link
                                    href={SOCIAL_URLS.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-12 w-12 bg-transparent"
                                >
                                    <Instagram className="h-5 w-5 " />
                                </Link>
                                <Link
                                    href={SOCIAL_URLS.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-12 w-12 bg-transparent"
                                >
                                    <Facebook className="h-5 w-5 " />
                                </Link>

                                <Link
                                    href={SOCIAL_URLS.youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-12 w-12 bg-transparent"
                                >
                                    <Youtube className="h-5 w-5 " />
                                </Link>
                            </div>
                        </div>

                        {/* Producto column */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">
                                Productos
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:border-b-2 hover:border-white py-2 font-medium text-white"
                                    >
                                        Precios
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        className="hover:border-b-2 hover:border-white py-2 font-medium text-white"
                                        href={APP_URLS.tracking}
                                        target="_blank"
                                    >
                                        Rastrea
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:border-b-2 hover:border-white py-2 font-medium text-white"
                                        href={APP_URLS.quotes}
                                        target="_blank"
                                    >
                                        Cotiza
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Recursos column */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">
                                Legal
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href={`${APP_URLS.base}/terminos-y-condiciones`}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        Términos y Condiciones
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href={`${APP_URLS.base}/politicas-de-cambios-devoluciones`}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        Políticas de Cambios y Devoluciones
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal column */}
                        <div>
                            <h3 className="font-semibold text-lg mb-4">
                                Adicional
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href={`${APP_URLS.base}/libro-de-reclamaciones`}
                                        className="text-gray-300 hover:text-white transition-colors"
                                    >
                                        <img
                                            src="/images/libro-de-reclamaciones.png"
                                            alt="Libro de Reclamaciones"
                                            className="w-40  aspect-video rounded-sm"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                        <Button
                            variant="outline"
                            className="bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white"
                        >
                            <Globe className="h-4 w-4 mr-2" />
                            Español
                        </Button>

                        {/* Copyright */}
                        <p className="flex text-gray-400 text-sm gap-2">
                            © 2025
                            <Link
                                href="https://iverse.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex gap-1 decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline "
                            >
                                <Github className="w-4" />
                                iverse.dev
                            </Link>
                            Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
