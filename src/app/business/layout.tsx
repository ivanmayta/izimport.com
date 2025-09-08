import "./styles.css"

export default function BusinessLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body className="business-layout">{children}</body>
        </html>
    )
}
