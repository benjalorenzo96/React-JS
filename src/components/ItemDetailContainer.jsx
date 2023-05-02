import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getItems } from "../mockAPI";
import { useCartContext } from "../components/UseCartContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { addItem } = useCartContext();

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getItems();
      const item = items.find((item) => item.id === parseInt(id)); 
      setItem(item);
    };
    fetchItems();
  }, [id]);

  const handleAddItem = (quantity) => {
    addItem({ ...item, quantity });
  };

  return <ItemDetail item={item} handleAddItem={handleAddItem} />;
};

export default ItemDetailContainer;

