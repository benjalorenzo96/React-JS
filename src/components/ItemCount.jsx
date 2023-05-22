import React, { useState } from 'react';

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
