import Tracking from "../components/Tracking"
import { Epilogue } from "next/font/google"

const epilogue = Epilogue({ subsets: ["latin"], weight: "500" })
export default function Home() {
    return (
        <section className="relative mt-40 w-full h-full border-neutral-300 p-3 px-12 placeholder-neutral-500 focus:outline-none     focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-700 flex flex-col gap-4">
            {/* <span className="absolute bottom-1/4 left-1/4 -translate-x-1/2 shadow-lg animate-float">
                <IconDhl className="w-16 fill-yellow-500"></IconDhl>
            </span> */}

            <h1
                className={`${epilogue.className}  mb-10 sm:mb-20 text-xl text-center sm:text-6xl dark:text-white text-black `}
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-orange-500">
                    Cotiza{" "}
                </span>
                y {""}
                <span className="text-transparent bg-clip-text bg-gradient-to-tr from-yellow-500 to-orange-500">
                    Rastrea{" "}
                </span>
                tus envios de forma rapida y sencilla
            </h1>
            <Tracking />    
        </section>
    )
}
