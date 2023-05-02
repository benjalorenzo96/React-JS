import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../components/UseCartContext";

function CartWidget({ onRemoveFromCart }) {
  const { cart } = useCartContext();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-count">{itemCount}</span>
      {cart.length > 0 && (
        <div className="cart-items">
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} x {item.quantity}{" "}
                {onRemoveFromCart && (
                  <button onClick={() => onRemoveFromCart(item)}>Remove</button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CartWidget;