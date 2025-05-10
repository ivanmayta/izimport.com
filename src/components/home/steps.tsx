export default function Steps() {
    return (
        <section className="max-w-7xl mx-auto p-4 py-20">
            <div className="sm:my-16 lg:my-20 text-center pb-8 sm:pb-0">
                <h2 className=" text-3xl sm:text-4xl font-bold pb-2">
                    Crea tu <span className="text-orange-600">catálogo</span> de
                    productos en minutos
                </h2>
                <span className=" text-2xl font-normal text-zinc-700">
                    Dashboard para administrar tu tienda
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-md">
                    <h2 className="text-xl font-bold">
                        Crear un perfil de Negocio
                    </h2>
                    <p className="font-light">
                        Información publica que se mostrara en tu sitio
                        personalizado.
                    </p>
                    <img
                        className="pt-4"
                        src="/images/perfil.png"
                        alt="Perfil de Negocio"
                    />
                </div>
                <div className="bg-white p-4 rounded-md">
                    <h2 className="text-xl font-bold">Añade productos</h2>
                    <p className="font-light">
                        Complete la información de su producto, incluyendo
                        nombre, descripción, precio y foto.
                    </p>
                    <img
                        className="pt-4"
                        src="/images/productos.png"
                        alt="Perfil de Negocio"
                    />
                </div>
                <div className="bg-white p-4 rounded-md">
                    <h2 className="text-xl font-bold">Comparte tu enlace</h2>
                    <p className="font-light">
                        Tiendo con carrito de compras para recibir pedidos por
                        whatsapp.
                    </p>
                    <span>
                        Demo:
                        <a
                            target="_blank"
                            className="font-semibold text-orange-600"
                            href="https://izimport.com/izimport"
                        >
                            izimport.com/izimport
                        </a>
                    </span>
                    <img
                        className="pt-4"
                        src="/images/tienda.png"
                        alt="Perfil de Negocio"
                    />
                </div>
            </div>
        </section>
    )
}
