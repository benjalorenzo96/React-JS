import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import CartWidget from './CartWidget';

function ItemDetailContainer({ items }) {
  const { itemId } = useParams();
  const { addItem } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  const selectedItem = items.find((item) => item.id === itemId);

  const handleAddToCart = () => {
    addItem(selectedItem, quantity);
  };

  return (
    <div>
      <h1>Detalle de Producto</h1>
      <div>
        <img src={selectedItem.image} alt={selectedItem.title} />
        <h3>{selectedItem.title}</h3>
        <p>{selectedItem.description}</p>
        <h4>{`Precio: $${selectedItem.price}`}</h4>
        <label htmlFor="quantity">Cantidad:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min={1}
        />
        <button onClick={handleAddToCart}>Agregar al carrito</button>
        <CartWidget />
      </div>
    </div>
  );
}

export default ItemDetailContainer;

