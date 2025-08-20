import { SignUp } from "@clerk/nextjs"
import Link from "next/link"

export default function SignUpPage() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
            <Link
                className="flex flex-col justify-center items-center gap-2 font-bold text-2xl"
                href={`${process.env.NEXT_PUBLIC_BASE_DOMAIN}`}
            >
                <img
                    className="h-16 w-16 rounded-full"
                    src="/images/logo.png"
                    alt="logo izimport.com"
                />
            </Link>
            <h2 className="text-4xl font-semibold">Crea tu cuenta</h2>
            <p className="text-lg text-gray-700">
                Regístrate para acceder a izimport.com.
            </p>
            <SignUp
                appearance={{
                    theme: "simple",
                    elements: {
                        header: "!hidden",
                    },
                }}
            />
        </section>
    )
}
