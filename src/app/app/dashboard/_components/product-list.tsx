"use client"

import { Edit } from "lucide-react"

import { Button, Flex, Table } from "@radix-ui/themes"
import { Product } from "@/types/products"
import { ButtonDeleteAlert } from "./button-delete-alert"
import { SearchProduct } from "./search-product"

export default function ProductList({
    products = [],
}: {
    products: Product[]
}) {
    return (
        <>
            <SearchProduct
                items={products}
                placeholder="Buscar productos..."
                emptyMessage="No hay productos"
                noResultsMessage="No se encontraron productos"
            >
                {(filteredItems) => (
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
                            {filteredItems?.map((product) => (
                                <Table.Row align="center" key={product.id}>
                                    <Table.Cell>
                                        <div className="w-16 h-16 relative">
                                            <img
                                                src={
                                                    product.image_url[0] ||
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
                                                id={product.id.toString()}
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
                )}
            </SearchProduct>
        </>
    )
}
