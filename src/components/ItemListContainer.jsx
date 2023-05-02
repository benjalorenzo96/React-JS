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
        const filteredItems = fetchedItems.filter((item) => item.category === id);
        setItems(filteredItems);
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





