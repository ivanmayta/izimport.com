"use client"

import { usePathname, useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useShipment } from "@/hooks/useShipment"
import { Button } from "@/components/ui/button"
import Container from "@/components/custom/container"
import { PackageSearch } from "lucide-react"
import { useEffect, useRef } from "react"
import SkeletonTrackResponse from "@components/tracking/skeleton-track-response"
import TrackResponse from "./track-response"
import TrackErrorResponse from "./track-error-response"

function SearchForm({ className }: { className?: string }) {
    const QUERY = "tracking_number"
    const SEARCH_PAGE = "/search"
    const router = useRouter()
    const params = useSearchParams()
    const pathName = usePathname()
    const param = new URLSearchParams(params)
    const trackingNumber = params.get(QUERY) ?? ""
    const { shipment, isLoading, error, getShipment, resetStates } =
        useShipment()

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (pathName === SEARCH_PAGE) {
            inputRef.current.focus()
        }
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
        resetStates()
        try {
            getShipment(trackingNumber)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className={className}>
            <form
                className="max-w-3xl h-12 border-2 rounded-md bg-white flex border-foreground/30 dark:border-0"
                onSubmit={handleSubmit}
            >
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                        <PackageSearch className="w-5 h-5 text-gray-800 " />
                    </div>
                </div>
                <input
                    className="w-full ml-2 h-full caret-black  text-black placeholder:text-black/70 bg-transparent text-sm ps-10  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-input"
                    placeholder="Ingrese su numero de seguimiento..."
                    onChange={handleChange}
                    value={trackingNumber}
                    ref={inputRef}
                    type="text"
                />
                <button className="w-auto rounded-r bg-[#FCD535] hover:bg-[#F0B90B] text-black  inline-block text-nowrap px-6">
                    Rastrear envío
                </button>
            </form>
            {isLoading ? (
                <SkeletonTrackResponse />
            ) : (
                shipment && <TrackResponse data={shipment} />
            )}

            {error ? <TrackErrorResponse text={error.message} /> : null}
        </div>
    )
}
export default SearchForm
