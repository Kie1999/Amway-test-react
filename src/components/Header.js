import React, { useState, useRef } from "react";
import Amway from "../image/Amway.png";

const Header = ({ cart, removeFromCart }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false); 
  const [imageErrors, setImageErrors] = useState({}); 
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // ฟังก์ชันจัดการข้อผิดพลาดเมื่อโหลดภาพไม่ได้
  const handleError = (id) => {
    
    setImageErrors((prevErrors) => ({
      ...prevErrors,
      [id]: true, // set id รูปที่โหลด
    }));
    
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <header className="banner">
      <div className="logo">My Store</div>
      <div className="cart-icon-container" onClick={toggleDropdown}>
        <span className="cart-icon">🛒</span>
        <span className="cart-count">
          {cart.reduce((total, item) => total + item.quantity, 0)}
        </span>
      </div>
      {dropdownVisible && (
        <div className="cart-dropdown" ref={dropdownRef}>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img
                      src={
                        imageErrors[item.id] || !item.image_url 
                          ? Amway
                          : item.image_url
                      }
                      alt={item.name}
                      onError={() => handleError(item.id)}
                      className="cart-item-img"
                    />
                    <div className="cart-item-details">
                      <span>
                        {item.name} - ${item.price} x {item.quantity}
                      </span>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-total">
                <strong>Total: ${totalPrice.toFixed(2)}</strong>
              </div>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
