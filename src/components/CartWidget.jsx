import React from 'react';
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const { cartItems } = useCartContext();

  if (!cartItems) {
    return null;
  }

  return (
    <div className="cart-widget">
      {cartItems.length > 0 ? (
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="item-count">{cartItems.length}</span>
        </Link>
      ) : null}
    </div>
  );
};

export default CartWidget;








