import Container from "@/components/custom/container"
import SearchForm from "@/components/tracking/search-form"
import { Suspense } from "react"
import { Metadata } from "next"
export default function Search() {
    return (
        <Container className="py-20 flex flex-col gap-8">
            <h1 className="text-center text-5xl">Rastrea tus envios de: Dhl</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <SearchForm />
            </Suspense>
        </Container>
    )
}
