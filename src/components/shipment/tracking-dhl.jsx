"use client"
import { useRef, useEffect } from "react"
import { Button } from "../ui/button"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useShipment } from "../../hooks/useShipment"
import TrackContent from "./track-content"
import SkeletonCard from "../skeleton-card"
import SearchForm from "../search-form"
import SearchInput from "../search-input"

export const Tracking = () => {
    const params = useSearchParams()
    const trackingNumber = params.get("trackingNumber") ?? ""
    const router = useRouter()
    const inputRef = useRef(null)

    const { shipment, isLoading, getShipment } = useShipment()

    const handleSubmit = (event) => {
        event.preventDefault()
        getShipment(trackingNumber)
    }

    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.setSelectionRange(
            inputRef.current.value.length,
            inputRef.current.value.length
        )
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
                    <Search className="h-4 w-4" />
                </Button>
            </SearchForm>
            {isLoading ? <SkeletonCard /> : <TrackContent data={shipment} />}
        </>
    )
}
