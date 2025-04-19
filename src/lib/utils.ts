import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getFrontEndUrl() {
    return process.env.FRONT_URL ?? "http://localhost:3000"
}

export function getAuthUrlOrigin() {
    if (process.env.NODE_ENV === "development") {
        return `http://app.localhost:3000`
    }
    return `app.${process.env.FRONT_URL}`
}

export function formatDateTimeToSpanish(dateString: string): string {
    const date = new Date(dateString)

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "America/Lima", // Ajuste a la zona horaria UTC -05:00
    }

    // Convierte la fecha y hora con Intl.DateTimeFormat y le agrega el formato solicitado
    const formattedDate: string = new Intl.DateTimeFormat(
        "es-PE",
        options
    ).format(date)
    return `${formattedDate} (UTC -05:00)`
}

export async function convertBlobUrlToFile(blobUrl) {
    const response = await fetch(blobUrl)
    const blob = await response.blob()
    const fileName = Math.random().toString(36).slice(2, 9)
    const mimeType = blob.type || "application/octet-stream"
    const file = new File([blob], `${fileName}.${mimeType.split("/")[1]}`, {
        type: mimeType,
    })
    return file
}
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
    }).format(amount)
}
