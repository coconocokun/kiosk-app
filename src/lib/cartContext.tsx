"use client";

import { Item } from "@/db/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartItem {
  item: Item;
  count: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Item, count: number) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // addToCart
  const addToCart = (item: Item, count: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.item.id == item.id);

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id == item.id ? { ...cartItem, count: cartItem.count + count } : cartItem
        );
      } else {
        return [...prevCart, { item, count }];
      }
    });
  };

  // removeFromCart
  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item.id != itemId));
  };

  // clearCart
  const clearCart = () => {
    setCart([]);
  };

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context == undefined) {
    throw new Error("I don't know...");
  }
  return context;
}
