import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './components/CartContext';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <CartProvider>
    <App />
  </CartProvider>
);





