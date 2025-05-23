import { login, logout, refresh, signup } from "@/api/authApi";
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

export const useRefreshMutation = () => {
  const { setCredentials } = useStore.getState();

  return useMutation({
    mutationFn: () => refresh(),
    mutationKey: ["refresh"],

    onSuccess: (data) => {
      setCredentials(data.token);
    },
  });
};

export const useLogoutMutation = () => {
  const { clearCredentials } = useStore.getState();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => logout(),
    mutationKey: ["logout"],

    onSuccess: () => {
      clearCredentials();
      navigate("/", { replace: true });
    },
  });
};
