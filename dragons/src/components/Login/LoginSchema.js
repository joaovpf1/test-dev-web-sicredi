import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().nonempty("E-mail is mandatory"),
    password: z.string().nonempty("Password is mandatory")
});