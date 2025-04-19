"use client"

import { useRatesStore } from "@/store/rates-store"

export function ExchangeBadge() {
    const { rates, currentRate } = useRatesStore()
    const base = {
        key: rates?.base || "USD",
        value: rates?.rates?.[rates?.base] || 1,
    }
    return (
        <span className="text-xs">{`${base.value} ${base.key} ≈ ${currentRate.value} ${currentRate.key}`}</span>
    )
}
