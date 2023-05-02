import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getItems } from "../mockAPI";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getItems();
      if (id) {
        const item = fetchedItems.find((item) => item.id === id);
        setItems([item]);
      } else {
        setItems(fetchedItems);
      }
    };
    fetchItems();
  }, [id]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;






