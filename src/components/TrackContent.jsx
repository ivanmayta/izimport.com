import TrackEvents from "./TrackEvents"
import TrackCard from "./TrackCard"

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
                    <TrackCard shipmentDetails={shipmentDetails} />
                    <TrackEvents events={events} />
                </>
            )}
        </>
    )
}

export default TrackContent
