import Header from "@/components/sections/header"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export default function MainLayout({ children }) {
    return (
        <>
            <main className={`${inter.className}`} suppressHydrationWarning>
                <Header />
                {children}
                <Toaster
                    toastOptions={{
                        style: {
                            textAlign: "center",
                        },
                    }}
                />
            </main>
        </>
    )
}
