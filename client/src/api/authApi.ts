import { BASE_AUTH_URL } from "@/utils/config";
import axiosInstance from ".";
import { LoginCredentials, SignupCredentials } from "@/types/auth.type";

export const login = async (
  credentials: LoginCredentials,
): Promise<{ token: string }> => {
  return (await axiosInstance.post(`${BASE_AUTH_URL}/login`, credentials)).data;
};

export const signup = async (
  credentials: SignupCredentials,
): Promise<{ token: string }> => {
  return (await axiosInstance.post(`${BASE_AUTH_URL}/signup`, credentials))
    .data;
};

export const refresh = async (): Promise<{ token: string }> => {
  return (await axiosInstance.get(`${BASE_AUTH_URL}/refresh`)).data;
};
