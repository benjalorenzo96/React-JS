import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== itemId
    );
    setCartItems(updatedCartItems);
  };

  return (
    <CartProvider>
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
    </CartProvider>
  );
};



