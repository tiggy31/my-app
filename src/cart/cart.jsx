import React from 'react'
import './cart.style.scss'
import shoppingcart from '../assets/shop.png'
const Cart = () => {

    return(<> 
       <div className="cart-position">
          <img src={shoppingcart} alt="shopping-bag"/>
          <span className="cart-count">5</span>
       </div>
    
    </>)
}

export default Cart