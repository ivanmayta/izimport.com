const BASE_URL = "./api/shipment"

export async function getEvents(trackingNumber) {
    try {
        const response = await fetch(
            `${BASE_URL}?trackingNumber=${trackingNumber}`
        )

        if (!response.ok) {
            const errorData = await response.json()
            const errorMessage =
                errorData.error || "Error desconocido al obtener los eventos"
            throw new Error(errorMessage)
        }

        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(
            error instanceof Error
                ? error.message
                : "Ocurrió un error inesperado al obtener los eventos"
        )
    }
}
