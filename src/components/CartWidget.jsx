import React from 'react';
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const { cart } = useCartContext();

  if (!cart) {
    return null;
  }

  return (
    <div className="cart-widget">
      {cart.length > 0 ? (
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="item-count">{cart.length}</span>
        </Link>
      ) : null}
    </div>
  );
};

export default CartWidget;







