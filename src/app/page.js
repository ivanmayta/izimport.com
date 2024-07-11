"use client"
import { getEvents } from "./services/getEvents"
import { useEffect, useState } from "react"
import Events from "./components/Events"
export default function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    getEvents("6372107302").then((data) => {
      setEvents(data.shipments[0].events)
    })
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to the DHL API</h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {events.map((event, key) => {
          return (
            <Events
              key={key}
              time={event.timestamp}
              description={event.description}
              location={event.location.address.addressLocality}
            />
          )
        })}
      </ol>
    </main>
  )
}
