import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import {
    ArrowUpRightFromSquareIcon,
    CreditCard,
    ShoppingBag,
    UserCircle,
} from "lucide-react"
import { getFrontEndUrl } from "@/lib/utils"
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

const BASE_URL = getFrontEndUrl()
export default async function SettingsProfilePage() {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.getUser()
    const user_id = data.user.id
    const { data: profile, error: profileError } = await supabase
        .from("profile")
        .select("*")
        .eq("user_id", user_id)
        .single()
    const username = profile?.username ? profile.username : ""
    return (
        <div>
            <header className="flex flex-col sm:flex-row  justify-between items-start sm:items-center mb-6">
                <DashboardHeader
                    heading="Dashboard"
                    text="Bienvenido a tu panel de Control"
                />
                <Link
                    href={`${BASE_URL}/b2b/${username}`}
                    target="_blank"
                    hidden={!username}
                >
                    <button className=" bg-orange-600/25 text-orange-600 flex py-1 mt-2 px-2 justify-center items-center rounded-md  hover:scale-105 transition-transform">
                        Ver sitio
                        <ArrowUpRightFromSquareIcon className="ml-2 size-4" />
                    </button>
                </Link>
            </header>
            <hr className="mb-6 mt-4" />
            {/*
                <p className="text-sm text-muted-foreground">
                {JSON.stringify(profile, null, 2)}
                </p>
            */}
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
                                    Incompleto
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Completa tu perfil para mejorar tu
                                    visibilidad
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
                                    Productos
                                </CardTitle>
                                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="text-2xl font-bold">0</div>
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
