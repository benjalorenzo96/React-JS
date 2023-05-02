import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.pictureUrl} alt={item.title} />
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
  );
};

export default ItemDetail;
