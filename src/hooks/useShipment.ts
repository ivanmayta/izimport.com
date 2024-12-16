import { useState } from "react"
import { getEvents } from "../services/getEvents"
import type { Shipment, TrackingResponse } from "@/types/tracking-response.type"

export const useShipment = () => {
    const [shipment, setShipment] = useState<TrackingResponse | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const getShipment = async (trackingNumber) => {
        if (trackingNumber) {
            setIsLoading(true)
            try {
                const response: TrackingResponse = await getEvents(
                    trackingNumber
                )
                setShipment(response)
            } catch (error) {
                console.error("Error fetching data:", error)

                setError(error) // Almacena el error en el estado
            } finally {
                setIsLoading(false)
            }
        }
    }

    return { shipment, isLoading, error, getShipment }
}
