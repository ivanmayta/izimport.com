import { SignIn } from "@clerk/nextjs"

export default function Page() {
    return (
        <>
            <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <SignIn />
            </section>
        </>
    )
}
