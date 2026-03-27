import "./styles.css"
import StoreHydration from "./_store/StoreHydration"

export default function BusinessLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <body>
                <StoreHydration />
                <div className="business-layout">{children}</div>
            </body>
        </html>
    )
}
