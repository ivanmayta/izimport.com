import { Whatsapp } from "@/icons/whatsapp"
import { LayoutGrid, MousePointerClick, Share2, ShoppingBag } from "lucide-react"

export default function Services() {
    const features = [
        {
            title: "Catálogo Interactivo",
            description: "Tus clientes pueden navegar por tus productos con fotos de alta calidad, precios y descripciones detalladas.",
            icon: <LayoutGrid className="h-6 w-6 text-zinc-900" />,
            color: "bg-blue-50"
        },
        {
            title: "Carrito de Compras",
            description: "Selección de múltiples productos con cálculo automático de totales antes de enviar el pedido.",
            icon: <ShoppingBag className="h-6 w-6 text-zinc-900" />,
            color: "bg-orange-50"
        },
        {
            title: "Venta por WhatsApp",
            description: "Recibe el detalle exacto de la compra directamente en tu chat de WhatsApp para cerrar la venta.",
            icon: <Whatsapp className="h-6 w-6 text-[#25D366]" />,
            color: "bg-green-50"
        },
        {
            title: "URL Personalizada",
            description: "Un enlace profesional con el nombre de tu marca (izimport.com/tu-tienda) listo para compartir.",
            icon: <Share2 className="h-6 w-6 text-zinc-900" />,
            color: "bg-purple-50"
        }
    ]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-zinc-950 tracking-tight">
                        Todo lo que necesitas para <br/>
                        <span className="text-orange-600">vender más</span> por WhatsApp
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium">
                        Olvídate de enviar listas de precios en PDF o fotos sueltas. 
                        Profesionaliza tu proceso de venta hoy mismo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="group p-8 rounded-3xl border border-zinc-100 bg-zinc-50/50 transition-all hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-zinc-950 mb-3 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-500 leading-relaxed text-sm font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
