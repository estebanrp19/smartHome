"use client";
import { IUser } from "@/interfaces";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { AuthContext } from "./AuthContext";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
      const decodedUser = jwtDecode<IUser>(token);
      console.log("Usuario decodificado:", decodedUser);
      setUser(decodedUser);
    }
  }, []);

  const login = async (username: string, password: string) => {
    const response = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      const decodedUser = jwtDecode<IUser>(token);
      setUser(decodedUser);
      router.push("/");
    } else {
      console.error("Login failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
