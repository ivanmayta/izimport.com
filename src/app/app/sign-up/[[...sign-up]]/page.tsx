"use client"

import { SignUp } from "@clerk/nextjs"
import Link from "next/link"

function RegisterSkeleton() {
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

                {/* Confirm Password field skeleton */}
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-36 animate-pulse"></div>
                    <div className="h-12 bg-gray-100 rounded-lg animate-pulse"></div>
                </div>

                {/* Register button skeleton */}
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>

                {/* Login link skeleton */}
                <div className="text-center">
                    <div className="h-4 bg-gray-200 rounded w-48 mx-auto animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

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
            <div className="flex justify-center">
                <SignUp
                    fallback={<RegisterSkeleton />}
                    appearance={{
                        theme: "simple",
                        elements: {
                            header: "!hidden",
                        },
                    }}
                />
            </div>
        </section>
    )
}
