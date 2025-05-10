"use client"
import { handleAction } from "@/lib/actions"
import { Button, Card, Text, TextField } from "@radix-ui/themes"

export default function FormProfile() {
    return (
        <>
            <Card variant="ghost">
                <div className="flex flex-col  my-6">
                    <Text as="div" size="4" weight="medium">
                        Información de tu Negocio
                    </Text>
                    <Text as="span" size="2" color="gray" className="mb-3">
                        Esta información será visible para los clientes.
                    </Text>
                </div>
                <form action={handleAction}>
                    <fieldset className="flex flex-col gap-4 mb-3">
                        <Text as="label" className="font-medium">
                            Nombre del Negocio
                            <TextField.Root
                                name="name"
                                placeholder="Enter text here"
                                defaultValue={"Mi negocio"}
                            />
                            <Text as="p" size="1" color="gray" trim="end">
                                Mino 4 caracteres
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            Descripción del Negocio
                            <TextField.Root
                                name="description"
                                placeholder="Enter text here"
                            />
                            <Text as="p" size="1" color="gray" trim="end">
                                Mino 4 caracteres
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            Enlace de la tienda
                            <TextField.Root
                                name="username"
                                placeholder="izimport"
                            >
                                <TextField.Slot
                                    className="font-medium"
                                    color="tomato"
                                >
                                    izimport.com/
                                </TextField.Slot>
                            </TextField.Root>
                            <Text as="p" size="1" color="gray" trim="end">
                                {""}
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            RUC
                            <TextField.Root
                                name="RUC"
                                placeholder="Numero de RUC"
                            />
                            <Text as="p" size="1" color="gray">
                                {""}
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            WhatsApp
                            <TextField.Root
                                name="whatsapp"
                                placeholder="Ingrese su número de WhatsApp"
                            />
                            <Text as="p" size="1" color="gray" trim="end">
                                {" "}
                            </Text>
                        </Text>
                        <Text as="label" className="font-medium">
                            Dirección
                            <TextField.Root
                                name="address"
                                placeholder="Ingrese su dirección"
                            />
                            <Text as="p" size="1" color="gray" trim="end">
                                {" "}
                            </Text>
                        </Text>
                    </fieldset>
                    <Button color="orange">Crear Perfíl</Button>
                </form>
            </Card>
        </>
    )
}
