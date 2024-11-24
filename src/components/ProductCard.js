import React, { useState } from "react";
import Amway from "../image/Amway.png";

const ProductCard = ({ product, addToCart, onCardClick }) => {
  const [imageError, setImageError] = useState(false);

  // ฟังก์ชันจัดการข้อผิดพลาดเมื่อโหลดภาพไม่ได้
  const handleError = () => {
    setImageError(true);
  };

  return (
    <div className="product" onClick={() => onCardClick(product)}>
      <img
        src={imageError ? Amway : product.image_url}
        alt={product.name}
        onError={handleError}
      />
      <div className="product-name">{product.name}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-price">
        <span>Price:</span> ${product.price}
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // หยุดการส่งต่อ event
          addToCart(product);
        }}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
