import { Tracking } from "@components/shipment/tracking-dhl"
import { Suspense } from "react"
import Features from "@/components/sections/features"
import Hero from "@/components/sections/hero"
import SearchForm from "@/components/tracking/search-form"
import TrackShipment from "@/components/sections/tracking"

export default function Home() {
    return (
        <>
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <Tracking />
            </Suspense>
            <TrackShipment />
            <Features />
        </>
    )
}
