import { Card, Badge } from "@radix-ui/themes"
import { Button } from "@/components/ui/button"
import {
    ExternalLink,
    Store,
    MessageCircle,
    Instagram,
    Mail,
    Calendar,
} from "lucide-react"
import Link from "next/link"
import { getProducts, getProfile } from "@/lib/fetchers"
import { createServerSupabaseClient } from "@/lib/supbase-clerk/server"
import { verifyAuthUser } from "@/lib/dal"
import { Whatsapp } from "@/icons/whatsapp"

export default async function DashboardPage() {
    const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN
    console.log("baseDomain", baseDomain)
    const supabase = createServerSupabaseClient()
    const userId = await verifyAuthUser()
    const profile = await getProfile(supabase, userId)
    const { count: productCount = 0 } = await getProducts(profile?.id ?? "")
    const username = profile?.username
    const usedProducts = productCount
    const planLimit = 15
    const planUsagePct = Math.min(
        100,
        Math.round((usedProducts / planLimit) * 100)
    )

    return (
        <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-foreground">
                            Mi Negocio
                        </h1>
                        {username ? (
                            <Link
                                href={`${baseDomain}/${username}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="h-5 w-5 text-muted-foreground" />
                            </Link>
                        ) : (
                            <ExternalLink className="h-5 w-5 text-muted-foreground" />
                        )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Diciembre 1, 2024 - Diciembre 8, 2024</span>
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        <div className="grid gap-4 md:grid-cols-3">
                            <Card>
                                <div className="pb-2">
                                    <p className="text-sm font-medium">
                                        Productos
                                    </p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold">
                                        {productCount}
                                    </div>
                                </div>
                            </Card>

                            <Card className="border-dashed border-muted-foreground/30">
                                <div className="pb-2">
                                    <div className="text-sm font-medium flex items-center gap-2">
                                        Categorías
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-muted-foreground">
                                        --
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className="text-xs"
                                    >
                                        Próximamente
                                    </Badge>
                                </div>
                            </Card>

                            <Card className="border-dashed border-muted-foreground/30">
                                <div className="pb-2">
                                    <div className="text-sm font-medium flex items-center gap-2">
                                        Vistas del perfil
                                    </div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-muted-foreground">
                                        --
                                    </div>

                                    <Badge
                                        variant="outline"
                                        className="text-xs"
                                    >
                                        Próximamente
                                    </Badge>
                                </div>
                            </Card>
                        </div>

                        <Card>
                            <div className="flex items-center gap-2">
                                <Store className="h-5 w-5" />
                                <h3 className="text-lg font-semibold">
                                    Completa tu perfil de negocio
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Configura tu información comercial para mejorar
                                la experiencia de tus clientes
                            </p>
                            <div className="mt-3 space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="text-sm">Enlace</div>
                                    <div className="flex items-center gap-2">
                                        {username ? (
                                            <Link
                                                href={`${baseDomain}/${username}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm font-medium hover:underline"
                                            >
                                                /{username}
                                            </Link>
                                        ) : (
                                            <span className="text-sm text-muted-foreground">
                                                Pendiente
                                            </span>
                                        )}
                                        {username ? (
                                            <Badge className="bg-green-100 text-green-800">
                                                Completado
                                            </Badge>
                                        ) : (
                                            <Badge>Pendiente</Badge>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-sm">Nombre</div>
                                    <div className="flex items-center gap-2">
                                        {profile?.name ? (
                                            <span className="text-sm font-medium">
                                                {profile.name}
                                            </span>
                                        ) : (
                                            <span className="text-sm text-muted-foreground">
                                                Pendiente
                                            </span>
                                        )}
                                        {profile?.name ? (
                                            <Badge className="bg-green-100 text-green-800">
                                                Completado
                                            </Badge>
                                        ) : (
                                            <Badge>Pendiente</Badge>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="text-sm">WhatsApp</div>
                                    <div className="flex items-center gap-2">
                                        {profile?.whatsapp ? (
                                            <span className="text-sm font-medium">
                                                {profile.whatsapp}
                                            </span>
                                        ) : (
                                            <span className="text-sm text-muted-foreground">
                                                Pendiente
                                            </span>
                                        )}
                                        {profile?.whatsapp ? (
                                            <Badge className="bg-green-100 text-green-800">
                                                Completado
                                            </Badge>
                                        ) : (
                                            <Badge>Pendiente</Badge>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card className="border-secondary/20 bg-gradient-to-br from-secondary/10 to-transparent space-y-2">
                            <div className="flex items-center gap-2">
                                <Badge className="bg-secondary text-secondary-foreground">
                                    Beta
                                </Badge>
                                <h3 className="text-lg font-semibold">
                                    Aumenta tu límite
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Actualmente en versión beta. Para aumentar la
                                cantidad de productos, contáctanos
                            </p>
                            <div>
                                <Button
                                    asChild
                                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                                >
                                    <Link
                                        href="https://wa.me/51972677175"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Whatsapp className="h-6 w-6 mr-2" />
                                        Contactar por WhatsApp
                                    </Link>
                                </Button>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-lg font-semibold">
                                Plan Básico
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">
                                        Productos incluidos
                                    </span>
                                    <span className="font-medium">
                                        {planLimit}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">
                                        Productos usados
                                    </span>
                                    <span className="font-medium">
                                        {usedProducts}
                                    </span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div
                                        className="bg-primary h-2 rounded-full"
                                        style={{ width: `${planUsagePct}%` }}
                                    ></div>
                                </div>
                                <Button
                                    variant="outline"
                                    className="w-full bg-transparent"
                                >
                                    Mejorar plan
                                </Button>
                            </div>
                        </Card>

                        <Card>
                            <h3 className="text-lg font-semibold">
                                Recibe Actualizaciones
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Síguenos en las redes sociales para mantenerte
                                al día con las últimas características y
                                consejos
                            </p>
                            <div>
                                <div className="flex justify-center gap-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-12 w-12 bg-transparent"
                                    >
                                        <MessageCircle className="h-5 w-5 text-green-600" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-12 w-12 bg-transparent"
                                    >
                                        <Instagram className="h-5 w-5 text-pink-600" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="h-12 w-12 bg-transparent"
                                    >
                                        <Mail className="h-5 w-5 text-blue-600" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
