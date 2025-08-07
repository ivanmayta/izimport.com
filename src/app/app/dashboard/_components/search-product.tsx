import { ReactNode } from "react"
import FormProduct from "../products/form-product"
import { Package, Search } from "lucide-react"
import { Flex, TextField } from "@radix-ui/themes"
import { useFilters } from "../_hooks/usefilters"
import { Product } from "@/types/products"

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

    return (
        <div className="space-y-4">
            <Flex
                gap="3"
                justify="between"
                align="center"
                className="py-4 flex-col md:flex-row w-full"
                height="4"
            >
                <TextField.Root
                    size="3"
                    className="flex-grow"
                    placeholder={placeholder}
                    value={filters.search}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFilters({ ...filters, search: e.target.value })
                    }
                >
                    <TextField.Slot>
                        <Search className="h-4 w-4 text-gray-500" />
                    </TextField.Slot>
                </TextField.Root>
                <FormProduct />
            </Flex>

            {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Package className="h-12 w-12 text-muted-foreground/50 mb-4" />
                    <h3 className="text-lg font-semibold">{emptyMessage}</h3>
                    <p className="text-sm text-muted-foreground max-w-md mt-2">
                        No se encontraron productos en tu inventario. Añade tu
                        primer producto para comenzar.
                    </p>
                </div>
            ) : filteredItems.length === 0 ? (
                <p className="text-center text-gray-500">{noResultsMessage}</p>
            ) : (
                children(filteredItems)
            )}
        </div>
    )
}
