"use client"

import { getEvents } from "../app/services/getEvents"
import { useEffect, useState } from "react"
import TrackEvents from "./TrackEvents"
import { SkeletonCard } from "./SkeletonCard"
import TrackCard from "./TrackCard"

const TrackContent = ({ trackingNumber }) => {
    const [data, setData] = useState({ shipments: [] })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getEvents(trackingNumber).then((data) => {
            setData(data)
            setIsLoading(false)
        })
    }, [trackingNumber])

    const events = data?.shipments[0]?.events || undefined
    const shipmentDetails = data?.shipments[0] || undefined

    return (
        <>
            {isLoading ? (
                <SkeletonCard />
            ) : (
                <>
                    {events && shipmentDetails && (
                        <>
                            <TrackCard
                                className="my-4"
                                shipmentDetails={shipmentDetails}
                            />
                            <TrackEvents events={events} />
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default TrackContent
