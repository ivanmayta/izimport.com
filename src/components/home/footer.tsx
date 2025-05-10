import { ArrowUpRight, Github } from "lucide-react"

function Footer() {
    return (
        <footer className=" border-t">
            <div className="w-full max-w-[1320px] mx-auto px-4">
                <ul className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center p-4">
                    <li className="flex gap-2">
                        <span>by</span>
                        <a
                            href="https://iverse.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex gap-1 decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline "
                        >
                            <Github className="w-4" />
                            iverse.dev
                            <ArrowUpRight className="w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
                        </a>
                    </li>
                    <span>@2024</span>
                </ul>
            </div>
        </footer>
    )
}
export default Footer
