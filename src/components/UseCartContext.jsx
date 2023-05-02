import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (newItem) => {
    setCart([...cart, newItem]);
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

