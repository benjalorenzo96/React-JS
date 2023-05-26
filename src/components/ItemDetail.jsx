import React, { useState } from 'react';
import { useCartContext } from './CartContext';
import "./style.css";


const ItemDetail = ({ item }) => {
  const { addItemToCart } = useCartContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleAddToCart = () => {
    addItemToCart(item, selectedQuantity);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.image} alt={item.name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text">Precio: ${item.price}</p>
            <div className="form-group">
              <label htmlFor="quantity">Cantidad:</label>
              <input
                type="number"
                id="quantity"
                className="form-control"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
                min={1}
              />
            </div>
            <button onClick={handleAddToCart} className="btn btn-primary mt-3 item-add-to-cart-btn">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

