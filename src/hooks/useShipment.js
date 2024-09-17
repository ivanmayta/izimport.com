import { useState } from "react"
import { getEvents } from "../services/getEvents"

export const useShipment = () => {
    const [shipment, setShipment] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const getShipment = async (trackingNumber) => {
        if (trackingNumber) {
            setIsLoading(true)
            try {
                const response = await getEvents(trackingNumber)
                setShipment(response)
            } catch (error) {
                console.error("Error fetching data:", error)
            } finally {
                setIsLoading(false)
            }
        }
    }

    return { shipment, isLoading, error,    getShipment }
}
