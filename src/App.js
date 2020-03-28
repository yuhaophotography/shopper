import React from "react";

import Nav from "./Nav";
import Content from "./Content";

import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [cart, setCart] = React.useState([]);

  const summarizeCart = cart => {
    const reducer = (total, item) => {
      const { id } = item;

      total[id] = total[id] || {
        ...item,
        count: 0
      };
      total[id].count++;

      return total;
    };
    const initialState = {};
    const state = cart.reduce(reducer, initialState);

    return Object.values(state);
  };

  const handleAddToCart = item => {
    setCart([...cart, item]);
  };

  const handleOne = type => item => {
    if (type === 0) {
      const index = cart.findIndex(i => item.id === i.id);

      if (index >= 0) {
        setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
      }
    } else if (type === 1) {
      handleAddToCart(item);
    }
  };

  return (
    <div className="app">
      <Nav activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="app-main">
        <Content
          tab={activeTab}
          onTabChange={setActiveTab}
          onAddToCart={handleAddToCart}
          cart={summarizeCart(cart)}
          onHandleOne={handleOne}
        />
      </main>
    </div>
  );
};

export default App;
