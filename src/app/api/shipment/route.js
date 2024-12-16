import { NextResponse } from "next/server"
export async function GET(req) {
    const BASE_URL = "https://api-eu.dhl.com/track/shipments"
    try {
        const { searchParams } = new URL(req.url)
        const trackingNumber = searchParams.get("trackingNumber")
        const language = searchParams.get("language") || "es"

        if (!trackingNumber) {
            return NextResponse.json(
                { error: "trackingNumber es requerido" },
                { status: 400 }
            )
        }

        const options = {
            method: "GET",
            headers: {
                "DHL-API-Key": process.env.DHL_API_KEY,
                "Content-Type": "application/json",
            },
        }

        const response = await fetch(
            `${BASE_URL}?trackingNumber=${trackingNumber}&language=${language}`,
            options
        )

        if (!response.ok) {
            const errorText = await response.text() // Lee el mensaje de error del cuerpo, si está disponible.
            return NextResponse.json(
                {
                    error: "Error al obtener los datos de DHL",
                    details: errorText || "Error desconocido",
                },
                { status: response.status }
            )
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        // Manejo mejorado del error
        console.error("Error en el servidor:", error)
        return NextResponse.json(
            {
                error: "Error interno del servidor",
                details: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        )
    }
}
