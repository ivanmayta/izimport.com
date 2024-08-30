import TrackInput from "../components/TrackInput"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: "400" })
export default function Home() {
    return (
        <section className="mt-40 w-full h-full border-neutral-300 p-3 px-11 placeholder-neutral-500 focus:outline-none     focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 flex flex-col gap-4">
            <h1
                className={`${inter.className} mb-10 sm:mb-20 text-xl text-center sm:text-6xl dark:text-white text-black `}
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-orange-500">
                    Rastrea{" "}
                </span>
                y {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-orange-500">
                    Cotiza{" "}
                </span>
                tus envios de forma rapida y sencilla
            </h1>
            <TrackInput />
        </section>
    )
}
