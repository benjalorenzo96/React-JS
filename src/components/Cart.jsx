import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';

const Cart = () => {
  const { cart, removeItem } = useCartContext();

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const renderCartItem = (item) => {
    return (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>Quantity: {item.quantity}</p>
        <p>Price: {item.price}</p>
        <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
      </div>
    );
  };

  const renderCartItems = () => {
    if (cart.length === 0) {
      return (
        <div>
          <p>No items in the cart.</p>
          <Link to="/">Go back to the store</Link>
        </div>
      );
    }

    return cart.map(renderCartItem);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      {renderCartItems()}
      <p>Total Price: {calculateTotalPrice()}</p>
    </div>
  );
};

export default Cart;




