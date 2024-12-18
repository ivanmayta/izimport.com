import type { TrackingResponse } from "@/types/tracking-response.type"
import ShipmentDetails from "@/components/tracking/shipment-details"
import ShipmentEvents from "@/components/tracking/shipment-events"

export default function TrackResponse({ data }: { data: TrackingResponse }) {
    const { shipments } = data
    const { events, id, destination, origin, status, service } = shipments[0]

    return (
        <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto pt-3">
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
