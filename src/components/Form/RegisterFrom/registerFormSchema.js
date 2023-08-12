import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z
      .string()
      .nonempty("O e-mail é obrigatório")
      .email("Forneça um e-mail valido"),
    password: z
      .string()
      .nonempty("A senha é obrigatória")
      .min(8, "São necessarios pelo menos oito caracteres.")
      .regex(/[A-Z]+/, "É necessario conter pelo menos uma letrar maiúscula.")
      .regex(/[a-z]+/, "É necessario conter pelo menos uma letra minúscula")
      .regex(/[0-9]+/, "É necessario conter pelo menos um númeor")
      .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\-]+/, "É necessario conter pelo menos um caractere especial"),
    confirmPassword: z.string().nonempty("Confirmar a senha é obrigatório"),
    bio: z.string().nonempty("A bio é obrigatória"),
    contact: z.string().nonempty("Uma forma de contato é obrigatória"),
    course_module: z.string().nonempty("É obrigatório selecionar um módulo"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
