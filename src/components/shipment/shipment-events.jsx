import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Package } from "lucide-react"

function formatDateTimeToSpanish(dateString) {
    const date = new Date(dateString)

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "America/Lima", // Ajuste a la zona horaria UTC -05:00
    }

    // Convierte la fecha y hora con Intl.DateTimeFormat y le agrega el formato solicitado
    const formattedDate = new Intl.DateTimeFormat("es-PE", options).format(date)
    return `${formattedDate} (UTC -05:00)`
}
function ShipmentEvents({ events }) {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Detalles del envio</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="relative  border-gray-200 dark:border-gray-700 max-w-[600px] space-y-8">
                        {events.map((event, index) => {
                            return (
                                <li
                                    className="flex items-start gap-4"
                                    key={index}
                                >
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                                            <Package className="w-5 h-5 text-zinc-200" />
                                        </div>
                                        <div className="absolute top-10 left-1/2 w-px h-16 bg-zinc-800 -translate-x-1/2" />
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h3 className="text-zinc-200 font-medium">
                                            {event.description}
                                        </h3>
                                        <p className="text-zinc-500 text-sm mt-1">
                                            {formatDateTimeToSpanish(
                                                event.timestamp
                                            )}
                                        </p>
                                        <p className="text-zinc-400 text-sm mt-2">
                                            {
                                                event.location.address
                                                    .addressLocality
                                            }
                                        </p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}

export default ShipmentEvents
