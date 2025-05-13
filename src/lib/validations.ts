import { z } from "zod"
const createProfileFormSchema = z.object({
    name: z
        .string()
        .min(4, { message: "El nombre debe ser de al menos 4 caracteres" })
        .max(60, { message: "El nombre no debe ser mayor a 60 caracteres" }),
    description: z
        .string()
        .min(4, {
            message: "La descripción debe ser de al menos 4 caracteres.",
        })
        .max(160, {
            message: "La descripción no debe ser mayor a 160 caracteres.",
        }),
    RUC: z.string().optional(),
    username: z
        .string()
        .min(4, {
            message: "El nombre de usuario debe ser de al menos 4 caracteres.",
        })
        .max(30, {
            message: "El nombre de usuario no debe ser mayor a 30 caracteres.",
        })
        .regex(
            /^[a-z0-9]+(-[a-z0-9]+)*$/,
            "El nombre de usuario solo puede contener letras minúsculas, números y guiones, sin espacios ni guiones al inicio o final."
        ),
    whatsapp: z
        .string()
        .min(8, {
            message: "El numero de telefono debe tener al menos 8 digitos",
        })
        .max(15, "El numero de telefono no debe ser mayor a 15 digitos"),
    address: z
        .string()
        .max(160, {
            message: "La dirección no debe ser mayor a 160 caracteres.",
        })
        .min(4, {
            message: "La dirección debe ser de al menos 4 caracteres.",
        }),
    social_urls: z.object({
        facebook: z
            .string()
            .url({
                message: "La URL de Facebook no es válida",
            })
            .optional()
            .or(z.literal("")),
        instagram: z
            .string()
            .url({
                message: "La URL de Instagram no es válida",
            })
            .optional()
            .or(z.literal("")),
        tiktok: z
            .string()
            .url({
                message: "La URL de TikTok no es válida",
            })
            .optional()
            .or(z.literal("")),
    }),
})

const productFormSchema = z.object({
    name: z
        .string()
        .min(4, {
            message: "El nombre debe ser de al menos 4 caracteres",
        })
        .max(100, {
            message: "El nombre no debe ser mayor a 100 caracteres",
        }),
    description: z
        .string()
        .min(2, {
            message: "La descripción debe ser de al menos 2 caracteres",
        })
        .max(230, {
            message: "La descripción no debe ser mayor a 230 caracteres",
        }),
    price: z.number().min(0, { message: "El precio debe ser mayor a 0" }),
    image_url: z.array(z.string().url({
        message: "La URL de la imagen no es válida",
    })),
})
export {
    createProfileFormSchema as PROFILE_FORM_SCHEMA,
    productFormSchema as PRODUCT_FORM_SCHEMA,
}
