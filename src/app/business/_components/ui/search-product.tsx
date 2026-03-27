"use client"

import { ReactNode } from "react"
import { Package, Search, X } from "lucide-react"
import { Product } from "@/types/products"
import { useFilters } from "@/app/business/_store/usefilters"

interface SearchProps<T> {
    items: T[]
    placeholder: string
    emptyMessage: string
    noResultsMessage: string
    children: (filteredItems: Product[]) => ReactNode
}

export function SearchProduct<T>({
    items,
    placeholder,
    emptyMessage,
    noResultsMessage,
    children,
}: SearchProps<T>) {
    const { filters, setFilters, filteredProductsBySearch } = useFilters()

    const filteredItems = filteredProductsBySearch(items as Product[])
    const hasSearch = filters.search.trim().length > 0

    return (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
            {/* Header row */}
            <div className="flex items-center gap-4 mb-6">
                <div className="flex-1">
                    <h2 className="text-base font-bold text-zinc-950 tracking-tight">
                        Productos
                        {items.length > 0 && (
                            <span className="ml-2 text-xs font-semibold text-zinc-400 tabular-nums">
                                {filteredItems.length}
                                {hasSearch && ` de ${items.length}`}
                            </span>
                        )}
                    </h2>
                </div>

                {/* Search */}
                <div className="relative w-full max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
                    <input
                        type="text"
                        placeholder={placeholder}
                        value={filters.search}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFilters({ ...filters, search: e.target.value })
                        }
                        className="w-full text-sm pl-9 pr-8 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-950/10 focus:border-zinc-400 transition-all"
                    />
                    {hasSearch && (
                        <button
                            onClick={() => setFilters({ ...filters, search: "" })}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 transition-colors"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    )}
                </div>
            </div>

            {/* Content */}
            {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
                        <Package className="w-7 h-7 text-zinc-400" />
                    </div>
                    <p className="text-sm font-semibold text-zinc-600">{emptyMessage}</p>
                    <p className="text-xs text-zinc-400 mt-1 max-w-xs">
                        Esta tienda aún no tiene productos disponibles.
                    </p>
                </div>
            ) : filteredItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-100 flex items-center justify-center mb-4">
                        <Search className="w-6 h-6 text-zinc-400" />
                    </div>
                    <p className="text-sm font-semibold text-zinc-600">{noResultsMessage}</p>
                    <p className="text-xs text-zinc-400 mt-1">
                        Intenta con otro término de búsqueda.
                    </p>
                </div>
            ) : (
                children(filteredItems)
            )}
        </section>
    )
}
