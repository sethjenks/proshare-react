import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import logo from 'images/logo.svg'
import 'App.css'
import styled from 'styled-components'

import Header from 'header'
import Footer from 'footer'

import Front from 'front'
import Printers from 'printers'
import Materials from 'materials'
import Mseries200 from 'm200'
import Mseries300 from 'm300'
import Inventure from 'inventure'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Front} />
            <Route exact path='/printers' component={Printers} />
            <Route path='/printers/m200' component={Mseries200} />
            <Route path='/printers/m300' component={Mseries300} />
            <Route path='/printers/inventure' component={Inventure} />
            <Route path='/materials' component={Materials} />
            <Route render= {function(){
              return <h1>404 Not Found</h1>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
