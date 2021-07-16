import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import About from './pages/About'



const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
      </Switch>
    </>
  )
}



export default App
