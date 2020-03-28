import React from "react";

import Items from "./Items";
import Cart from "./Cart";

import { items } from "./mock";

const Content = ({ tab, onAddToCart, cart, onHandleOne, onTabChange }) => {
  switch (tab) {
    case 0:
      return <Items items={items} onAddToCart={onAddToCart} />;
    case 1:
      return (
        <Cart
          items={cart}
          onHandleOne={onHandleOne}
          onTabChange={onTabChange}
        />
      );
    default:
      return <span>items</span>;
  }
};

export default Content;
