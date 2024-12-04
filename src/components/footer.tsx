import { GooglePlay } from "@/icons/google-play"
import { ArrowUpRight, Github } from "lucide-react"

function Footer() {
    return (
        <footer className="bg-trans border-t">
            <ul className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-center py-4">
                <li className="flex gap-4 flex-col">
                    <h3 className="font-bold">Descarga Disponible</h3>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.importa.facil"
                        className="flex gap-1 border px-3 py-2 rounded-md hover:bg-exchange"
                        target="_blank"
                    >
                        <GooglePlay /> Google Play
                    </a>
                </li>
                <li className="flex gap-2">
                    <span>Por</span>
                    <a
                        href="https://github.com/ivanmayta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-1 decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline "
                    >
                        <Github className="w-4" />
                        ivanmayta
                        <ArrowUpRight className="w-4 opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
                    </a>
                </li>
                <span>@2024</span>
            </ul>
        </footer>
    )
}
export default Footer
