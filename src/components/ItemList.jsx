import React from "react";
import { getItemById } from "../mockAPI";

const ItemList = ({ items }) => {
  return (
    <div className="row">
      {items.map((item) => (
        <div className="col-md-4" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Precio: ${item.price}</p>
          <img src={item.image} alt={item.name} />
          <button>Añadir al carrito</button>
          <p>Categoría: {item.category}</p>
          {getItemById(item.id).then((itemDetail) => (
            <div>
              <h3>Detalles del producto</h3>
              <p>{itemDetail.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemList;



