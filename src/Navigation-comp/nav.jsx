import React from 'react'
import {Link} from "react-router-dom"
import './nac.style.scss'

const Navigation = () => {
    return(<>
   
      <nav className="menu-container">
       <div className="logo-container">
          <Link to='/'>Nomad</Link>
           </div>

       <ul>
           <li><Link to='/'>Home</Link></li>
           <li><Link to='/'>Shop</Link></li>
           </ul>
    </nav>
    
    </>)

}
export default Navigation