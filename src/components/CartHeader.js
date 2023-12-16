import React from 'react'

const CartHeader = (props) => {
  return (
    <header>
        <button onClick={() => props.showCart()}>Cart</button>
    </header>
  )
}

export default CartHeader;