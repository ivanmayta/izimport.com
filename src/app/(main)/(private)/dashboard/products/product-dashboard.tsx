"use client"

import { useState } from "react"
import {
    ChevronRight,
    Plus,
    Pencil,
    Search,
    Trash2,
    Package,
    ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ProductForm from "./product-form"
import { deleteProductAction } from "@/actions/supabase"

export default function ProductDashboard({ user, products = [] }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeView, setActiveView] = useState("list") // "list" o "add"

    // Filtrar productos según la búsqueda
    const filteredProducts =
        products?.length > 0
            ? products.filter(
                  (product) =>
                      product.name
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase()) ||
                      product.description
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
              )
            : []

    return (
        <div className="space-y-6">
            {/* Header con breadcrumb */}
            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                <div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>Dashboard</span>
                        <ChevronRight className="h-4 w-4" />
                        <span className="font-medium text-foreground">
                            Productos
                        </span>
                    </div>
                </div>
                {activeView === "add" && (
                    <Button
                        variant="outline"
                        onClick={() => setActiveView("list")}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" /> Volver a
                        productos
                    </Button>
                )}
            </div>

            {activeView === "list" && (
                <>
                    {/* Barra de búsqueda y filtros */}
                    <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                        <div className="relative w-full md:w-96 ">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Buscar productos..."
                                className="w-full pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        {/* Dropdowns de filtros */}

                        {/*
                            <div className="flex items-center space-x-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            <Filter className="mr-2 h-4 w-4" />
                                            Filtrar
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>
                                            Filtrar por precio
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            Menor a $50
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            $50 - $100
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Mayor a $100
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            <ArrowUpDown className="mr-2 h-4 w-4" />
                                            Ordenar
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>
                                            Ordenar por
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            Nombre (A-Z)
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Nombre (Z-A)
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Precio (menor a mayor)
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Precio (mayor a menor)
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            */}

                        <Button onClick={() => setActiveView("add")}>
                            <Plus className="mr-2 h-4 w-4" /> Añadir producto
                        </Button>
                    </div>

                    {/* Tabla de productos */}
                    <Card className="border-0">
                        <CardHeader className="px-0">
                            <CardTitle>Productos</CardTitle>
                            <CardDescription>
                                Todos tus productos disponibles en el
                                inventario.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-0">
                            {filteredProducts.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <Package className="h-12 w-12 text-muted-foreground/50 mb-4" />
                                    <h3 className="text-lg font-semibold">
                                        No hay productos
                                    </h3>
                                    <p className="text-sm text-muted-foreground max-w-md mt-2">
                                        No se encontraron productos en tu
                                        inventario. Añade tu primer producto
                                        para comenzar.
                                    </p>
                                    <Button
                                        className="mt-6"
                                        onClick={() => setActiveView("add")}
                                    >
                                        <Plus className="mr-2 h-4 w-4" /> Añadir
                                        primer producto
                                    </Button>
                                </div>
                            ) : (
                                <div className="rounded-md border">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Imagen</TableHead>
                                                <TableHead>Nombre</TableHead>
                                                <TableHead className="hidden md:table-cell">
                                                    Descripción
                                                </TableHead>
                                                <TableHead className="text-right">
                                                    Precio
                                                </TableHead>
                                                <TableHead className="text-right">
                                                    Acciones
                                                </TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {filteredProducts.map((product) => (
                                                <TableRow key={product.id}>
                                                    <TableCell>
                                                        <img
                                                            src={
                                                                product.image_url ||
                                                                "/placeholder.svg"
                                                            }
                                                            alt={product.name}
                                                            className="h-10 w-10 rounded-md object-cover"
                                                        />
                                                    </TableCell>
                                                    <TableCell className="font-medium">
                                                        {product.name}
                                                    </TableCell>
                                                    <TableCell className="hidden md:table-cell max-w-xs truncate">
                                                        {product.description}
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        $
                                                        {product.price.toFixed(
                                                            2
                                                        )}
                                                    </TableCell>
                                                    <TableCell className="text-right">
                                                        <div className="flex justify-end gap-2">
                                                            <Dialog>
                                                                <DialogTrigger
                                                                    asChild
                                                                >
                                                                    <Button
                                                                        variant="outline"
                                                                        size="icon"
                                                                        disabled
                                                                    >
                                                                        <Pencil className="h-4 w-4" />
                                                                    </Button>
                                                                </DialogTrigger>
                                                                <DialogContent>
                                                                    <DialogHeader>
                                                                        <DialogTitle>
                                                                            Editar
                                                                            producto
                                                                        </DialogTitle>
                                                                        <DialogDescription>
                                                                            Actualiza
                                                                            los
                                                                            detalles
                                                                            del
                                                                            producto
                                                                            aquí.
                                                                        </DialogDescription>
                                                                    </DialogHeader>
                                                                    {/* Aquí iría tu componente ProductForm */}
                                                                    <div className="py-6 text-muted-foreground">
                                                                        Componente
                                                                        ProductForm
                                                                        con
                                                                        datos
                                                                        del
                                                                        producto
                                                                    </div>
                                                                </DialogContent>
                                                            </Dialog>
                                                            <AlertDialog>
                                                                <AlertDialogTrigger
                                                                    asChild
                                                                >
                                                                    <Button
                                                                        variant="outline"
                                                                        size="icon"
                                                                        className="text-destructive"
                                                                    >
                                                                        <Trash2 className="h-4 w-4" />
                                                                    </Button>
                                                                </AlertDialogTrigger>
                                                                <AlertDialogContent>
                                                                    <AlertDialogHeader>
                                                                        <AlertDialogTitle>
                                                                            ¿Estás
                                                                            seguro?
                                                                        </AlertDialogTitle>
                                                                        <AlertDialogDescription>
                                                                            Esta
                                                                            acción
                                                                            no
                                                                            se
                                                                            puede
                                                                            deshacer.
                                                                            Esto
                                                                            eliminará
                                                                            permanentemente
                                                                            el
                                                                            producto.
                                                                        </AlertDialogDescription>
                                                                    </AlertDialogHeader>
                                                                    <AlertDialogFooter>
                                                                        <AlertDialogCancel>
                                                                            Cancelar
                                                                        </AlertDialogCancel>
                                                                        <AlertDialogAction
                                                                            onClick={async () => {
                                                                                await deleteProductAction(
                                                                                    product.id
                                                                                )
                                                                            }}
                                                                            className="bg-destructive text-destructive-foreground"
                                                                        >
                                                                            Eliminar
                                                                        </AlertDialogAction>
                                                                    </AlertDialogFooter>
                                                                </AlertDialogContent>
                                                            </AlertDialog>
                                                        </div>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </CardContent>
                        <CardFooter className="flex items-center justify-between px-0">
                            <p className="text-sm text-muted-foreground">
                                Mostrando {filteredProducts.length}{" "}
                                {filteredProducts.length === 1
                                    ? "producto"
                                    : "productos"}
                            </p>
                            {filteredProducts.length > 0 && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setActiveView("add")}
                                >
                                    <Plus className="mr-2 h-4 w-4" /> Añadir
                                    producto
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                </>
            )}

            {activeView === "add" && (
                <Card className="border-0">
                    <CardHeader className="px-0">
                        <CardTitle>Añadir nuevo producto</CardTitle>
                        <CardDescription>
                            Completa el formulario para añadir un nuevo producto
                            a tu inventario.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                        <ProductForm
                            user={user}
                            setActiveView={setActiveView}
                        />
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button
                            variant="outline"
                            className="mr-2"
                            onClick={() => setActiveView("list")}
                        >
                            Cancerlar
                        </Button>
                    </CardFooter>
                </Card>
            )}
        </div>
    )
}
