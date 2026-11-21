import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  role: null, // "admin" | "user" | null
  setUser: (user, role) => set({ user, role, isAuthenticated: !!user }),
  logout: () => set({ user: null, role: null, isAuthenticated: false })
}));
