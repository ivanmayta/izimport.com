import ProductForm from "./product-form"

export default function ProductsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Productos</h3>
                <p className="text-sm text-muted-foreground">
                    Actualiza tus productos.
                </p>
                <ProductForm />
            </div>
        </div>
    )
}
