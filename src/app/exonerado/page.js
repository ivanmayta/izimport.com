"use client"
import { Input } from "../../components/ui/input"
import { useState, useEffect } from "react"

export default function Exonerado() {
    const [formData, setFormData] = useState({
        unit_price: 0,
        quantity: 0,
        fob_value: 0,
        international_freight: 0,
        freight_dot_fob: 0,
        comision_plataforma: 2.99,
        total_comision: 0,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        const numValue = value === "" ? 0 : parseFloat(value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: numValue,
        }))
    }

    useEffect(() => {
        const fob_value = formData.unit_price * formData.quantity
        const freight_dot_fob = fob_value + formData.international_freight
        const total_comision =
            (freight_dot_fob * formData.comision_plataforma) / 100
        setFormData((prevData) => ({
            ...prevData,
            fob_value,
            freight_dot_fob,
            total_comision,
        }))
    }, [
        formData.unit_price,
        formData.quantity,
        formData.international_freight,
        formData.comision_plataforma,
    ])

    const formatValue = (value) => (value === 0 ? "" : value.toString())

    return (
        <>
            <section className="mt-40 w-full h-full border-neutral-300 rounded-lg bg-white p-3 px-11 py-7 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-300 dark:bg-background/50 dark:focus:ring-neutral-700 flex flex-col gap-4">
                <h1 className="text-xl text-bold">Proceso Exonerado</h1>
                <p className="text-slate-400">
                    Importaciones menores a 200 dolares.
                </p>
                <form className="grid grid-cols-3 gap-5 items-center">
                    <label htmlFor="unit_price">
                        Precio Unitario:
                        <Input
                            name="unit_price"
                            type="number"
                            value={formatValue(formData.unit_price)}
                            onChange={handleChange}
                            aria-label="Precio Unitario"
                        />
                    </label>
                    <label htmlFor="quantity">
                        Cantidad:
                        <Input
                            name="quantity"
                            type="number"
                            value={formatValue(formData.quantity)}
                            onChange={handleChange}
                            aria-label="Cantidad"
                        />
                    </label>
                    <label htmlFor="resultado">
                        Valor Fob:
                        <Input
                            className="text-center"
                            value={formatValue(formData.fob_value)}
                            aria-laber="Valor Fob"
                            disabled
                        />
                    </label>
                    <label className={"col-span-2"}>
                        Flete Internacional:
                        <Input
                            name="international_freight"
                            type="number"
                            value={formatValue(formData.international_freight)}
                            onChange={handleChange}
                            aria-label="Flete Internacional"
                        />
                    </label>
                    <label htmlFor="resultado">
                        Fob + Flete
                        <Input
                            className="text-center"
                            value={formatValue(formData.freight_dot_fob)}
                            aria-laber="Valor Fob"
                            disabled
                        />
                    </label>
                    <label className={"col-span-2"}>
                        Comision de plataforma:
                        <Input
                            name="comision_plataforma"
                            type="number"
                            value={formatValue(formData.comision_plataforma)}
                            onChange={handleChange}
                            aria-label="Comision de plataforma"
                        />
                    </label>
                    <label htmlFor="resultado">
                        Total comision
                        <Input
                            className="text-center"
                            value={formatValue(formData.total_comision)}
                            aria-laber="Valor Fob"
                            disabled
                        />
                    </label>

                    <label className="col-start-3 col-end-4">
                        Total:
                        <h1 className="text-center">00.00</h1>
                    </label>
                </form>
            </section>
        </>
    )
}
