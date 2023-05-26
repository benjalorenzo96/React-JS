import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCartContext } from './CartContext';
import ItemCount from './ItemCount';
import { db } from '../firebase';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const { addItemToCart } = useCartContext();
  const [item, setItem] = useState(null);
  const [showItemCount] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = await db.collection('cuadros').doc(itemId).get();

        if (itemDoc.exists) {
          const itemData = itemDoc.data();
          setItem({ id: itemDoc.id, ...itemData });
        } else {
          throw new Error('El producto no existe');
        }
      } catch (error) {
        console.log('Error obteniendo el producto:', error);
        setItem(null);
      }
    };

    fetchItem();
  }, [itemId]);

  const handleAddToCart = () => {
    addItemToCart(item);
  };
  

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (!item) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div className="col-md-4">
      <h2 className="item-name">{item.name}</h2>
      <p className="item-price">Precio: ${item.price}</p>
      <img src={item.image} alt={item.name} className="item-image" />
      <button
        onClick={handleAddToCart}
        className="btn btn-primary mt-3 item-add-to-cart-btn">Añadir al carrito</button>
{showItemCount && <ItemCount initial={1} min={1} max={item.stock} onAdd={handleAddToCart} />}
      <Link to="/checkout">
        <button onClick={handleCheckout}className="btn btn-success mt-3 item-checkout-btn">Terminar mi compra</button>
      </Link>
    </div>
  );
};

export default ItemDetailContainer; 
