import SignInButton from "@/components/app/(login)/login-button"

export default async function LoginPage() {
    return (
        <div className="mx-5 border border-stone-400 py-10 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:shadow-md dark:border-stone-700">
            <img
                alt="Logo izimport.com"
                className="relative mx-auto h-12 w-auto dark:scale-110 dark:rounded-full dark:border dark:border-stone-400"
                src="/izimport.webp"
            />
            <h1 className="mt-6 text-center font-cal text-3xl dark:text-white">
                Bienvenido
            </h1>
            <p className="mt-2 text-center text-sm text-stone-600 dark:text-stone-400">
                Administra tu tienda online con facilidad
                <br />
                <a
                    className="font-medium text-black hover:text-stone-800 dark:text-stone-300 dark:hover:text-stone-100"
                    href="https://vercel.com/blog/platforms-starter-kit"
                    rel="noreferrer"
                    target="_blank"
                >
                    Empieza a vender en minutos con una cuenta gratuita
                </a>
            </p>

            <div className="mx-auto mt-4 w-11/12 max-w-xs sm:w-full">
                <SignInButton />
            </div>
        </div>
    )
}
