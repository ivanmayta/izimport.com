import ShipmentsDetails from "../components/ShipmentDetails"
import TrackInput from "../components/TrackInput"
import { MainNav } from "@/components/MainNav"
export default function Home() {
    return (
        <main className=" flex flex-col max-w-2xl mx-auto h-screen">
            <section className="">
                <MainNav />
            </section>

            <section className=" sticky top-[74px] w-full  border-neutral-300 bg-white p-3 px-11 placeholder-neutral-500 focus:outline-none     focus:ring-1 focus:ring-neutral-300  dark:bg-background dark:focus:ring-neutral-700">
                <TrackInput />
            </section>
        </main>
    )
}
