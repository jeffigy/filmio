import { login, signup } from "@/api/authApi";
import { useStore } from "@/store";
import { LoginCredentials, SignupCredentials } from "@/types/auth.type";
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
      navigate("/");
    },
  });
};

export const useSignupMutation = () => {
  const { setCredentials } = useStore.getState();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: SignupCredentials) => signup(credentials),
    mutationKey: ["signup"],

    onSuccess(data) {
      setCredentials(data.token);
      navigate("/");
    },
  });
};
