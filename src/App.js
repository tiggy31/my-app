
import React, {Switch,Route} from 'react-router-dom'
import Home from '../src/Home/Home'
import Notfound from '../src/NotFound'
import Shop from '../src/pages/shop/shop'

const App = () => {
  return (
    <div>
     <Switch> 
       <Route exact path='/' component={Home}/>
       <Route path='/shop' component = {Shop}/>
       <Route path='*' component={Notfound}/>
    

     </Switch>
     </div>
  )
}

export default App
