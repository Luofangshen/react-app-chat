import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Cookies from 'js-cookie'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import UserInfo from './userinfo'
import Message from './message'
import Personal from './personal'
import UserList from './userlist'
import {toGetUserAsync} from '../../redux/actions'

class Main extends Component {




  componentDidMount () {
    let userid = Cookies.get('userid')
    let cb = () => {
      if (!this.props.user.header) {
        this.props.history.replace('/userinfo')
        return null
      } else {
        this.props.history.replace('/userlist')
        return null
      }
    }
    if (!userid) {
      this.props.history.replace('/login')
      return null
    } else {
      if (!this.props.user.username) {
        this.props.toGetUserAsync(cb)
        return null
      }
    }
    cb()
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    toGetUserAsync: PropTypes.func.isRequired
  }

  render () {

    return (
        <div className='main'>
          <Switch>
            <Route path='/userinfo' component={UserInfo} />
            <Route path='/message' component={Message} />
            <Route path='/userlist' component={UserList} />
            <Route path='/personal' component={Personal} />
          </Switch>
          {this.props.location.pathname === '/message' ||
          this.props.location.pathname === '/personal' ||
          this.props.location.pathname === '/userlist'
              ? (
                  <div className='nav-footer'>
                    nav-footer
                  </div>
              ) : null

          }

        </div>
    )
  }
}
export default connect(
    state => ({user: state}),
    {toGetUserAsync}
)(Main)
