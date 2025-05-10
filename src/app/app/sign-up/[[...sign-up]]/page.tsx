import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <SignUp />
        </section>
    )
}
