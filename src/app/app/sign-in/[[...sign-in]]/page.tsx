"use client"

import { SignIn } from "@clerk/nextjs"
import Link from "next/link"

function LoginSkeleton() {
    return (
        <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                {/* Email field skeleton */}
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                    <div className="h-12 bg-gray-100 rounded-lg animate-pulse"></div>
                </div>

                {/* Password field skeleton */}
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                    <div className="h-12 bg-gray-100 rounded-lg animate-pulse"></div>
                </div>

                {/* Remember me and forgot password skeleton */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                </div>

                {/* Login button skeleton */}
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>

                {/* Register link skeleton */}
                <div className="text-center">
                    <div className="h-4 bg-gray-200 rounded w-48 mx-auto animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default function Page() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-4">
                    <Link href="/">
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="h-20 w-20 rounded-2xl mx-auto shadow-lg hover:shadow-xl transition-shadow"
                        />
                    </Link>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-gray-900">
                            ¡Bienvenido de nuevo!
                        </h1>
                        <p className="text-lg text-gray-600">
                            Accede a tu tienda online
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <SignIn
                        fallback={<LoginSkeleton />}
                        appearance={{
                            theme: "simple",
                            elements: {
                                header: "!hidden",
                            },
                        }}
                    />
                </div>

                <div className="text-center space-y-2">
                    <p className="text-sm text-gray-500">
                        Al iniciar sesión, aceptas nuestros{" "}
                        <Link
                            href="/terms"
                            className="text-[#25D366] hover:text-[#1ea952] transition-colors"
                        >
                            Términos de Servicio
                        </Link>{" "}
                        y{" "}
                        <Link
                            href="/privacy"
                            className="text-[#25D366] hover:text-[#1ea952] transition-colors"
                        >
                            Política de Privacidad
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
