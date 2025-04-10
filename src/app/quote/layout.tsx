export default function QuoteLayout({ children }) {
    return (
        <html lang="es" suppressHydrationWarning>
            <h1>Hello</h1>
            <body className="flex min-h-screen w-full flex-col">
                {children}
            </body>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                harum culpa saepe quibusdam similique delectus voluptates
                impedit atque necessitatibus ea assumenda beatae consequuntur
                veritatis fuga, quis quae quo nostrum commodi.
            </p>
        </html>
    )
}
