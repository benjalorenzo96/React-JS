import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app'; // Actualizado

import 'firebase/compat/firestore'; // Actualizado


const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = firebase.firestore().collection('items');
    
        let query = itemsCollection;
        if (categoryId) {
          query = query.where('categoryld', '==', categoryId);
        }
    
        const querySnapshot = await query.get();
    
        const fetchedItems = querySnapshot.docs.map((doc) => doc.data());
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
        <p>Loading...</p>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;









