import React, {Component} from 'react'
import {Button, Toast} from 'antd-mobile'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import {toLoginAsync} from '../redux/actions'
import {connect} from 'react-redux'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    toLoginAsync: PropTypes.func.isRequired
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleClick = () => {
    this.props.history.replace('/register')
  }

  Login = () => {
    let {username, password} = this.state
    if (username.trim() && password.trim()) {
     this.props.toLoginAsync(username, password)
    } else {
      Toast.info('用户名或者密码不能为空', 1)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.user.msg) {
      Toast.info(nextProps.user.msg, 1)
    }
    if (nextProps.user._id) {
      this.props.history.replace('/')
    }
  }

  componentDidMount () {
    let userid = Cookies.get('userid')
    if (userid) {
      this.props.history.replace('/')
    }
  }

  render () {

    return (
        <div className='login'>
          <i className='iconfont icon-xiaofuquanlogo01 login-logo' />
          <p>聊天你我他</p>
          <div className='container item'>
            <i className='iconfont icon-yonghu tubiao' />
            <input type="text" placeholder='用户名' name='username' maxLength={20} value={this.state.username}
                onChange={this.handleChange}/>
          </div>
          <div className='container item'>
            <i className='iconfont icon-mima tubiao' />
            <input type="password" name='password' placeholder='密码' maxLength={16} value={this.state.password}
                   onChange={this.handleChange} />
          </div>
          <div className='container'>
            <Button type='primary' onClick={this.Login}>登录</Button>
          </div>
          <div className='container'>
            <Button type='primary' onClick={this.handleClick}>还没有账户</Button>
          </div>
        </div>
    )
  }
}

export default connect(
    state => ({user: state}),
    {toLoginAsync}
)(Login)