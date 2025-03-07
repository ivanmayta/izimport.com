import { createClient } from "@/utils/supabase/server"
import ProductForm from "./product-form"
import ProductDashboard from "./product-dashboard"

export default async function ProductsPage() {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    const perfil = await supabase
        .from("profile")
        .select("*")
        .eq("user_id", data.user.id)
        .single()
    const products = await supabase
        .from("product")
        .select("*")
        .eq("perfil_id", perfil.data.id)
        .order("created_at", { ascending: false })
    
    console.log("PERFIL", perfil)
    console.log("PRODUCTS", products)
    return (
        <div className="space-y-6">
            <div>
                {/* 
                    <ProductForm user={data.user} />
                */}
                <ProductDashboard user={data.user} products={products.data} />
            </div>
        </div>
    )
}
