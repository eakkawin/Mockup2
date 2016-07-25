import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Navbar from './components/Navbar.js'
import EQuote from './components/EQuote.js'
import InsuranceTab from './components/InsuranceTab.js'
import AddInsuranceTab from './components/AddInsuranceTab.js'
import Footer from './components/Footer.js'

export default()=>{
  return(
    <Router history={browserHistory}>
        <Route path="/" component={Navbar}>
          <IndexRoute component={InsuranceTab}/>
        </Route>
    </Router>
  )
}
// <IndexRoute component={Footer}/>
          // <Route path="/equote" component={EQuote}>
          //   <IndexRoute component={Tabbar}/>
          // </Route>