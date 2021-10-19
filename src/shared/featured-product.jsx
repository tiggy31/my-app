import React from 'react'
import './featured-product.style.scss'

const FeaturedProduct = (product) => {
    const {title,imageUrl, price} = product
  return (
     <div className = 'featured-product'>
        <div className="featured-image">
      <img src={imageUrl} alt = 'product'/>
        </div>
        <div className="featured-price">
            <h3>{title}</h3>
            <h3>${price}</h3>
           <button className="button is-black nomad-btn">ADD TO CART</button>
        </div>
     </div>
  
  )
}

export default FeaturedProduct