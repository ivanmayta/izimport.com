import { Product } from "@/types/tables.types"
import { useState } from "react"

export const useFilters = () => {
    const [filters, setFilters] = useState({
        search: "",
        category: "",
        price: "",
    })
    const filteredProductsBySearch = (products: Product[]) => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(filters.search.toLowerCase())
        )
    }
    return {
        filters,
        setFilters,
        filteredProductsBySearch,
    }
}
