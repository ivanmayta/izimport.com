import { NextResponse } from "next/server"
import { unstable_noStore as noStore } from "next/cache"

interface ErrorResponse {
    error: string
}
export async function GET() {
    noStore()
    const baseUrl = "https://openexchangerates.org"
    const pathName = "/api/latest.json"
    const url = new URL(pathName, baseUrl)
    url.search = `app_id=${process.env.OPENEXCHANGERATES_APP_ID}`
    try {
        const response = await fetch(url)

        if (!response.ok) {
            return NextResponse.json<ErrorResponse>(
                { error: "Error al obtener los tipos de cambio" },
                { status: response.status }
            )
        }
        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json<ErrorResponse>(
            { error: error as string },
            { status: 500 }
        )
    }
}
