import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class NavTitle extends Component {

  render () {

    return (
        <div className='nav-title'>
            {this.props.location.pathname !== '/message' ? null : '消息'}
            {this.props.location.pathname !== '/userlist' ? null : '通讯录'}
            {this.props.location.pathname !== '/personal' ? null : '我'}
        </div>
    )
  }
}

export default withRouter(NavTitle)