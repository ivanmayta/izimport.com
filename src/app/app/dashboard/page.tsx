import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { CreditCard, ShoppingBag, UserCircle } from "lucide-react"
import { DashboardHeader } from "@/components/app/dashboard-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getProducts, getProfile, getUser } from "@/lib/fetchers"

export default async function SettingsProfilePage() {
    const supabase = await createClient()
    const { user } = await getUser(supabase)
    const profile = await getProfile(supabase, user?.id)
    const { count = 0 } = await getProducts(supabase, profile?.id)

    return (
        <div>
            <header className="flex flex-col sm:flex-row  justify-between items-start sm:items-center mb-6">
                <DashboardHeader
                    heading="Dashboard"
                    text="Bienvenido a tu panel de Control"
                />
            </header>
            <hr className="mb-6 mt-4" />

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Resumen</TabsTrigger>
                    <TabsTrigger value="analytics" disabled>
                        Estadísticas
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="flex flex-col h-full">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Perfil
                                </CardTitle>
                                <UserCircle className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="text-2xl font-bold">
                                    {profile ? "Completo" : "Incompleto"}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Completa tu perfil para mejorar tu
                                    visibilidad
                                </p>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Button asChild className="mt-4 w-full">
                                    <Link href="/dashboard/profile">
                                        {profile
                                            ? "Gestionar Perfil"
                                            : "Completar Perfil"}
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="flex flex-col h-full">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Productos
                                </CardTitle>
                                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="text-2xl font-bold">
                                    {count}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Añade productos a tu catálogo
                                </p>
                                <p className="text-xs font-medium">
                                    Max. 15 Productos. (Pronto mas planes)
                                </p>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Button asChild className="mt-4 w-full">
                                    <Link href="/dashboard/products">
                                        Gestionar Productos
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="flex flex-col h-full">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Cuenta
                                </CardTitle>
                                <CreditCard className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="text-2xl font-bold">Activa</div>
                                <p className="text-xs text-muted-foreground">
                                    Gestiona los detalles de tu cuenta
                                </p>
                            </CardContent>
                            <CardFooter className="mt-auto">
                                <Button asChild className="w-full">
                                    <Link href="/dashboard/account">
                                        Gestionar Cuenta
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Estadísticas</CardTitle>
                            <CardDescription>
                                Aquí podrás ver las estadísticas de tu tienda
                                cuando tengas productos y visitas.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px] flex items-center justify-center text-muted-foreground">
                            No hay datos disponibles aún
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
