import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col gap-2 items-center justify-center h-screen">
            <Image unoptimized src="/images/logo.png" alt="Not Found" width={100} height={100} />
            <h2 className="text-2xl font-bold">Pagina no encontrada</h2>
            <p className="text-sm text-gray-500">
                El perfil que buscas no existe
            </p>
            <Link
                href="/"
                className="text-sm text-white border px-4 py-2 rounded-md bg-black flex items-center gap-2"
            >
                <ArrowLeft className="w-4 h-4" />
                Volver a la pagina principal
            </Link>
        </div>
    )
}
