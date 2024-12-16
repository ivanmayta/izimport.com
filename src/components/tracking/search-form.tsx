"use client"

import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useShipment } from "@/hooks/useShipment"
import { Button } from "@/components/ui/button"
import { PackageSearch } from "lucide-react"
import { useEffect, useRef } from "react"
import SkeletonTrackResponse from "@components/tracking/skeleton-track-response"
import TrackResponse from "./track-response"

function SearchForm() {
    const QUERY = "tracking_number"
    const SEARCH_PAGE = "/search"
    const router = useRouter()
    const params = useSearchParams()
    const param = new URLSearchParams(params)
    const trackingNumber = params.get(QUERY) ?? ""
    const { shipment, isLoading, error, getShipment } = useShipment()

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.setSelectionRange(
            inputRef.current.value.length,
            inputRef.current.value.length
        )
    }, [])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (value) {
            param.set(QUERY, value)
        } else {
            param.delete(QUERY)
        }
        router.replace(`${SEARCH_PAGE}?${param.toString()}`)
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        try {
            getShipment(trackingNumber)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="flex flex-col gap-8">
            <form
                className=" w-full h-12 border-2 rounded-lg max-w-3xl mx-auto flex items-center  gap-x-2 border-foreground/70 dark:border-foreground/20"
                onSubmit={handleSubmit}
            >
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                        <PackageSearch className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                    </div>
                </div>

                <input
                    className="w-full h-full bg-background text-sm block  ps-10  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-input"
                    placeholder="Ingrese su numero de seguimiento..."
                    onChange={handleChange}
                    value={trackingNumber}
                    ref={inputRef}
                    type="text"
                />
                <Button className="mr-1 rounded-sm">Rastrear envío</Button>
            </form>
            {isLoading ? (
                <SkeletonTrackResponse />
            ) : (
                shipment && <TrackResponse data={shipment} />
            )}

            {error ? <p>{error.message}</p> : null}
        </div>
    )
}
export default SearchForm
