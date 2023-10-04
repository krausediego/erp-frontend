import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email("Digite um email válido")
    .nonempty("Email obrigatório"),
  password: z.string().nonempty("Senha obrigatória"),
});
