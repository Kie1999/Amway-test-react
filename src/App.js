import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import data from "./json/category-product-data.json";

const App = () => {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("Snack"); 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProducts(data[selectedCategory]);
    setFilteredProducts(data[selectedCategory]);
  }, [selectedCategory]);

  // ฟังก์ชันสำหรับการค้นหาสินค้า
  const handleSearch = (term) => {
    setSearchTerm(term);
    setIsLoading(true); 
    setTimeout(() => {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsLoading(false); 
    }, 500); 
  };

  return (
    <div className="container">
      <Header />
      <div className="content-container">
        <Menu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <main className="main-panel">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          <ProductList products={filteredProducts} isLoading={isLoading}/>
        </main>
      </div>
    </div>
  );
};

export default App;
