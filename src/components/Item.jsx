import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";

const Item = ({ item }) => {
  const { addItemToCart } = useCartContext();

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  return (
    <div className="col-md-4">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <img src={item.image} alt={item.name} />
      <button onClick={handleAddToCart}>Añadir al carrito</button>
      <p>Categoría: {item.category}</p>
      <Link to={`/item/${item.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;
