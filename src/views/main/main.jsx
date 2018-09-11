import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Cookies from 'js-cookie'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import UserInfo from './userinfo'
import Message from './message'
import Personal from './personal'
import UserList from './userlist'
import NavFooter from '../../components/navfooter'
import NavTitle from '../../components/navtitle'
import Chat from './chat'
import {toGetUserAsync, toRecevieUserListAsync} from '../../redux/actions'

class Main extends Component {

  componentDidMount () {
    let userid = Cookies.get('userid')
    let cb = () => {
      this.props.toRecevieUserListAsync()
      if (!this.props.user.header) {
        this.props.history.replace('/userinfo')
        return null
      } else {
        this.props.history.replace('/message')
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
    toGetUserAsync: PropTypes.func.isRequired,
    toRecevieUserListAsync: PropTypes.func.isRequired
  }

  render () {
    return (
        <div className='main'>
          {
            this.props.location.pathname === '/message' ||
            this.props.location.pathname === '/personal' ||
            this.props.location.pathname === '/userlist'
                ? <NavTitle /> : null
          }
          <Switch>
            <Route path='/userinfo' component={UserInfo} />
            <Route path='/message' component={Message} />
            <Route path='/userlist' component={UserList} />
            <Route path='/personal' component={Personal} />
            <Route path='/chat/:id' component={Chat}/>
          </Switch>
          {
          this.props.location.pathname === '/message' ||
          this.props.location.pathname === '/personal' ||
          this.props.location.pathname === '/userlist'
              ? <NavFooter /> : null
          }
        </div>
    )
  }
}
export default connect(
    state => ({user: state.userMsg}),
    {toGetUserAsync, toRecevieUserListAsync}
)(Main)
