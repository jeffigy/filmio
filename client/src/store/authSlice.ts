import { StateCreator } from "zustand";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "@/types/auth";
type AuthState = {
  authUser: null | any;
  token: null | string;
  isAuthenticated: boolean;
};

type ActionState = {
  setCredentials: (token: string, authUser?: any) => void;
  clearCredentials: () => void;
  setAuthUser: (authUser: any) => void;
};

export type AuthSlice = AuthState & ActionState;

const initialState: AuthState = {
  authUser: null,
  token: null,
  isAuthenticated: false,
};
const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  setCredentials: (token: string) => {
    const { userInfo: authUser } = jwtDecode<DecodedToken>(token);
    set({
      authUser,
      token,
      isAuthenticated: true,
    });
  },
  setAuthUser: (authUser) => set({ authUser }),
  clearCredentials: () => set(initialState),
});

export default createAuthSlice;
