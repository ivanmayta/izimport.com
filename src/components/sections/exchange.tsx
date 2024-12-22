"use client"
import { type ratesResponse } from "@/types/restes-response.type"
import * as React from "react"

import {
    Card,
    CardDescription,
    CardHeader,
    CardContent,
} from "@/components/ui/card"
import { ExchangeFill } from "@/icons/exchange-fill"
import { useRatesStore } from "@/store/rates-store"
import { useEffect } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SUPPORTED_CURRENCIES = ["USD", "PEN", "MXN", "COP", "BRL"]

export default function Exchange({ data }: { data: ratesResponse }) {
    const { rates: dataRates } = data
    const USD = dataRates?.USD
    const { rates, currentRate, changeCurrentRate, setRates } = useRatesStore()
    useEffect(() => {
        setRates(data)
        changeCurrentRate("PEN")
    }, [])
    console.log(rates)
    console.log(currentRate)
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
                        value={USD || "1"}
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
                        value={currentRate.value || "0"}
                        className="h-full rounded-l-lg flex-grow pl-6 bg-transparent"
                    ></input>
                    <Select onValueChange={(value) => changeCurrentRate(value)}>
                        <SelectTrigger className="w-1/3 h-full rounded-none bg-black text-white px-2 rounded-r-lg flex items-center justify-center border-l-2 ">
                            <SelectValue placeholder={currentRate.key} />
                        </SelectTrigger>
                        <SelectContent>
                            {SUPPORTED_CURRENCIES.map((keyRate) => (
                                <SelectItem key={keyRate} value={keyRate}>
                                    {keyRate}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
        </Card>
    )
}
