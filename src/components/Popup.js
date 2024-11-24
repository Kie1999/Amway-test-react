import React, { useState } from "react";
import Amway from "../image/Amway.png";

const Popup = ({ product, onClose, onAddToCart }) => {
  const [imageError, setImageError] = useState(false);

  if (!product) return null;

  const handleError = () => {
    setImageError(true);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          ✖
        </button>
        <img
          src={imageError ? Amway : product.image_url}
          alt={product.name}
          className="popup-img"
          onError={handleError}
        />
        <div className="popup-product-content">
          <div className="product-name">{product.name}</div>
          <div className="product-price">
            <span>Price:</span> ${product.price}
          </div>
          <div className="popup-product-description">{product.description}</div>
          <div className="popup-btn-cart">
            <button
              onClick={() => onAddToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
