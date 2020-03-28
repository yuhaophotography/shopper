import React from "react";

import Item from "./Item";

import "./Cart.css";

const Cart = ({ items, onHandleOne, onTabChange }) => {
  const renderCart = () =>
    items.map(item => (
      <li key={item.id} className="cart-item">
        <Item item={item}>
          <div className="cart-controls">
            <button
              className="cart-remove-one"
              onClick={() => onHandleOne(0)(item)}
            >
              -
            </button>
            <span className="cart-count">{item.count}</span>
            <button
              className="cart-add-one"
              onClick={() => onHandleOne(1)(item)}
            >
              +
            </button>
          </div>
        </Item>
      </li>
    ));

  const renderTotal = () => {
    const reducer = (sum, item) => sum + item.price * item.count;
    const initial = 0;

    return (
      <li className="cart-total">Total: ${items.reduce(reducer, initial)}</li>
    );
  };

  const isEmpty = () =>
    !items.length ? (
      <>
        <div className="cart-empty">
          there is empty, please go to item to add
        </div>
        <button className="cart-go-to-add" onClick={() => onTabChange(0)}>
          Add to cart
        </button>
      </>
    ) : (
      <ul className="cart-items">
        {renderCart()}
        {renderTotal()}
      </ul>
    );

  return isEmpty();
};

export default Cart;
