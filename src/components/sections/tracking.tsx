"use client"
import { useSearchParams } from "next/navigation"
import SearchForm from "@/components/tracking/search-form"
function TrackShipment() {
    const seachParams = useSearchParams()
    const trackingNumber = seachParams.get("tracking") || ""
    return (
        <div>
            <h1>Track Shipment</h1>
            <SearchForm initialValue={trackingNumber} />
        </div>
    )
}

export default TrackShipment
