import React from "react";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({ items }) => {
  return (
    <div>
      <h1>Nuestros Productos</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;




