import {
    LucidePlaneTakeoff,
    Calculator,
    ChartColumnStacked,
} from "lucide-react"
import Container from "@/components/custom/container"

const features = [
    {
        icon: <LucidePlaneTakeoff />,
        title: "Rastrea tu envio",
        description:
            "Consulta el estado de tu paquete con tu numero de seguimiento",
    },
    {
        icon: <Calculator />,
        title: "Obtenga una cotización",
        description:
            "Calcula el costo final, incluyendo impuestos y transporte.",
    },
    {
        icon: <ChartColumnStacked />,
        title: "¿Es rentable?",
        description: "Compara costos con precios locales y evalúa tu ganancia",
    },
]
function Features() {
    return (
        <section className=" w-full py-32">
            <Container>
                <ul className="w-full flex md:flex-row flex-col items-center justify-center text-center  gap-8 ">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className=" w-full flex flex-col items-center "
                        >
                            {feature.icon}

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
