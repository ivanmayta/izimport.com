"use client"

import { getEvents } from "../services/getEvents"
import { useEffect, useState } from "react"
import Events from "./Events"

const ShipmentsDetails = ({ trackingNumber }) => {
    const [data, setData] = useState({ shipments: [] })

    useEffect(() => {
        getEvents(trackingNumber).then((data) => {
            setData(data)
        })
    }, [trackingNumber])

    const events = data?.shipments[0]?.events || undefined

    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-[600px]">
            {events && <Events events={events} />}
        </ol>
    )
}

export default ShipmentsDetails
