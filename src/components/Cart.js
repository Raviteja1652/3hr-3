import React, { useContext } from 'react'
import cartContext from '../store/cartContext';
import './CartHeader.css';

const Cart = () => {
    const ctx = useContext(cartContext)
    const cartItems = (
        <ul className="cart">
            {ctx.itemsCart.map(item => (
                <li key={item.id}>
                    {item.name} - {item.desc} - {item.price}
                    
                    
                </li>
            ))}
        </ul>
    )
  return (
    <div className='cart-container'>
        <h2>Cart</h2>
        
            <div className="cart-header">
                <h4 className="item-header">Item</h4>
                <h4 className="price-header">Description</h4>
                <h4 className="quantity-header">Price</h4>
            </div>
            {cartItems}
    </div>
  )
}

export default Cart