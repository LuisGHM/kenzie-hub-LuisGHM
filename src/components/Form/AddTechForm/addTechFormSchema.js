import { z } from "zod";

export const addTechFormSchema = z.object({
    title: z.string().nonempty("O nome da tecnologia é obrigatória"),
    status: z.string().nonempty("O seu nível é obrigatória"),
})