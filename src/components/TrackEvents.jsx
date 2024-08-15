import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
const TrackEvents = ({ events }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Detalles del envio</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="relative border-s border-gray-200 dark:border-gray-700 max-w-[600px] m-3">
                        {events.map((event, index) => {
                            return (
                                <li className="mb-10 ms-4" key={index}>
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        {event.timestamp}
                                    </time>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {event.description}
                                    </h3>
                                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        {event.location.address.addressLocality}
                                    </p>
                                </li>
                            )
                        })}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}

export default TrackEvents
