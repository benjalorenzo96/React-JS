import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeItemFromCart } = useCartContext();
  const navigate = useNavigate();

  const handleRemoveItem = (itemId) => {
    removeItemFromCart(itemId);
  };

  const renderCartItem = (item) => {
    return (
      <div key={item.id} className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">{item.name}</h3>
          <p className="card-text">Cantidad: {item.quantity}</p>
          <p className="card-text">Precio: ${item.price}</p>
          <img
            src={item.image}
            alt={item.name}
            className="card-img-top"
            style={{ maxWidth: '200px' }}
          />
          <button
            onClick={() => handleRemoveItem(item.id)}
            className="btn btn-danger"
          >
            Remover
          </button>
        </div>
      </div>
    );
  };

  const renderCartItems = () => {
    if (cartItems.length === 0) {
      return (
        <div>
          <p>No hay elementos en el carrito.</p>
          <Link to="/" className="btn btn-primary">
            Volver a la Tienda
          </Link>
        </div>
      );
    }

    return cartItems.map(renderCartItem);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity);

      if (!isNaN(price) && !isNaN(quantity) && price > 0 && quantity > 0) {
        return total + price * quantity;
      } else {
        console.log('Invalid price or quantity:', item);
        return total;
      }
    }, 0);

    return totalPrice.toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">{renderCartItems()}</div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Resumen de Compra</h5>
                <p className="card-text">
                  Precio Total: ${calculateTotalPrice()}
                </p>
                <Link to="/" className="btn btn-primary">
                  Continuar Comprando
                </Link>
                <Link to="/checkout">
                  <button onClick={handleCheckout}>
                    Terminar mi compra
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
