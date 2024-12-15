import Container from "@/components/custom/container"
import SearchForm from "@/components/tracking/search-form"
import { useSearchParams } from "next/navigation"

export default function Search({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const { trackingNumber } = searchParams
    console.log(trackingNumber)
    return (
        <Container className="py-20">
            <h1>Tracking Number</h1>
            <SearchForm />
        </Container>
    )
}
