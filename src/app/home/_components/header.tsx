import Link from "next/link"

//TODO: fix magic url
export default function Header() {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL
    return (
        <header className="h-16 my-4 sticky top-4  z-50">
            <div className="max-w-7xl mx-auto h-full flex items-center backdrop-blur-lg rounded-xl justify-between ">
                <div className="flex items-center gap-8">
                    <Link
                        className="flex justify-center items-center gap-2 font-semibold text-2xl"
                        href="/"
                    >
                        <img
                            className="h-10 w-10 rounded-full"
                            src="/images/logo.png"
                            alt="logo izimport.com"
                        />
                        izimport.com
                    </Link>
                    <nav>
                        <Link
                            className="hover:border-b-2 hover:border-black py-2 px-3 font-medium text-zinc-950"
                            href="https://track.izimport.com"
                            target="_blank"
                        >
                            Rastrea
                        </Link>
                        <Link
                            className="hover:border-b-2 hover:border-black py-2 px-3 font-medium text-zinc-950"
                            href="https://quotes.izimport.com"
                            target="_blank"
                        >
                            Cotiza
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className=" hidden sm:flex items-center gap-4">
                        {/*<ExchangeBadge />*/}
                        <Link
                            className="px-3 font-medium hover:bg-zinc-800 py-2 border-2 rounded-xl border-black bg-black text-white"
                            href={`${appUrl}`}
                        >
                            Iniciar sesión
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
