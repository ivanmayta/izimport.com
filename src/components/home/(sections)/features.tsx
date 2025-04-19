import {
    ChartColumnStacked,
    FileBoxIcon,
    PanelsTopLeftIcon,
} from "lucide-react"
import Container from "@/components/home/container"
import { Whatsapp } from "@/icons/whatsapp"
import { cn } from "@/lib/utils"

const features = [
    {
        icon: <FileBoxIcon />,
        title: "Sube tus productos",
        description:
            "Carga tus artículos fácilmente en un dashboard intuitivo.",
    },
    {
        icon: <PanelsTopLeftIcon />,
        title: "Personaliza tu página",
        description: "Tu propia página con el Nombre de usuario que elijas.",
    },
    {
        icon: <Whatsapp />,
        title: "Recibe pedidos por WhatsApp",
        description:
            "Pueden contactarte y hacer pedidos de forma rápida y sencilla.",
    },
    {
        icon: <ChartColumnStacked />,
        title: "Empieza a vender",
        description:
            "Crea tu página en minutos y concéntrate en hacer crecer tu negocio.",
    },
]
function Features() {
    const isEven = (index: number) => index % 2 === 0
    return (
        <section className=" w-full py-24">
            <Container>
                <ul className="w-full flex md:flex-row flex-col items-center justify-center text-center  gap-8 ">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className=" w-full flex flex-col items-center "
                        >
                            <div
                                className={cn("p-6  rounded-full text-white", {
                                    "bg-black dark:bg-zinc-800": isEven(index),
                                    "bg-orange-600": !isEven(index),
                                })}
                            >
                                {feature.icon}
                            </div>

                            <h3 className="text-lg font-bold mb-1 mt-4">
                                {feature.title}
                            </h3>
                            <p className="opacity-80 text-balance">
                                {feature.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    )
}

export default Features
