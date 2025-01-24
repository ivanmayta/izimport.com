import { addProduct } from "@/actions/supabase"
import { Button } from "@/components/ui/button"

export default function ProductForm () {
    return (
        <form action={addProduct}>
            <Button type="submit">Añadir Producto</Button>
        </form>
    )
}
