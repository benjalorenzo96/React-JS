import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = db.collection('cuadros');
    
        let query = itemsCollection;
        if (categoryId) {
          query = query.where('category', '==', categoryId);
        }
    
        const querySnapshot = await query.get();
    
        const fetchedItems = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(fetchedItems);
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
        <p>Cargando...</p>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;


