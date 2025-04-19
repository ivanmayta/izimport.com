"use server"

const AppId = process.env.OPENEXCHANGERATES_APP_ID

export const getRates = async () => {
    const baseUrl = "https://openexchangerates.org"
    const pathName = "/api/latest.json"
    const url = new URL(pathName, baseUrl)
    url.search = `app_id=${AppId}`

    const response = await fetch(url, { cache: "no-store" })

    if (!response.ok) {
        console.log(response)
        return { error: response.statusText }
    }

    const data = await response.json()

    return data
}
