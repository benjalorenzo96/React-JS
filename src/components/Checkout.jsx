import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

const Checkout = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: '',
  });

  const [orderId, setOrderId] = useState('');

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (
      formData.firstName &&
      formData.lastName &&
      formData.phone &&
      formData.email &&
      formData.confirmEmail
    ) {
      if (formData.email === formData.confirmEmail) {
        const order = {
          items: [
            // Incluye aquí los items con sus cantidades
          ],
          total: 0, // Calcula el total de la orden
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
        };

        db.collection('orders')
          .add(order)
          .then((docRef) => {
            setOrderId(docRef.id);
          })
          .catch((error) => {
            console.error('Error al guardar la orden:', error);
          });
      } else {
        alert('Los campos de email no coinciden. Por favor, verifica.');
      }
    } else {
      alert('Por favor, completa todos los campos del formulario.');
    }
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleFormChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleFormChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleFormChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirmar Email:</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleFormChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3" style={{ padding: '10px' }}>Finalizar Compra</button>
      </form>
      {orderId && (
        <p className= "ordenID" style={{ color: "white", background: "green", fontSize: "1,5rem", fontWeight: "bold" }}>
          Orden finalizada. ID de la orden: {orderId}. Puedes seguir el estado de tu orden utilizando este ID.
        </p>
      )}
    </div>
  );
};

export default Checkout;
