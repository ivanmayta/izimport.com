import type { TrackingResponse } from "@/types/tracking-response.type"
import ShipmentDetails from "@/components/tracking/shipment-details"
import ShipmentEvents from "@/components/tracking/shipment-events"

export default function TrackResponse({ data }: { data: TrackingResponse }) {
    const { shipments } = data
    const { events, id, destination, origin, status, service } = shipments[0]

    return (
        <div className="w-full max-w-3xl mx-auto">
            <ShipmentDetails
                id={id}
                destination={destination}
                origin={origin}
                status={status}
                service={service}
            />
            <ShipmentEvents events={events} />
        </div>
    )
}
