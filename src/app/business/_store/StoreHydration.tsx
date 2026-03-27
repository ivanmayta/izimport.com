"use client"

import { useEffect } from "react"
import { useCartStore } from "./store"

export default function StoreHydration() {
    useEffect(() => {
        useCartStore.persist.rehydrate()
    }, [])

    return null
}
