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
        comission_platform: 0,
        comission_total: 0,
        total_transfer: 0,
        cost_administrative: 0,
        total: 0,
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
        const comission_total =
            (freight_dot_fob * formData.comission_platform) / 100
        const total_transfer = freight_dot_fob + comission_total
        const total = total_transfer + formData.cost_administrative
        setFormData((prevData) => ({
            ...prevData,
            fob_value: fob_value.toFixed(2),
            freight_dot_fob: freight_dot_fob.toFixed(2),
            comission_total: comission_total.toFixed(2),
            total_transfer: total_transfer.toFixed(2),
            total: total.toFixed(2),
        }))
    }, [
        formData.unit_price,
        formData.quantity,
        formData.international_freight,
        formData.comission_platform,
        formData.cost_administrative,
    ])

    const formatValue = (value) => (value === 0 ? "" : value.toString())

    return (
        <>
            <section className="mt-40 w-full h-full border-neutral-300 rounded-lg bg-white p-3 px-11 py-7 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-300 dark:bg-background/50 dark:focus:ring-neutral-700 flex flex-col gap-4">
                <h1 className="text-xl text-bold">Proceso Exonerado</h1>
                <p className="text-slate-400">
                    Importaciones hasta 200 dolares.
                </p>
                <form className="grid grid-cols-3 gap-5 items-center">
                    <label>
                        Precio Unitario:
                        <Input
                            name="unit_price"
                            type="number"
                            value={formatValue(formData.unit_price)}
                            onChange={handleChange}
                            aria-label="Precio Unitario"
                        />
                    </label>
                    <label>
                        Cantidad:
                        <Input
                            name="quantity"
                            type="number"
                            value={formatValue(formData.quantity)}
                            onChange={handleChange}
                            aria-label="Cantidad"
                        />
                    </label>

                    <LabelResults title="Valor FOB: ">
                        {formatValue(formData.fob_value)}
                    </LabelResults>

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
                    <LabelResults title="Flete + FOB: ">
                        {formatValue(formData.freight_dot_fob)}
                    </LabelResults>
                    <label className={"col-span-2"}>
                        Comision de plataforma:
                        <Input
                            name="comission_platform"
                            type="number"
                            value={formatValue(formData.comission_platform)}
                            onChange={handleChange}
                            aria-label="Comision de plataforma"
                            placeholder="2.99% - alibaba"
                        />
                    </label>
                    <LabelResults title="Comisión">
                        {formatValue(formData.comission_total)}
                    </LabelResults>

                    <LabelResults title="Transferir">
                        {formatValue(formData.total_transfer)}
                    </LabelResults>

                    <label className={"col-span-2"}>
                        Gastos Administrativos:
                        <Input
                            name="cost_administrative"
                            type="number"
                            value={formatValue(formData.cost_administrative)}
                            onChange={handleChange}
                            aria-label="Gastos Administrativos"
                            placeholder="11.8 - dhl"
                        />
                    </label>
                    <LabelResults title="Costo Total: ">
                        {formatValue(formData.total)}
                    </LabelResults>
                </form>
            </section>
        </>
    )
}

const LabelResults = ({ children, title }) => {
    return (
        <label className="col-start-3 col-end-4 text-center">
            {title}
            <p className="h-10 w-full rounded-md dark:bg-neutral-900/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium ">
                {children}
            </p>
        </label>
    )
}
