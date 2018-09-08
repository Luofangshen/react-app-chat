import React, {Component} from 'react'
import {Route, Redirect, Switch, NavLink} from 'react-router-dom'

import About from '../views/about'
import Home from '../views/home'

export default class App extends Component {

  render () {
    return (
        <div>
          <div className="container">
            <div className="jumbotron">
              <h1>DEMO</h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-2 col-md-2 col-lg-2 ">
                <div className="list-group">
                  <NavLink to='/about' className="list-group-item">About</NavLink>
                  <NavLink to='/home' className="list-group-item">Home</NavLink>
                </div>
              </div>
              <div className="col-sm-8 col-md-8 col-lg-8">
                  <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                    <Redirect to="/about" />
                  </Switch>
              </div>
            </div>
          </div>
        </div>
    )
  }
}