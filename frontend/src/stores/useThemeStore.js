import create from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light", // valor inicial
      setTheme: (newTheme) => set({ theme: newTheme }),
    }),
    {
      name: "theme-storage", // nombre para el almacenamiento local
      getStorage: () => localStorage,
    }
  )
);

export default useThemeStore;
