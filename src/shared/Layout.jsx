import React from 'react';
import Footer from '../footer/footer.jsx'
import Header from '../Navigation-comp/nav.jsx'


const Layout = ({children}) => {
    return(
      <>
         <Header />
         <main>
             {children}
         </main>
         <Footer />
      </>

    )

}

export default Layout