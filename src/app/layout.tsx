import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
    title: "izimport.com",
    description: "Crea tu tienda online y empieza a vender",
    keywords: [
        "izimport",
        "tienda online",
        "ecommerce",
        "venta online",
        "whatsapp",
        "importaciones",
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    )
}
