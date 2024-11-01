import { ArrowUpRight, Github } from "lucide-react"

function Footer() {
    return (
        <footer className="bg-trans flex justify-center">
            <a
                href="https://github.com/ivanmayta"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-1 decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
            >
                <span>Hecho por</span>
                <Github className="w-4" />
                <ArrowUpRight className="w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
            </a>
            <span>@2024</span>{" "}
        </footer>
    )
}
export default Footer
