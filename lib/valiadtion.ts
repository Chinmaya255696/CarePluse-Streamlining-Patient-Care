import { z } from "zod";

export const userFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^(\+91|0)?[789]\d{9}$/.test(phone), "Invalid phone number"),
});

export default userFormValidation;
