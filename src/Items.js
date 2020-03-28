import React from "react";

import Item from "./Item";

import "./Items.css";

const Items = ({ items, onAddToCart }) => {
  const renderItems = () =>
    items.map(item => (
      <li key={item.id} className="items-item">
        <Item item={item}>
          <button
            onClick={() => onAddToCart(item)}
            className="item-add-to-cart"
          >
            Add to cart
          </button>
        </Item>
      </li>
    ));

  return <ul className="items-items">{renderItems()}</ul>;
};

export default Items;
