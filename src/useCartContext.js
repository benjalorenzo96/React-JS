import { createContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  return {
    cartItems,
    addItemToCart,
    removeItemFromCart,
  };
};
