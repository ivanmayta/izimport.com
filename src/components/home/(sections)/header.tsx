import * as React from "react"

import { NavDesktop } from "../nav-desktop"
import { NavMobile } from "../nav-mobile"
import { getAuthUrlOrigin } from "@/lib/utils"
import { ExchangeBadge } from "../exchange-badge"

export default async function Header() {
    return (
        <header className="h-16 my-4 sticky top-4  z-50">
            <div className="max-w-7xl mx-auto h-full flex items-center backdrop-blur-lg rounded-xl px-4 justify-between ">
                {/* Left side: Logo and Desktop Navigation */}
                <div className="flex items-center gap-8">
                    {/* Logo - visible on all screens */}
                    <a href="/">
                        <img
                            className="w-44 "
                            src="/izimport.webp"
                            alt="logo izimport.com"
                        />
                    </a>
                    <NavDesktop />
                </div>

                {/* Right side: Actions and Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    {/* Desktop Actions - Hidden on mobile */}
                    <div className="hidden md:flex items-center gap-4">
                        <ExchangeBadge />
                        <a
                            className="px-3 font-medium hover:bg-zinc-800 py-2 border-2 rounded-xl border-black bg-black text-white"
                            href={getAuthUrlOrigin()}
                        >
                            Iniciar sesión
                        </a>
                    </div>
                    {/* Mobile Menu Button - Only visible on small screens */}
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}
