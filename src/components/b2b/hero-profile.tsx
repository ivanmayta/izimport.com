import { Facebook } from "@/icons/facebook"
import { Instagram } from "@/icons/instagram"
import { Tiktok } from "@/icons/tiktok"
import { Whatsapp } from "@/icons/whatsapp"
import { ProductImage } from "./product-image"
import { Building2 } from "lucide-react"

export default async function ProfileHero({
    username,
    name,
    description,
    address,
    whatsapp,
    products,
    image_url,
    socials,
}) {
    return (
        <section className=" max-w-[1420px] mx-auto w-full ">
            <div className="flex md:flex-row justify-center flex-col items-center gap-3 py-4">
                {image_url ? (
                    <img
                        className="aspect-square w-48 h-48 rounded-full object-cover"
                        src={image_url}
                        alt={`Imagen de ${name}`}
                    />
                ) : (
                    <div className="flex items-center justify-center aspect-square w-48 h-48 rounded-full bg-gray-300 text-muted-foreground">
                        <Building2 className="w-32 h-32 " />
                    </div>
                )}
                <div className="flex flex-col gap-2 w-full text-center md:text-start">
                    <h1 className="font-extrabold text-4xl">{name}</h1>
                    <p>@{username}</p>
                    <p className="text-pretty text-sm font-medium md:max-w-[75ch] leading-tight text-zinc-800 ">
                        {description}
                    </p>
                    <strong className="text-sm text-zinc-900">
                        <span>{address}</span>
                    </strong>
                    <div className="flex gap-3 w-full md:justify-normal justify-center py-3 md:py-0">
                        {socials?.facebook && (
                            <a href={socials.facebook} target="_blank">
                                <Facebook className="hover:text-blue-700" />
                            </a>
                        )}
                        {socials?.instagram && (
                            <a href={socials.instagram} target="_blank">
                                <Instagram className="hover:text-red-600" />
                            </a>
                        )}
                        {socials?.tiktok && (
                            <a href={socials.tiktok} target="_blank">
                                <Tiktok className="hover:text-zinc-700" />
                            </a>
                        )}
                    </div>
                </div>
                <div className="flex w-full justify-center items-center">
                    <a
                        className=" flex gap-1 border px-3 rounded-xl text-green-500 border-green-500 py-2 hover:text-white hover:bg-green-600 ease-in-out transition-all "
                        href={`https://wa.me/51${whatsapp}?text=Hola%20${name}%20me%20interesa%20un%20producto`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Whatsapp />
                        Pongase en contacto
                    </a>
                </div>
            </div>
            <nav className="bg-zinc-800 text-white px-2 py-1">
                <a href="">Productos</a>
            </nav>

            <main className="flex-grow relative pt-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-12 pb-8">
                    {products &&
                        products.map((product) => (
                            <div
                                key={product.id}
                                className=" group cursor-pointer"
                            >
                                <ProductImage product={product} />
                                <p className="text-sm text-clip line-clamp-2 leading-tight">
                                    {product.name}
                                    {/* Cambiado de `name` a `title` según la API */}
                                </p>
                                <p className="font-semibold">
                                    s/.{product.price}
                                </p>
                            </div>
                        ))}
                </div>
            </main>
        </section>
    )
}
