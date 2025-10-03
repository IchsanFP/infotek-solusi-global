import {z} from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  interest: z.array(z.string()).min(1, "Select at least one product"),
  schedule: z.date({ required_error: "Schedule is required" }),
  enquiry: z.string().min(1, "Enquiry cannot be empty"),
})

export const brochureFormSchema = z.object({
  email: z.string().email('Invalid email address')
})

export type BrochureFormValues = z.infer<typeof brochureFormSchema>

export type FormValues = z.infer<typeof formSchema>