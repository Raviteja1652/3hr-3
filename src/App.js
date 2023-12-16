import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ListItems from "./components/ListItems";
import CartHeader from "./components/CartHeader";
import Cart from "./components/Cart";

function App() {
  const [cartShow, setCartShow] = useState(false)
  const onShowCart = () => {
    setCartShow(prev => !prev)
  }

  return (
    <>
      <CartHeader showCart={onShowCart} />
      <InputForm />
      <ListItems />
      {cartShow && <Cart />}
    </>
  );
}

export default App;
