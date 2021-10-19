import React from 'react'
import Layout from './shared/Layout'

const NotFound = () => {

    const style = {
        fontWeight: 'bold',
        testAlign: 'center'
    }
   return(
       <Layout>
           <p style={style}>Not found</p>
       </Layout>

   )
    
}

export default NotFound