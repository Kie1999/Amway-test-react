import React, { useState } from "react";
import Amway from "../image/Amway.png";

const ProductCard = ({ product }) => {
  const [imageError, setImageError] = useState(false); 

  // ฟังก์ชันจัดการข้อผิดพลาดเมื่อโหลดภาพไม่ได้
  const handleError = () => {
    setImageError(true); 
  };

  return (
    <div className="product">
      <img
        src={imageError ? Amway : product.image_url} 
        alt={product.name}
        onError={handleError} 
      />
      <div className="product-name">{product.name}</div>
      <div className="product-description">{product.description}</div>
      <div className="product-price"><span>Price:</span> ${product.price}</div>
    </div>
  );
};

export default ProductCard;
