import { z } from 'zod';

export const CreateDragonSchema = z.object({
    name: z.string().nonempty('Name is mandatory'),
    type: z.string().nonempty('Type is mandatory'),
    history: z.string(),
})