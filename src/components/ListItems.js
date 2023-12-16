import React, { useContext } from 'react'
import cartContext from '../store/cartContext';

const ListItems = () => {
    const ctx = useContext(cartContext);
    const ListOfItems = (
        <ul>
            {ctx.items.map(item => (
                <li key={item.id}>
                    <div>{item.name} --- {item.desc} --- {item.price}
                        <button onClick={() => ctx.addToCart(item)}>Add To Cart</button>
                    </div>
                </li>
            ))}
        </ul>
    )
  return (
    <div>
        <h1>Added Items</h1>
        {ListOfItems}
    </div>
  )
}

export default ListItems;