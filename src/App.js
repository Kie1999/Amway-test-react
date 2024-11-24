import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SearchBar from "./components/SearchBar";
import Popup from "./components/Popup";
import ProductList from "./components/ProductList";
import data from "./json/category-product-data.json";

const App = () => {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("Snack"); 
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [isPopupVisible, setPopupVisible] = useState(false); 

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

  // ฟังก์ชันสำหรับเพิ่มสินค้าลง Cart
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.name === product.name
    );

    let updatedCart;
    if (existingProductIndex !== -1) {
      // ให้เพิ่มจำนวนหากมีสินค้าอยู่ในตะกร้าแล้ว
      updatedCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // หากสินค้าไม่มีในตะกร้า ให้เพิ่มรายการใหม่
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index); // ลบสินค้าออกตาม index
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product); 
    setPopupVisible(true); 
  };

  const closePopup = () => {
    setPopupVisible(false); 
    setSelectedProduct(null); 
  };

  return (
    <div className="container">
      <Header cart={cart} removeFromCart={removeFromCart} />
      <div className="content-container">
        <Menu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <main className="main-panel">
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          <ProductList products={filteredProducts} isLoading={isLoading} addToCart={addToCart} onCardClick={handleCardClick}/>
        </main>
      </div>
      {isPopupVisible && (
        <Popup product={selectedProduct} onClose={closePopup} onAddToCart={addToCart} />
      )}
    </div>
  );
};

export default App;
