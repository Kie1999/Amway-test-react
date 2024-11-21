import React from "react";
import data from "../json/category-product-data.json";

const Menu = ({ selectedCategory, setSelectedCategory }) => {
  const categories = Object.keys(data);
  return (
    <aside className="menu">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={category === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Menu;
