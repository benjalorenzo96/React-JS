import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import { getItemsByCategory, getItemById, getCategories } from './mockAPI';
import { CartProvider } from './components/UseCartContext';

import './index.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
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
      setCartItems([...cartItems, { ...item, quantity }]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += quantity;
      setCartItems(newCartItems);
    }
  };

  const handleRemoveFromCart = (item) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(newCartItems);
  };

  return (
    <CartProvider> 
      <BrowserRouter>
        <NavBar brandLink="/" categories={categories} />
        <CartWidget cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} /> 
        <Routes>
          <Route path="/" element={<ItemListContainer onAddToCart={handleAddToCart} />} />
          <Route path="/category/:categoryId" element={<ItemListContainer onAddToCart={handleAddToCart} getItems={getItemsByCategory} />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer onAddToCart={handleAddToCart} getItem={getItemById} />} />
        </Routes>
      </BrowserRouter>
    </CartProvider> 
  );
}

export default App;











