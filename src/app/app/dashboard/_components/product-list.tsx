"use client"

import { Edit, Package, Search } from "lucide-react"

import { Button, Flex, Table } from "@radix-ui/themes"
import { TextField } from "@radix-ui/themes"
import { Product } from "@/types/tables.types"
import { useFilters } from "../_hooks/usefilters"
import FormProduct from "../products/form-product"
import { ButtonDeleteAlert } from "./button-delete-alert"

export default function ProductList({
    products = [],
}: {
    products: Product[]
}) {
    const { filters, setFilters, filteredProductsBySearch } = useFilters()
    const filteredProducts = filteredProductsBySearch(products)
    return (
        <>
            <div>
                {filteredProducts?.length === 0 ||
                filteredProducts === undefined ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <Package className="h-12 w-12 text-muted-foreground/50 mb-4" />
                        <h3 className="text-lg font-semibold">
                            No hay productos
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-md mt-2">
                            No se encontraron productos en tu inventario. Añade
                            tu primer producto para comenzar.
                        </p>
                        <FormProduct />
                    </div>
                ) : (
                    <>
                        <Flex
                            gap="3"
                            justify="between"
                            align="center"
                            className="py-4"
                            height="4"
                        >
                            <TextField.Root
                                size="3"
                                className="flex-grow"
                                placeholder="Buscar productos..."
                                value={filters.search}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setFilters({
                                        ...filters,
                                        search: e.target.value,
                                    })
                                }
                            >
                                <TextField.Slot>
                                    <Search className="h-4 w-4 text-gray-500" />
                                </TextField.Slot>
                            </TextField.Root>
                            <FormProduct />
                        </Flex>

                        <Table.Root variant="surface">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeaderCell>
                                        Imagen
                                    </Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>
                                        Nombre
                                    </Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>
                                        Precio
                                    </Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>
                                        Descripción
                                    </Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>
                                        Acciones
                                    </Table.ColumnHeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {filteredProducts?.map((product) => (
                                    <Table.Row align="center" key={product.id}>
                                        <Table.Cell>
                                            <div className="w-16 h-16 relative">
                                                <img
                                                    src={
                                                        product.image_url ||
                                                        "/placeholder.png"
                                                    }
                                                    alt={product.name}
                                                    className="object-cover rounded-md w-full h-full"
                                                />
                                            </div>
                                        </Table.Cell>
                                        <Table.Cell>{product.name}</Table.Cell>
                                        <Table.Cell>
                                            S/ {product.price.toFixed(2)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {product.description}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Flex gap="3">
                                                <ButtonDeleteAlert
                                                    id={product.id}
                                                />
                                                <Button
                                                    variant="soft"
                                                    color="gray"
                                                    className="!cursor-pointer"
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                            </Flex>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table.Root>
                    </>
                )}
            </div>
        </>
    )
}
