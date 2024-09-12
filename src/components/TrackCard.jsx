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
    const { id, service, origin, destination, status } = shipmentDetails
    return (
        <Card>
            <CardHeader>
                <CardTitle>{status.description}</CardTitle>
                <CardDescription>Código de rastreo: {id}</CardDescription>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <article className="flex flex-col items-center space-y-2 relative">
                        <p className="font-bold self-start">
                            <span className="text-black dark:text-white">
                                {"Origen: "}
                            </span>
                            {origin.address.addressLocality}
                        </p>
                        <PaperPlaneIcon className="w-6 h-6" />
                        <p className="font-bold self-end">
                            <span className="text-black dark:text-white">
                                {"Destino: "}
                            </span>
                            {destination.address.addressLocality}
                        </p>
                    </article>
                </CardDescription>
            </CardContent>
        </Card>
    )
}
