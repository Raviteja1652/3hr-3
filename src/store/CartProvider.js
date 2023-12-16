import React, { useState } from 'react';
import cartContext from './cartContext';

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addItemHandler = (data) => {
        setItems([...items, data])
    };
    const addToCartHandler = (item) => {
        setCartItems([...cartItems, item])
    }
    const contextProvider = {
        items: items,
        addItem: addItemHandler,
        addToCart: addToCartHandler,
        itemsCart: cartItems,
    };

  return (
    <cartContext.Provider value={contextProvider}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartProvider