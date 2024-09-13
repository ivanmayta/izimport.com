const BASE_URL = "./api/shipment"

export async function getEvents(trackingNumber) {
    const response = await fetch(`${BASE_URL}?trackingNumber=${trackingNumber}`)
    const data = await response.json()
    return data
}
