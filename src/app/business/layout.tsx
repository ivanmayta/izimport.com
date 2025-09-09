import "./styles.css"

export default function BusinessLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body>
                <div className="business-layout">{children}</div>
            </body>
        </html>
    )
}
