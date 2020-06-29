import React, { useState, useEffect, useCallback } from "react";
import defaultDataset from "./dataset";
import { Header, Main, Cart } from "./components/index.js";
import './assets/styles/reboot.css';
import "./assets/styles/base.scss";

const App = () => {
  const [datas, setDatas] = useState(defaultDataset.item);
  const [cart, setCart] = useState(defaultDataset.addedCart);
  const [count, setCount] = useState(defaultDataset.cartCount);
  const [isViewCart, setViewCart] = useState(false);
  const [isViewContact, setViewContact] = useState(false);

  const addCartItem = useCallback(() => {
    console.log(cart);
    setCart(true);
  });
  const incCartItem = useCallback(() => {
    console.log(count);
    setCount(count + 1);
  });

  const changeViewCart = useCallback(() => {
    setViewCart(true);
  });

  const handleOpenContact = useCallback(() => {
    console.log("open");
    setViewContact(true);
  }, [setViewContact])

  const handleCloseContact = useCallback(() => {
    console.log("close");
    setViewContact(false);
  }, [setViewContact])

  return (
    <div className="container" id="container">
      <Header 
      isViewContact={isViewContact}
      isViewCart={isViewCart}
      handleOpenContact={() => handleOpenContact}
      handleCloseContact={() => handleCloseContact}
      />
      <Main
        datas={datas}
        addCartItem={addCartItem}
        incCartItem={incCartItem}
        addedCart={cart}
        cartCount={count}
      />
      <Cart />
    </div>
  );
};

export default App;
