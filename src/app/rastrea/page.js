"use client"
import { useSearchParams } from "next/navigation"
import TrackInput from "../../components/TrackInput"
import TrackContent from "../../components/TrackContent"
import { useEffect, useState } from "react"
import { getEvents } from "../../app/services/getEvents"
import { SkeletonCard } from "../../components/SkeletonCard"

export default function Rastrea() {
    const searchParams = useSearchParams()
    const trackingNumber = searchParams.get("trackingNumber")
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        async function fetchData() {
            if (trackingNumber) {
                setIsLoading(true)
                try {
                    const result = await getEvents(trackingNumber)
                    setData(result)
                } catch (error) {
                    console.error("Error fetching data:", error)
                } finally {
                    setIsLoading(false)
                }
            }
        }

        fetchData()
    }, [trackingNumber])

    return (
        <section className="relative mt-40 w-full h-full border-neutral-300 p-3 px-12 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 flex flex-col gap-4">
            <TrackInput />
            {isLoading ? (
                <SkeletonCard />
            ) : (
                trackingNumber && <TrackContent data={data} />
            )}
        </section>
    )
}
