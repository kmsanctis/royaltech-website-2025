import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onOpen }) => (
  <div className="product-card" onClick={() => onOpen(product)}>
    <span className="info-icon">
      <i className="fas fa-info-circle"></i>
    </span>
    <img
      src={require(`../../assets/${product.image}`)}
      alt={product.title}
      className="product-img"
    />
    <h4 className="product-title">{product.title}</h4>
  </div>
);

export default ProductCard;
