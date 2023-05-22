import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './components/CartContext';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANauMCcFt-9Uk4bLjl0OASzwjRcf4RLSw",
  authDomain: "proyecto-final-react-99859.firebaseapp.com",
  projectId: "proyecto-final-react-99859",
  storageBucket: "proyecto-final-react-99859.appspot.com",
  messagingSenderId: "693824862828",
  appId: "1:693824862828:web:6c9eaa563874786e8af649",
  measurementId: "G-BVRHQRTQEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <CartProvider>
    <App />
  </CartProvider>
);





