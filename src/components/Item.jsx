import React from 'react';
import { useCartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const { addItemToCart } = useCartContext();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  const handleViewDetails = () => {
    navigate(`/item/${item.id}`);
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <img src={item.image} alt={item.name} className="card-img-top" style={{ height: '300px', weight: '50px', padding: '5%'}} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Precio: ${item.price}</p>
          <button onClick={handleAddToCart} className="btn btn-primary">Añadir al carrito</button>
          <button onClick={handleViewDetails} className="btn btn-secondary">Ver detalles</button>
        </div>
      </div>
    </div>
  );
};

export default Item;

