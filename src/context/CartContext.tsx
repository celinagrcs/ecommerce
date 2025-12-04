import { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "../types/cart";


interface CartContextProps {
  cart: CartItem[],
  addToCart: (item: CartItem, quantity?: number) => void,
  removeFromCart: (id: number) => void,
  clearCart: () => void,
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (newItem: CartItem) => {
    setCart((prev) => {
      const existingItemIndex = prev.findIndex(
        (cartItem) => cartItem.id === newItem.id
      );
  
      if (existingItemIndex !== -1) {
        return prev.map((cartItem) => 
          cartItem.id === newItem.id
            ? newItem
            : cartItem
        );
      }
  
      return [...prev, newItem];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
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