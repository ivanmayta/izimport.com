import { Suspense } from "react"
import Features from "@/components/sections/features"
import Hero from "@/components/sections/hero"
import SearchForm from "@/components/tracking/search-form"

export default function Home() {
    return (
        <>
            <Hero />
            <Suspense fallback={<div>Loading...</div>}>
                <SearchForm />
            </Suspense>
            <Features />
        </>
    )
}
