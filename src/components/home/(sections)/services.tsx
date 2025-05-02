import { Whatsapp } from "@/icons/whatsapp"
import { CircleDollarSign, Lock, SendHorizonal } from "lucide-react"

export function Services() {
    return (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0 pt-36">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 place-items-center ">
                <div className="flex flex-col w-full text-center lg:text-left">
                    <h3 className="font-bold mb-2 text-lg">
                        Enlace personalizado
                    </h3>
                    <p className="font-light pb-4 text-pretty">
                        Generalmente el nombre de tu Negocio, puedes compartirlo
                        en tus redes sociales
                    </p>
                    <span className="flex w-fit gap-1 items-center self-center lg:self-start border rounded-lg py-1 px-3">
                        <Lock size={16} />
                        https://izimport.com/<strong>izimport</strong>
                    </span>
                </div>
                <div className="flex flex-col w-full text-center lg:text-left">
                    <h3 className="font-bold mb-2 text-lg">
                        Recibe pedidos por WhatsApp
                    </h3>
                    <p className="font-light text-pretty">
                        Los clientes pueden completar el pedido del carrito de
                        compras via WhatsApp.
                    </p>
                    <div className="flex self-center lg:self-start w-fit mt-auto -ml-3  gap-3 items-center rounded-lg py-1 px-3 text-green-500 text-lg  font-semibold">
                        <span className="flex">
                            <Whatsapp className="w-7"></Whatsapp>
                            WhatsApp
                        </span>
                        <span className="bg-green-500 w-7 h-7 rounded-full p-1 text-white">
                            <SendHorizonal size={20} className=" text-white" />
                        </span>
                    </div>
                </div>
                <div className="flex flex-col w-full text-center lg:text-left">
                    <h3 className="font-bold mb-2 text-lg">
                        ¿Importas tus productos?{" "}
                    </h3>
                    <p className="font-light text-pretty">
                        Utilidades para mantenerte informado sobre el tipo de
                        cambio actual y seguimiento de envíos por DHL.
                    </p>
                    <div className="flex self-center lg:self-start w-fit mt-auto -ml-3  gap-3 items-center rounded-lg py-1 px-3  text-lg  font-semibold">
                        <img
                            src="/img/dhl.webp"
                            className="h-7 w-auto rounded-md"
                            alt="Logog Dhl"
                        />

                        <CircleDollarSign size={24} />
                    </div>
                </div>
            </section>
        </div>
    )
}
