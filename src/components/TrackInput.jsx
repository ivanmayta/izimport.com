"use client"
import { useState } from "react"
import TrackContent from "./TrackContent"
import { Button } from "./ui/button"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
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
                <label htmlFor="simple-search" className="sr-only">
                    Search
                </label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                            />
                        </svg>
                    </div>
                    <input
                        onChange={handleChange}
                        type="text"
                        id="simple-search"
                        className="bg-background border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-background dark:border-gray-600  dark:text-white focus:bg-background "
                        placeholder="Search branch name..."
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
