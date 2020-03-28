import React from "react";

import "./Item.css";

const Item = ({ item, children }) => (
  <article className="item">
    <section className="item-left">
      <div className="item-image" />
      <p className="item-title">{item.name}</p>
      <p className="item-description">{item.description}</p>
    </section>
    <section className="item-right">
      <p className="item-price">${item.price}</p>
      {children}
    </section>
  </article>
);

export default Item;
