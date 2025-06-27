"use client"
import { deleteProductAction } from "@/lib/actions"
import { Button, Flex } from "@radix-ui/themes"
import { AlertDialog } from "@radix-ui/themes"
import { Trash2 } from "lucide-react"
import { useTransition } from "react"
import { toast } from "sonner"
export function ButtonDeleteAlert({ id }: { id: string }) {
    const [isPending, startTransition] = useTransition()

    const handleDelete = () => {
        startTransition(async () => {
            const { success } = await deleteProductAction(id)
            
            if (success) {
                toast.success("Producto eliminado exitosamente!")
            } else {
                toast.error("Error al eliminar el producto")
            }
        })
    }
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                <Button variant="soft" color="red" className="!cursor-pointer">
                    <Trash2 className="h-4 w-4" />
                </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content maxWidth="450px">
                <AlertDialog.Title>Eliminar producto</AlertDialog.Title>
                <AlertDialog.Description size="2">
                    Estás seguro de querer eliminar este producto?
                </AlertDialog.Description>

                <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                        <Button variant="soft" color="gray">
                            Cancelar
                        </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                        <Button
                            variant="solid"
                            color="red"
                            onClick={handleDelete}
                            disabled={isPending}
                        >
                            Eliminar
                        </Button>
                    </AlertDialog.Action>
                </Flex>
            </AlertDialog.Content>
        </AlertDialog.Root>
    )
}
