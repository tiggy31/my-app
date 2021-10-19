import React from 'react';
import Layout from '../shared/Layout'
import Featuredcollection from '../featured-collection/featured-collection.jsx'
import Hero from '../hero/hero';
import MainSection from '../main-section/main-section'

const Home = () => {
 return(
     <>
     <Layout>
          <Hero />
         <MainSection />
          <Featuredcollection />
       </Layout>
     </>

 )
}

export default Home