import { Card, CardContent } from "@/components/ui/card"

export default function TrackErrorResponse({ text }: { text: string }) {
    return (
        <Card className="w-full max-w-3xl mx-auto p-6">
            <CardContent className="p-0">
                <p className="text-center">{text}</p>
            </CardContent>
        </Card>
    )
}
