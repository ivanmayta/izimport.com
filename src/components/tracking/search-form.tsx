"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { useShipment } from "@/hooks/useShipment"
import { Button } from "@/components/ui/button"
import { PackageSearch } from "lucide-react"

function SearchForm({ initialValue }) {
    const router = useRouter()
    const pathname = usePathname()
    const isInSearchPage = pathname === "/search"
    const params = useSearchParams()
    const trackingNumber = params.get("trackingNumber") ?? ""
    const { shipment, isLoading, error, getShipment } = useShipment()
    const [inputValue, setInputValue] = useState(initialValue)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const param = new URLSearchParams(params)
        const { value } = e.target
        setInputValue(value)

        if (value && isInSearchPage) {
            param.set("trackingNumber", value)
            router.replace(`/search?${param.toString()}`)
        }
        if (!value && isInSearchPage) {
            param.delete("trackingNumber")
            router.replace(`/search?${param.toString()}`)
        }
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        router.push(`/search?trackingNumber=${inputValue}`)
        try {
            getShipment(inputValue)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
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
                    value={inputValue || trackingNumber}
                    type="text"
                />
                <Button className="mr-1 rounded-sm">Rastrear envío</Button>
            </form>
            {inputValue}
            {isLoading && <p>Loading...</p>}
            {shipment && <p>{JSON.stringify(shipment)}</p>}
            {error}
        </>
    )
}
export default SearchForm
