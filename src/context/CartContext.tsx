import { createContext, useContext, useState } from "react";
import { CartItem } from "../types/cart";


interface CartContextProps {
  cart: CartItem[],
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      console.log("addToCart llamado con:", item);

      const isItemInCart = prev.some((cartItem) => cartItem.id === item.id);
      if(isItemInCart) {
        return prev;
      }
      return [...prev, item];
    })
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )

}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error ("useCart must be used within a CartProvider");
  }
  return context;
};