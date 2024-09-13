import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { PaperPlaneIcon } from "@radix-ui/react-icons"

export default function TrackCard({ shipmentDetails }) {
    const { id, origin, destination, status } = shipmentDetails

    const origen = origin.address.addressLocality
    const destino = destination.address.addressLocality
    const { description } = status
    return (
        <Card>
            <CardHeader>
                <CardTitle>{description}</CardTitle>
                <CardDescription>Código de rastreo: {id}</CardDescription>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <article className="flex flex-col items-center space-y-2 relative">
                        <p className="font-bold self-start">
                            <span className="text-black dark:text-white">
                                Origen:{" "}
                            </span>
                            {origen}
                        </p>
                        <PaperPlaneIcon className="w-6 h-6" />
                        <p className="font-bold self-end">
                            <span className="text-black dark:text-white">
                                Destino:{" "}
                            </span>
                            {destino}
                        </p>
                    </article>
                </CardDescription>
            </CardContent>
        </Card>
    )
}
