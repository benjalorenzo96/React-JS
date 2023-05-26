import React, { useState } from 'react';
import "./style.css";


function ItemCount({ initial, min, max, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div>
      <button onClick={handleDecrease} className="numero" disabled={count <= min}>-</button> {/* Deshabilita el botón si se alcanza el límite mínimo */}
      <span>{count}</span>
      <button onClick={handleIncrease} className="numero" disabled={count >= max}>+</button> {/* Deshabilita el botón si se alcanza el límite máximo */}
      <button onClick={handleAddToCart} className="item-add-to-cart-btn carritocount">Agregar al carrito</button>
    </div>
  );
}


export default ItemCount;
