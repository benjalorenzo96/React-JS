import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getItemsByCategory } from '../mockAPI';
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await getItemsByCategory(categoryId);
        setItems(items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  }, [categoryId]);

  return (
    <>
      <h1>{greeting}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;








