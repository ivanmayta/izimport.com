export async function getEvents(trackingNumber, api_key) {
  const options = {
    method: "GET",
    headers: {
      "DHL-API-Key": api_key,
      "Content-Type": "application/json",
    },
  }
  const response = await fetch(
    `https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingNumber}&language=es`,
    options
  )
  const data = await response.json()
  return data
}
