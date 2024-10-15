import { UserType } from "@/types/user-type";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserStore = {
  user: UserType | null;
  setUser: (user: UserType) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: UserType) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    { name: "user" }
  )
);
