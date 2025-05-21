import { JwtPayload } from "jwt-decode";
import { User } from "./user";
import { z } from "zod";
import { loginSchema, signupSchema } from "@/schemas/auth.schema";

export interface DecodedToken extends JwtPayload {
  userInfo: User;
}

export type LoginCredentials = z.infer<typeof loginSchema>;
export type SignupCredentials = z.infer<typeof signupSchema>;
