import { NextResponse } from "next/server"

export async function GET(req) {
    const BASE_URL = "https://api-eu.dhl.com/track/shipments"
    try {
        const { searchParams } = new URL(req.url)
        const trackingNumber = searchParams.get("trackingNumber")
        const language = searchParams.get("language") || "es"
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

        if (!trackingNumber) {
            return NextResponse.json(
                { error: "trackingNumber es requerido" },
                { status: 400 }
            )
        }
        if (!response.ok) {
            return NextResponse.json(
                { error: "Error al obtener los datos de DHL" },
                { status: response.status }
            )
        }
        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
