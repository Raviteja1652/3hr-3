import React from "react";

const cartContext = React.createContext({
    items: [],
    addItem: () => {},
    addToCart: () => {},
    itemsCart: [],
})

export default cartContext;