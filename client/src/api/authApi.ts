import { BASE_AUTH_URL } from "@/utils/config";
import axiosInstance from ".";
import { LoginCredentials } from "@/types/auth";

export const login = async (
  credentials: LoginCredentials,
): Promise<{ token: string }> => {
  return (await axiosInstance.post(`${BASE_AUTH_URL}/login`, credentials)).data;
};
