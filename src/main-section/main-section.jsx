import React from 'react'
import {withRouter} from 'react-router-dom'
import studiobag from '../assets/studio-bag-2.png'
import './main-section.style.scss'

const MainSection = ({history}) => {
    return(<>
        <div className="main-section-container">
          <div className="main-section-middle">
           <div className="image">
             <img  src={studiobag} alt="studio bag"/>
           </div>
           <div className="ms-m-description">
             <h2>Desgined for fashion. Crafted for sport</h2>
             <p>
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis ipsam ea at voluptatum voluptas minima esse, corporis soluta laborum, quidem aut quibusdam veniam ratione rem doloremque assumenda odio provident eos!
             </p>
             <button className="button is-black" id = "shop-now" onClick={() => history.push('/product/1')}>
                STUDIO BAG
             </button>
           </div>
          </div>
        </div>
     
       </>)
     
}

export default withRouter(MainSection)