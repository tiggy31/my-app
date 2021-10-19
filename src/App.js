
import React, {Switch,Route} from 'react-router-dom'
import Home from '../src/Home/Home'
import Notfound from '../src/NotFound'

const App = () => {
  return (
    <div>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='*' component={Notfound}/>
     </Switch>
     </div>
  )
}

export default App
