"use client"

import {
    Card,
    CardDescription,
    CardHeader,
    CardContent,
} from "@/components/ui/card"
import { ExchangeFill } from "@/icons/exchange-fill"
import { useState, useEffect } from "react"
import { getRates } from "@/services/getRates"

function Exchange() {
    const SUPPORTED_CURRENCIES = {
        USD: 1,
        PEN: 0,
    }
    const [exchange, setExchange] = useState(SUPPORTED_CURRENCIES)

    const handleExchange = (e: any) => {
        console.log(e)
    }
    useEffect(() => {
        getRates().then((data) => {
            setExchange((prevState) => ({
                ...prevState,
                USD: data?.rates?.USD || 1,
                PEN: data?.rates?.PEN || "No disponible",
            }))
        })
    }, [])
    return (
        <Card className="dark:bg-exchange lg:w-2/5 border-[0px]">
            <CardHeader>
                <CardDescription className="text-center">
                    Tipo de cambio
                </CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-col gap-2 ">
                <div className=" h-12 border-2 rounded-lg flex">
                    <input
                        disabled
                        onChange={handleExchange}
                        value={exchange.USD || ""}
                        className="h-full rounded-l-lg flex-grow pl-6 "
                    ></input>
                    <label className=" w-1/3 h-full bg-black text-white px-2 rounded-r-lg flex items-center justify-center">
                        Dolares
                    </label>
                </div>
                <div className="absolute top-[40%] right-[30%] -translate-y-1/3 -translate-x-1/3">
                    <div className="bg-background/40 w-6 h-6 rounded-full">
                        <ExchangeFill />
                    </div>
                </div>
                <div className="h-12 border-2 rounded-lg flex">
                    <input
                        disabled
                        onChange={handleExchange}
                        value={exchange.PEN || ""}
                        className="h-full rounded-l-lg flex-grow pl-6"
                    ></input>
                    <label className="w-1/3 h-full bg-black text-white px-2 rounded-r-lg flex items-center justify-center">
                        Soles
                    </label>
                </div>
            </CardContent>
        </Card>
    )
}
export default Exchange
