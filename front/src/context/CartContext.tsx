"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { IProduct } from "@/interfaces";
import { useAuth } from "./AuthContext";

interface CartContextProps {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  clearCart: () => void;
  showLoginMessage: boolean;
  setShowLoginMessage: (value: boolean) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [showLoginMessage, setShowLoginMessage] = useState<boolean>(false);
  const { isAuthenticated } = useAuth();

  const addToCart = (product: IProduct) => {
    if (!isAuthenticated) {
      setShowLoginMessage(true);
    } else {
      setCart((prevCart) => [...prevCart, product]);
      alert("Se ha añadido correctamente al carrito");
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        showLoginMessage,
        setShowLoginMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
