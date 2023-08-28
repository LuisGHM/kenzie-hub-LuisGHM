import { z } from "zod";

export const loginFormScheme = z.object({
    email: z.string().nonempty("O e-mail é obrigatória"),
    password: z.string().nonempty("A senha é obrigatória"),
});