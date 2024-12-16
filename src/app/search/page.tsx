import Container from "@/components/custom/container"
import SearchForm from "@/components/tracking/search-form"
import { Suspense } from "react"

export default function Search() {
    return (
        <Container className="pt-20 flex flex-col gap-8">
            <h1 className="text-center text-5xl">Tracking Number</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <SearchForm />
            </Suspense>
        </Container>
    )
}
