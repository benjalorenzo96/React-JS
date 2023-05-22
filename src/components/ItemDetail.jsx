import React, { useContext, useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { getItemById } from '../mockAPI'; // Importa la función getItemById desde mockAPI.js

function ItemDetail({ itemId }) {
  const [quantity, setQuantity] = useState(0);
  const [showItemCount, setShowItemCount] = useState(true);
  const { addItem } = useContext(CartContext);
  const [item, setItem] = useState(null); // Estado para almacenar el objeto del producto

  useEffect(() => {
    // Obtiene el objeto del producto utilizando getItemById(itemId)
    const fetchItem = async () => {
      const item = await getItemById(itemId);
      setItem(item);
    };

    fetchItem();
  }, [itemId]);

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

      {item && showItemCount && (
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







