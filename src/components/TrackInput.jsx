"use client"
import { useState } from "react"
import TrackContent from "./TrackContent"
import { Button } from "./ui/button"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { IconPackageSearch } from "../icons/icon-pkg-search"

const TrackInput = () => {
    const [trackingNumber, setTrackingNumber] = useState("")
    const [submiteed, setSubmited] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setSubmited(true)
    }

    const handleChange = (event) => {
        setTrackingNumber(event.target.value)
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="flex items-center mx-auto w-full gap-x-2"
            >
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <IconPackageSearch className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                    </div>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="simple-search"
                        className="bg-background rounded-full  border border-gray-300 text-gray-900 text-sm block w-full ps-10 p-3  dark:bg-background dark:border-gray-400  dark:text-white focus:bg-background "
                        placeholder="Ingrese su numero de seguimiento..."
                        required
                    />
                </div>

                <Button variant="outline" size="icon">
                    <MagnifyingGlassIcon className="h-4 w-4" />
                </Button>
            </form>

            {submiteed && <TrackContent trackingNumber={trackingNumber} />}
        </>
    )
}

export default TrackInput
