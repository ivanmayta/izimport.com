import ShipmentsDetails from "./components/ShipmentDetails"
import SearchTrackingInput from "./components/SearchTrackingInput"

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center max-w-2xl mx-auto  px-6">
            <h1>Welcome to the DHL API</h1>
            <SearchTrackingInput />
        </main>
    )
}
