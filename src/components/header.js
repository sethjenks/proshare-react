import React, { Component } from 'react'
import styled from 'styled-components'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'


function Header (){
    return(
      <ul className='nav'>
        <li>
          <NavLink activeClassName='active' to='/'>
            <img></img>
          </NavLink>
          <NavLink activeClassName='active' to='/'>
            Home
          </NavLink>
          <NavLink activeClassName='active' to='/printers'>
            Printers
          </NavLink>
          <NavLink activeClassName='active' to='/materials'>
            Materials
          </NavLink>
          <NavLink activeClassName='active' to='/materials/m-series'>
            M-Series Materials
          </NavLink>
          <NavLink activeClassName='active' to='/materials/inventure'>
            Inventure Materials
          </NavLink>
          <NavLink activeClassName='active' to='/printers/m200'>
            M200
          </NavLink>
          <NavLink activeClassName='active' to='/printers/m300'>
            M300
          </NavLink>
          <NavLink activeClassName='active' to='/printers/inventure'>
            Inventure
          </NavLink>
        </li>
      </ul>
    )
}

export default Header
