import { z } from "zod";

const baseAuthSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const loginSchema = baseAuthSchema;

export const signupSchema = baseAuthSchema.extend({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(50, { message: "Name must be at most 50 characters long" }),
});
