import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, isLoading }) => {
  
  // แสดงข้อความขณะกำลังโหลด
  if (isLoading) {
    return <p>Loading...</p>;
  }
  // แสดงข้อความถ้าไม่มีสินค้า
  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
