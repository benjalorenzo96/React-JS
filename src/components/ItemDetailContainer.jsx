import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getItemById } from '../mockAPI';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const id = parseInt(itemId);
        const item = await getItemById(id);
        setItem(item);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItem();
  }, [itemId]);

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
}

export default ItemDetailContainer;



