import { IconPackageSearch } from "../icons/icon-pkg-search"

function SearchForm({ children, onSubmit }) {
    return (
        <form
            onSubmit={onSubmit}
            className="flex items-center mx-auto w-full gap-x-2"
        >
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
                    <IconPackageSearch className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                </div>
            </div>
            {children}
        </form>
    )
}

export default SearchForm
