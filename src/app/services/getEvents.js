const BASE_URL = "./api/shipment"

export async function getEvents(trackingNumber) {
    try {
        const response = await fetch(
            `${BASE_URL}?trackingNumber=${trackingNumber}`
        )
        if (!response.ok) {
            throw new Error("Failed to fetch events")
        }
        const data = await response.json()
        return data
    } catch (error) {
        return undefined
    }
}
