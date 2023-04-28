import React from 'react';

function Product(props) {
  return (
    <div className="card mb-3">
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">
          <small className="text-muted">{`$${props.price}`}</small>
        </p>
        <button className="btn btn-primary" onClick={() => props.onAddToCart(props.id)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default Product;




