import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState("");

  const toggleCartItem = () => {
    setItem(item ? "" : "in-cart");
  };

  return (
    <li className={item}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartItem}>
        {item ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;