import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import { useCartContext } from './components/CartContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AuthProvider } from './auth/AuthContext';
import CreateTask from './components/CreateTask';



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
const auth = firebase.auth();

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

  const createOrder = async () => {
    try {
      const order = {
        buyer: {
          name: 'An Ecommerce Client',
          email: 'client@coderhouse.com',
          phone: '123456789',
        },
        items: cartItems.map((cartItem) => ({
          id: cartItem.id,
          title: cartItem.title,
          quantity: cartItem.quantity,
          price: cartItem.price,
        })),
        date: firebase.firestore.FieldValue.serverTimestamp(),
      };

      const ordersCollection = db.collection('orders');
      const docRef = await ordersCollection.add(order);
      const orderId = docRef.id;

      console.log('Orden creada con ID:', orderId);

      // Restablecer el carrito después de crear la orden
      // Implementa tu lógica para restablecer el carrito aquí
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (item, quantity) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex === -1) {
      addItemToCart({ ...item, quantity });
    } else {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += quantity;
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

  const getItemById = async (itemId) => {
    try {
      const itemDoc = await db.collection('items').doc(itemId).get();

      const itemData = itemDoc.data();
      return itemData;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <BrowserRouter>
      <AuthProvider db={db}>
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
          <Route
            path="/createtask"
            element={<CreateTask />}
          />
        </Routes>
        <button onClick={createOrder}>Crear Orden</button>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;




