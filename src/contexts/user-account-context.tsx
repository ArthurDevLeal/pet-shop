"use client";
import { UserStore, useUserStore } from "@/store/user-store";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type userContextType = {
  user: UserStore;
  fullName: string;
  setFullName: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

export const userContext = createContext<userContextType | null>(null);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <userContext.Provider
      value={{
        user: useUserStore(),
        fullName,
        setFullName,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
