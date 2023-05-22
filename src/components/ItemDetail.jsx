import React, { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { getItems } from '../mockAPI'; // Importa la función getItem desde mockAPI.js

function ItemDetail({ itemId }) {
  const [quantity, setQuantity] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);
  const { addItem } = useContext(CartContext);

  const item = getItems(itemId); // Obtiene el objeto de producto utilizando la función getItem

  const handleAddToCart = () => {
    addItem(item, quantity);
    setShowItemCount(false);
  };

  const handleCountChange = (count) => {
    setQuantity(count);
  };

  return (
    <div>
      <h1>Item Detail</h1>

      {showItemCount && (
        <ItemCount
          initial={quantity}
          min={0}
          max={10}
          onCountChange={handleCountChange}
          onAdd={handleAddToCart}
        />
      )}

      <button>
        <Link to="/cart">Terminar mi compra</Link>
      </button>
    </div>
  );
}

export default ItemDetail;






