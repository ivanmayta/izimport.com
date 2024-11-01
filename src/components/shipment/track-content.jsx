import ShipmentEvents from "./shipment-events"
import ShipmentDetails from "./shipment-details"

const TrackContent = ({ data }) => {
    const events = data?.shipments?.[0]?.events || []
    const shipmentDetails = data?.shipments?.[0] || {}

    if ("error" in data) {
        return (
            <section className="text-center">
                No se pudo obtener los datos de Dhl
            </section>
        )
    }
    return (
        <>
            {events.length !== 0 && (
                <>
                    <ShipmentDetails shipmentDetails={shipmentDetails} />
                    <ShipmentEvents events={events} />
                </>
            )}
        </>
    )
}

export default TrackContent
