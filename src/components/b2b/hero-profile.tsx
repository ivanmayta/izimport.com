import { Facebook } from "@/icons/facebook"
import { Instagram } from "@/icons/instagram"
import { Tiktok } from "@/icons/tiktok"
import { Whatsapp } from "@/icons/whatsapp"

export default async function ProfileHero({ username, name, description }) {
    return (
        <section className="pt-12 max-w-[1420px] mx-auto w-full py-6">
            <div className="flex md:flex-row flex-col items-center gap-3 ">
                <img
                    className="aspect-square w-48 h-48 rounded-full object-cover"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBMVEKwE_Ujcc6IwOIno4xMS31xZBrAp45A&s"
                    alt=""
                />
                <div className="flex flex-col gap-2 w-full">
                    <h1 className="font-extrabold text-4xl">{name}</h1>
                    <p>@{username}</p>
                    <p className="text-pretty text-sm font-medium max-w-[75ch] leading-tight text-zinc-800 ">
                        {description}
                    </p>
                    <strong className="text-sm text-zinc-900">
                        <span>Perú</span> • <span>Direccion lt. 93</span>
                    </strong>
                    <div className="flex gap-3 w-full md:justify-normal justify-center py-3 md:py-0">
                        <a href="/">
                            <Facebook className="hover:text-blue-700" />
                        </a>
                        <a href="/" className="hover:text-red-600">
                            <Instagram />
                        </a>
                        <a href="/" className="hover:text-zinc-700">
                            <Tiktok />
                        </a>
                    </div>
                </div>
                <div className="flex w-full justify-center items-center">
                    <a
                        className=" flex gap-1 border px-3 rounded-xl text-green-500 border-green-500 py-2 hover:text-white hover:bg-green-600 ease-in-out transition-all "
                        href="/"
                    >
                        <Whatsapp />
                        Pongase en contacto
                    </a>
                </div>
            </div>
        </section>
    )
}
