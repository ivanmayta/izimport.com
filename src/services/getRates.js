export const getRates = async () => {
    const response = await fetch("api/exchange", {
        next: { revalidate: 86400 },
    })
    const data = await response.json()
    return data
}
