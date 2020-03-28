import React from "react";

import "./Nav.css";

const Nav = ({ activeTab, onTabChange }) => {
  const renderItems = () => {
    const items = ["items", "cart"];

    const setItemClassName = tagName =>
      `nav-item ${tagName === activeTab ? "selected" : ""}`;

    return items.map((item, index) => (
      <li key={item} className={setItemClassName(index)}>
        <button onClick={() => onTabChange(index)}>{item.toUpperCase()}</button>
      </li>
    ));
  };

  return (
    <nav className="nav">
      <ul>{renderItems()}</ul>
    </nav>
  );
};

export default Nav;
