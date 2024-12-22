"use client"

import {
    Card,
    CardDescription,
    CardHeader,
    CardContent,
} from "@/components/ui/card"
import { ExchangeFill } from "@/icons/exchange-fill"
import { useState, useEffect } from "react"
import { getRates } from "@/actions/loaders"

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
        const getRatesAction = async () => {
            const data = await getRates()
            setExchange((prevState) => ({
                ...prevState,
                USD: data?.rates?.USD || 1,
                PEN: data?.rates?.PEN || "No disponible",
            }))
        }
        getRatesAction()
        
    }, [])
    return (
        <Card className="border max-w-xl w-full lg:w-auto  mx-auto">
            <CardHeader>
                <CardDescription>Tipo de cambio</CardDescription>
                <hr className="w-10 border-yellow-500 border-1" />
            </CardHeader>
            <CardContent className="relative flex flex-col gap-2 ">
                <div className=" h-12 border-2 rounded-lg flex">
                    <input
                        disabled
                        onChange={handleExchange}
                        value={exchange.USD || ""}
                        className="h-full rounded-l-lg flex-grow pl-6 bg-transparent"
                    ></input>
                    <label className=" w-1/3 h-full bg-black text-white px-2 rounded-r-lg flex items-center justify-center border-l-2 ">
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
                        className="h-full rounded-l-lg flex-grow pl-6 bg-transparent"
                    ></input>
                    <label className="w-1/3 h-full bg-black text-white px-2 rounded-r-lg flex items-center justify-center border-l-2">
                        Soles
                    </label>
                </div>
            </CardContent>
        </Card>
    )
}
export default Exchange
