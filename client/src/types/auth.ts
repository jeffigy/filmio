import { JwtPayload } from "jwt-decode";
import { User } from "./user";

export interface DecodedToken extends JwtPayload {
  userInfo: User;
}

export type LoginCredentials = {
  email: string;
  password: string;
};
