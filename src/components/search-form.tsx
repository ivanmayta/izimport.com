import { PackageSearch } from "lucide-react"
import { Button } from "./ui/button"
import Container from "@/components/custom/container"
function SearchForm({ onSubmit, inputRef, defaultValue, handleChange }) {
    return (
        <Container>
            <form
                onSubmit={onSubmit}
                className=" w-full h-12 border-2 rounded-lg max-w-3xl mx-auto flex items-center  gap-x-2 border-foreground/70 dark:border-foreground/20"
            >
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                        <PackageSearch className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                    </div>
                </div>

                <input
                    className="w-full h-full bg-background text-sm block  ps-10  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-input"
                    placeholder="Ingrese su numero de seguimiento..."
                    ref={inputRef}
                    onChange={handleChange}
                    defaultValue={defaultValue}
                    type="search"
                />
                <Button className="mr-1 rounded-sm">Rastrear envío</Button>
            </form>
        </Container>
    )
}

export default SearchForm
