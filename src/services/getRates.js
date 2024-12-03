export const getRates = async () => {
    const response = await fetch("api/exchange")
    const data = await response.json()
    return data
}
