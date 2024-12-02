import {
    LucidePlaneTakeoff,
    Calculator,
    ChartColumnStacked,
} from "lucide-react"

function Features() {
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
            description:
                "Compara costos con precios locales y evalúa tu ganancia",
        },
    ]
    return (
        <section className="w-full my-32 ">
            <ul className="grid grid-cols-1 text-center gap-12 md:gap-6 md:grid-cols-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex flex-col items-center">
                        {feature.icon}

                        <h3 className="text-lg font-bold mb-1 mt-4">
                            {feature.title}
                        </h3>
                        <p className="opacity-80 text-balance">{feature.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Features
