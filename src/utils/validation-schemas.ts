import {z} from 'zod';

export const exampleSchema = z.object({
  email: z.string().email({message: 'incorrect email'}).min(1, {message: 'Email is required'})
})