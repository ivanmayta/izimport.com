import { create } from "zustand"
import { type ratesResponse } from "@/types/restes-response.type"

interface RatesState {
    rates: ratesResponse
    currentRate: { key: string; value: number }
    changeCurrentRate: (newRate: string) => void
    setRates: (rates: ratesResponse) => void
}
export const useRatesStore = create<RatesState>((set) => ({
    rates: {} as ratesResponse,
    currentRate: { key: "", value: 0 },
    changeCurrentRate: (newRate) =>
        set((state) => ({
            currentRate: {
                key: newRate,
                value: state?.rates?.rates?.[newRate],
            },
        })),
    setRates: (rates) => set({ rates }),
}))
