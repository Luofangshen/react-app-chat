import React, {Component} from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'

import Messages from '../views/messages'
import News from '../views/news'

export default class Home extends Component {

  render () {
    return (
        <div className='container home'>
          <h1>Home组件内容</h1>
          <ul className="nav nav-pills">
            <li role="presentation"><NavLink to='/home/news' >News</NavLink></li>
            <li role="presentation"><NavLink to='/home/messages' >Messages</NavLink></li>
          </ul>
          <Switch>
            <Route path='/home/news' component={News} />
            <Route path='/home/messages' component={Messages}/>
            <Redirect to='/home/news' />
          </Switch>
        </div>

    )
  }
}