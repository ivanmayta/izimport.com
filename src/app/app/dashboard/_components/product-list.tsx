"use client"

import { useState } from "react"
import { Edit } from "lucide-react"

import { Button, Flex, Table, Dialog } from "@radix-ui/themes"
import { Product } from "@/types/products"
import { ButtonDeleteAlert } from "./button-delete-alert"
import { SearchProduct } from "./search-product"
import { updateProduct } from "@/lib/actions"
import { ProductForm } from "../products/form-product"

export default function ProductList({
    products = [],
}: {
    products: Product[]
}) {
    const [selected, setSelected] = useState<Product | null>(null)
    const [open, setOpen] = useState(false)
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
                                            <Dialog.Root
                                                open={
                                                    open &&
                                                    selected?.id === product.id
                                                }
                                                onOpenChange={(v: boolean) => {
                                                    setOpen(v)
                                                    if (!v) setSelected(null)
                                                }}
                                            >
                                                <Dialog.Trigger>
                                                    <Button
                                                        variant="soft"
                                                        color="gray"
                                                        className="!cursor-pointer"
                                                        onClick={() => {
                                                            setSelected(product)
                                                            setOpen(true)
                                                        }}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                </Dialog.Trigger>
                                                <Dialog.Content>
                                                    <Dialog.Title>
                                                        Editar producto
                                                    </Dialog.Title>
                                                    {selected && (
                                                        <ProductForm
                                                            product={selected}
                                                            action={
                                                                updateProduct
                                                            }
                                                            submitLabel="Guardar cambios"
                                                            onSuccess={() => {
                                                                setOpen(false)
                                                                setSelected(
                                                                    null
                                                                )
                                                            }}
                                                        />
                                                    )}
                                                </Dialog.Content>
                                            </Dialog.Root>
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
