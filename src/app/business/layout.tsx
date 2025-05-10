export default function BusinessLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h1>Business Layout</h1>
            <p>This is the business layout.</p>
            {children}
        </div>
    )
}
