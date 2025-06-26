import { getProducts, getProfile } from "@/lib/fetchers"
import { createServerSupabaseClient } from "@/lib/supbase-clerk/server"
import { auth } from "@clerk/nextjs/server"
import { Text, Card } from "@radix-ui/themes"
import { CreditCard } from "lucide-react"
import { ShoppingBag, UserCircle } from "lucide-react"
// import Link from "next/link"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
export async function CardsDashboard() {
    const { userId } = await auth()
    if (!userId) {
        redirect("/sign-in")
    }
    const supabase = createServerSupabaseClient()
    const profile = await getProfile(supabase, userId)
    const { count = 0 } = await getProducts(profile?.id ?? "")
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="!flex !flex-col">
                <div className="flex flex-row items-center justify-between space-y-0 ">
                    <Text className="text-sm font-medium">Perfil</Text>
                    <UserCircle className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-grow pb-6">
                    <div className="text-2xl font-bold">
                        {profile ? "Completo" : "Incompleto"}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Completa tu perfil para mejorar tu visibilidad
                    </p>
                </div>
                <Button variant="default" asChild className="mt-auto">
                    <Link href="/dashboard/profile">
                        {profile ? "Gestionar Perfil" : "Completar Perfil"}
                    </Link>
                </Button>
            </Card>
            <Card className="!flex !flex-col">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Text className="text-sm font-medium">Productos</Text>
                    <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-grow pb-6">
                    <div className="text-2xl font-bold">{count}</div>
                    <p className="text-xs text-muted-foreground">
                        Añade productos a tu catálogo
                    </p>
                    <p className="text-xs font-medium">
                        Max. 15 Productos. (Pronto mas planes)
                    </p>
                </div>
                <Button variant="default" asChild className="mt-auto">
                    <Link href="/dashboard/products">Gestionar Productos</Link>
                </Button>
            </Card>
            <Card className="!flex !flex-col">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <Text className="text-sm font-medium">Cuenta</Text>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-grow pb-6">
                    <div className="text-2xl font-bold">Activa</div>
                    <p className="text-xs text-muted-foreground">
                        Gestiona los detalles de tu cuenta
                    </p>
                </div>
                <Button variant="default" asChild className="mt-auto">
                    <Link href="/dashboard/account">Gestionar Cuenta</Link>
                </Button>
            </Card>
        </div>
    )
}
