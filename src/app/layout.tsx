import "./globals.css"
export const metadata = {
    title: "izimport.com",
    description: "Cotiza y rastrea tus envios de forma rapida y sencilla",
}

export default function RootLayout({ children }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className="flex min-h-screen w-full flex-col">
                {children}
            </body>
        </html>
    )
}
