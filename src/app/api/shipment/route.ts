import { NextRequest, NextResponse } from "next/server"
export async function GET(req: NextRequest) {
    const BASE_URL = "https://api-eu.dhl.com/track/shipments"
    const apiKey = process.env.DHL_API_KEY
    if (!apiKey) {
        return NextResponse.json(
            { error: "DHL API Key no está configurado" },
            { status: 500 }
        )
    }
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

        const options: RequestInit = {
            method: "GET",
            headers: {
                "DHL-API-Key": apiKey,
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
