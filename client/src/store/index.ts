import { Store } from "@/types/store";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import createAuthSlice from "./authSlice";

export const useStore = create<Store>()(
  devtools((...a) => ({
    ...createAuthSlice(...a),
  })),
);
