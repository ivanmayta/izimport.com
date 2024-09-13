import { NextResponse, NextRequest } from "next/server"

export async function GET(req) {
    try {
        // Obtener el parámetro de consulta "trackingNumber" de la URL
        const { searchParams } = new URL(req.url)
        const trackingNumber = searchParams.get("trackingNumber")
        // Define options
        const options = {
            method: "GET",
            headers: {
                "DHL-API-Key": process.env.DHL_API_KEY,
                "Content-Type": "application/json",
            },
        }
         // Realizar la llamada a la API
         const response = await fetch(
            `https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}&language=es`,
            options
        )

        // Verificar que el trackingNumber no sea nulo o indefinido
        if (!trackingNumber) {
            return NextResponse.json(
                { error: "trackingNumber es requerido" },
                { status: 400 }
            )
        }

       

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            return NextResponse.json(
                { error: "Error al obtener los datos de DHL" },
                { status: response.status }
            )
        }

        const data = await response.json()

        // Devolver la respuesta JSON
        return NextResponse.json(data)
    } catch (error) {
        // Manejo de errores generales
        return NextResponse.json({ error: error }, { status: 500 })
    }
}
