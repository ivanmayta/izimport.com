import { Plus_Jakarta_Sans } from "next/font/google"
import { Toaster } from "react-hot-toast"
const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
    display: "swap",
})
export const metadata = {
    title: "Panel de administración",
    description: "Panel de administración de izimport.com",
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className={`${jakarta.className}`}>
            {children}
            <Toaster
                toastOptions={{
                    style: {
                        textAlign: "center",
                    },
                }}
            />
        </main>
    )
}
