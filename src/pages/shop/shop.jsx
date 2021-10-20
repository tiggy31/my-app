import React, {useContext} from 'react'
import Layout from '../../shared/Layout'
import {ProductContext} from '../../context/products-context'
import FeaturedProduct from '../../shared/featured-product'

const Shop  = () => {
 const {products} = useContext(ProductContext)
 const detailsProduct = products.map(product => (
     <FeaturedProduct {...product} key={product.id}/>
 ))
   return (
       <Layout>
           <div>
           {detailsProduct}
          </div>
       </Layout>
      

   )
}

export default Shop
