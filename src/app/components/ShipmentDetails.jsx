"use client"

import { getEvents } from "../services/getEvents"
import { useEffect, useState } from "react"
import Events from "./Events"



const ShipmentsDetails = ({ api_key }) => {
  const [data, setData] = useState({ shipments: [] })

  useEffect(() => {
    getEvents("5572306316", api_key).then((data) => {
      console.log(data)
      setData(data)
    })
  }, [])

  const events = data.shipments[0]?.events || []
  
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <Events events={events} />
    </ol>
  )
}

export default ShipmentsDetails
