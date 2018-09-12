import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Badge} from 'antd-mobile'
import PropTypes from 'prop-types'

class NavFooter extends Component {

  static propTypes = {
    num: PropTypes.number.isRequired
  }

  render () {

    return (
        <div className="navfooter-wrap">
          <div className='nav-footer'>
            <div className={this.props.location.pathname === '/message' ? 'active' : ''} onClick={() => this.props.history.replace('/message')}>
              {this.props.location.pathname !== '/message' ? <Badge text={this.props.num} overflowCount={30}><i className='iconfont icon-weixin2'/></Badge>: <Badge text={this.props.num} overflowCount={30}><i className='iconfont icon-weixin2'/></Badge>}
            </div>
            <div className={this.props.location.pathname === '/userlist' ? 'active' : ''} onClick={() => this.props.history.replace('/userlist')}>
              {this.props.location.pathname !== '/userlist' ? <i className='iconfont icon-group'/> : <i className='iconfont icon-group_fill'/>}
            </div>
            <div className={this.props.location.pathname === '/personal' ? 'active' : ''} onClick={() => this.props.history.replace('/personal')}>
              {this.props.location.pathname !== '/personal' ? <i className='iconfont icon-people'/> : <i className='iconfont icon-people_fill'/>}
            </div>
          </div>
          <div className="empty" />
        </div>
    )
  }
}

export default withRouter(NavFooter)