import MenuNavigation from "@components/menu-navigation"
import MenuBar from "@components/menu-bar"

function Header() {
    return (
        <header className="w-full fixed z-50 backdrop-blur-md ">
            <MenuBar />
            <MenuNavigation className="mx-auto max-w-4xl flex justify-start bg-transparent" />
        </header>
    )
}

export default Header
