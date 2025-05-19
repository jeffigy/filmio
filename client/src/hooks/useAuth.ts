import { login } from "@/api/authApi";
import { useStore } from "@/store";
import { LoginCredentials } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
export const useLoginMutation = () => {
  const { setCredentials } = useStore.getState();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials),
    mutationKey: ["login"],

    onSuccess: (data) => {
      setCredentials(data.token);
      navigate(-1);
    },
  });
};
