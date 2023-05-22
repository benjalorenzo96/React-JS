import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import { getItemsByCategory, getItemById, getCategories } from './mockAPI';
import { CartProvider, useCartContext } from './components/CartContext';

import './index.css';

function App() {
  const { cartItems, addItemToCart } = useCartContext();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  const handleAddToCart = (item, quantity) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex === -1) {
      addItemToCart({ ...item, quantity });
    } else {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += quantity;
    }
  };

  return (
    <BrowserRouter>
      <CartProvider> {/* Mover CartProvider alrededor de la estructura de la aplicación */}
        <NavBar brandLink="/" categories={categories} />
        <CartWidget />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer
                onAddToCart={handleAddToCart}
                getItems={getItemsByCategory}
              />
            }
          />
          <Route
            path="/item/:itemId"
            element={
              <ItemDetailContainer
                onAddToCart={handleAddToCart}
                getItem={getItemById}
              />
            }
          />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;


