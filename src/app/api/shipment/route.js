import { NextResponse, NextRequest } from "next/server"

export async function GET(req) {
    // Obtener el parámetro de consulta "trackingNumber" de la URL
    const { searchParams } = new URL(req.url)
    const trackingNumber = searchParams.get("trackingNumber")
    //define options
    const options = {
        method: "GET",
        headers: {
            "DHL-API-Key": process.env.DHL_API_KEY,
            "Content-Type": "application/json",
        },
    }
    const shipment = await fetch(
        `https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}`,
        options
    )
    const data = await shipment.json()

    return NextResponse.json(data)
}
