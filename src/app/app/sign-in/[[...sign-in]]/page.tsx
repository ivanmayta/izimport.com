import { SignIn } from "@clerk/nextjs"
import Link from "next/link"

export default function Page() {
    return (
        <>
            <section className="flex flex-col  h-screen bg-gray-100 space-y-4">
                <div className="h-full flex flex-col items-center justify-center space-y-4 ">
                    <Link href={`${process.env.NEXT_PUBLIC_BASE_DOMAIN}`}>
                        <img
                            src="/images/logo.png"
                            alt="logo izimport.com"
                            className="h-16 w-16 rounded-full"
                        />
                    </Link>
                    <h2 className="text-4xl font-semibold">
                        Bienvenido de nuevo!
                    </h2>
                    <p className="text-2xl text-gray-700">
                        Accede a tu cuenta.
                    </p>
                    <SignIn
                        appearance={{
                            theme: "simple",
                            elements: {
                                header: "!hidden",
                            },
                        }}
                    />
                </div>
            </section>
        </>
    )
}
