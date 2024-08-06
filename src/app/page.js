import ShipmentsDetails from "./components/ShipmentDetails"
import SearchTrackingInput from "./components/SearchTrackingInput"
export default function Home() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center max-w-2xl mx-auto  px-6">
                <section className="w-full py-24 md:py-36">
                    <SearchTrackingInput />
                </section>
            </main>
        </>
    )
}
