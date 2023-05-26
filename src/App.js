import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import { useCartContext } from './components/CartContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AuthProvider } from './auth/AuthContext';
import CreateTask from './components/CreateTask';
import Checkout from './components/Checkout';

import './index.css';

const firebaseConfig = {
  apiKey: "AIzaSyANauMCcFt-9Uk4bLjl0OASzwjRcf4RLSw",
  authDomain: "proyecto-final-react-99859.firebaseapp.com",
  projectId: "proyecto-final-react-99859",
  storageBucket: "proyecto-final-react-99859.appspot.com",
  messagingSenderId: "693824862828",
  appId: "1:693824862828:web:6c9eaa563874786e8af649",
  measurementId: "G-BVRHQRTQEX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db }; // Exporta la instancia de Firestore

function App() {
  const { cartItems, addItemToCart } = useCartContext();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesSnapshot = await db.collection('categories').get();
      const categoriesData = categoriesSnapshot.docs.map((doc) => doc.data());
      setCategories(categoriesData);
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
      addItemToCart(newCartItems);
    }
  };

  const getItemsByCategory = async (categoryId) => {
    try {
      const itemsCollection = db.collection('items');
      const querySnapshot = await itemsCollection.where('categoryId', '==', categoryId).get();

      const items = querySnapshot.docs.map((doc) => doc.data());
      return items;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    <Router>
      <AuthProvider db={db}>
        <NavBar brandLink="/" categories={categories} />
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
            element={<ItemDetailContainer onAddToCart={handleAddToCart} />}
          />
          <Route path="/createtask" element={<CreateTask />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
