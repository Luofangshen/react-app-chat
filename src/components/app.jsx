import React, {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from '../views/login'
import Register from '../views/register'
import Main from '../views/main/main'

export default class App extends Component{
  render () {

    return (
      <div>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/' component={Main}/>
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}