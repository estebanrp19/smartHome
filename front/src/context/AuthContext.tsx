"use client"
import { IUser } from "@/interfaces";
import { createContext, useContext } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: IUser | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  
  const context = useContext(AuthContext);
  console.log(context);
  if (context === undefined) {
    throw new Error("useAuth es undefined");
  }
  return context;
};
