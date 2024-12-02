import { Tracking } from "@components/shipment/tracking-dhl"
import { Suspense } from "react"
export default function Rastrea() {
    return (
        <section className="mt-40 w-full h-full border-neutral-300 p-3 px-12 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 flex flex-col gap-4">
            <h1 className="mb-10  text-center text-5xl dark:text-white text-black">
                Rastrea tus envios de: Dhl
            </h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Tracking />
            </Suspense>
        </section>
    )
}
