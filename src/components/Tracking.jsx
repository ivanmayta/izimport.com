"use client"
import { useRef, useEffect, Children } from "react"
import { Button } from "./ui/button"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useRouter, useSearchParams } from "next/navigation"
import { useShipment } from "../hooks/useShipment"
import TrackContent from "./TrackContent"
import SkeletonCard from "./SkeletonCard"
import SearchForm from "./search-form"
import SearchInput from "./search-input"

const TrackForm = () => {
    const trackParam = useSearchParams()
    const router = useRouter()
    const inputRef = useRef(null)

    const { shipment, isLoading, getShipment } = useShipment()

    const handleSubmit = (event) => {
        event.preventDefault()
        getShipment(trackParam.get("trackingNumber"))
    }
    useEffect(() => {
        
        inputRef.current.focus()
    }, [])

    const handleChange = (event) => {
        const params = new URLSearchParams(trackParam)
        if (event.target.value) {
            params.set("trackingNumber", event.target.value)
        } else {
            params.delete("trackingNumber")
        }
        router.replace(`/rastrea?${params.toString()}`)
    }

    return (
        <>
            <SearchForm onSubmit={handleSubmit}>
                <SearchInput
                    inputRef={inputRef}
                    defaultValue={trackParam.get("trackingNumber")}
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

export default TrackForm
