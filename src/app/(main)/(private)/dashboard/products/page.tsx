import { createClient } from "@/utils/supabase/server"
import ProductForm from "./product-form"
import ProductDashboard from "./product-dashboard"

export default async function ProductsPage() {
    const supabase = await createClient()
    const { data: dataUser } = await supabase.auth.getUser()
    const { data: dataProfile, error: errorProfile } = await supabase
        .from("profile")
        .select("*")
        .eq("user_id", dataUser.user.id)
        .single()

    const products = await supabase
        .from("product")
        .select("*")
        .eq("perfil_id", dataProfile?.data?.id)
        .order("created_at", { ascending: false })

    console.log("PERFIL", dataProfile)
    console.log("PRODUCTS", products)

    return (
        <>
            {dataProfile ? (
                <div>
                    <div>
                        <h3 className="text-2xl font-bold">
                            Gestión de Productos
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Gestiona tu catálogo de productos desde aquí.
                        </p>
                    </div>
                    <hr className="mb-6 mt-4" />
                    <div>
                        {/* 
                <ProductForm user={data.user} />
            */}
                        <ProductDashboard
                            user={dataUser.user}
                            products={products.data}
                        />
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <h3 className=" text-lg">
                        Necesitas crear un Perfil de Negocio antes.
                    </h3>
                </div>
            )}
        </>
    )
}
