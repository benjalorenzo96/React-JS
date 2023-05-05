import React from 'react';

function ItemDetail({ name, description, price, pictureUrl }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>${price}</p>
      <img src={pictureUrl} alt={name} />
    </div>
  );
}

export default ItemDetail;

