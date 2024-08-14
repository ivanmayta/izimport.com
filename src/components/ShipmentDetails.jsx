"use client"

import { getEvents } from "../app/services/getEvents"
import { useEffect, useState } from "react"
import Events from "./Events"
import { SkeletonCard } from "./SkeletonCard"

const ShipmentsDetails = ({ trackingNumber }) => {
    const [data, setData] = useState({ shipments: [] })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getEvents(trackingNumber).then((data) => {
            setData(data)
            setIsLoading(false)
        })
    }, [trackingNumber])

    const events = data?.shipments[0]?.events || undefined

    return (
        <>
            {isLoading ? (
                <SkeletonCard />
            ) : (
                <ul className="relative border-s border-gray-200 dark:border-gray-700 max-w-[600px] ">
                    {events && <Events events={events} />}
                </ul>
            )}
        </>
    )
}

export default ShipmentsDetails
