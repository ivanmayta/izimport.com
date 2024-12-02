import { PackageSearch } from "lucide-react"
import { Button } from "./ui/button"
function SearchForm({ onSubmit, inputRef, defaultValue, handleChange }) {
    return (
        <form
            onSubmit={onSubmit}
            className="w-full h-12 border-2 rounded-md max-w-3xl mx-auto flex items-center  gap-x-2"
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
            <Button>Rastrear envío</Button>
        </form>
    )
}

export default SearchForm
