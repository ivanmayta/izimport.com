"use client"
import { useRef, useEffect } from "react"
import { Button } from "./ui/button"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useRouter, useSearchParams } from "next/navigation"
import { useShipment } from "../hooks/useShipment"
import TrackContent from "./track-content"
import SkeletonCard from "./skeleton-card"
import SearchForm from "./search-form"
import SearchInput from "./search-input"

const Tracking = () => {
    const params = useSearchParams()
    const MIN_TRACK_NUMBER_CHARS = 4
    const trackingNumber = params.get("trackingNumber") ?? ""
    const router = useRouter()
    const inputRef = useRef(null)

    const { shipment, isLoading, getShipment } = useShipment()

    const handleSubmit = (event) => {
        event.preventDefault()
        getShipment(trackingNumber)
    }

    useEffect(() => {
        if (trackingNumber?.length > MIN_TRACK_NUMBER_CHARS) {
            getShipment(trackingNumber)
        }
        inputRef.current.focus()
    }, [])

    const handleChange = (event) => {
        const param = new URLSearchParams(params)
        const { value } = event.target
        if (value) {
            param.set("trackingNumber", value)
        } else {
            param.delete("trackingNumber")
        }
        router.replace(`/rastrea?${param.toString()}`)
    }

    return (
        <>
            <SearchForm onSubmit={handleSubmit}>
                <SearchInput
                    inputRef={inputRef}
                    defaultValue={trackingNumber}
                    handleChange={handleChange}
                />
                <Button variant="outline" size="icon">
                    <MagnifyingGlassIcon className="h-4 w-4" />
                </Button>
            </SearchForm>
            {isLoading ? <SkeletonCard /> : <TrackContent data={shipment} />}
        </>
    )
}

export default Tracking
