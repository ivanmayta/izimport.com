import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}
export function formatDateTimeToSpanish(dateString) {
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
