import { create } from "zustand";

export const useColorMode = create((set: any) => ({
  mode: "light",
  setMode: (mode: string) => set({ mode }),
}));
