import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app'; // Actualizado

import 'firebase/compat/firestore'; // Actualizado


function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = await firebase.firestore().collection('items').doc(itemId).get();
    
        const itemData = itemDoc.data();
        setItem(itemData);
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
        <p>Loading...</p>
      ) : (
        <ItemDetail item={item} />
      )}
    </>
  );
}

export default ItemDetailContainer;




