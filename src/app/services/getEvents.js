export async function getEvents(trackingNumber) {
  const options = {
    method: "GET",
    headers: {
      "DHL-API-Key": process.env.NEXT_PUBLIC_DHL_API_KEY,
      "Content-Type": "application/json",
    },
  }
  const response = await fetch(
    `https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}`,
    options
  )
  const data = await response.json()
  return data
}
