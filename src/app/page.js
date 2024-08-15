import TrackInput from "../components/TrackInput"
export default function Home() {
    return (
        <section className="mt-40 w-full h-full border-neutral-300 bg-white p-3 px-11 placeholder-neutral-500 focus:outline-none     focus:ring-1 focus:ring-neutral-300  dark:bg-background dark:focus:ring-neutral-700 flex flex-col gap-4">
            <TrackInput />
        </section>
    )
}
