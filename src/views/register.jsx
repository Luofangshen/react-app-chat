import React, {Component} from 'react'
import {Button, Toast} from 'antd-mobile'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import {toRegisterAsync} from '../redux/actions'
import {connect} from 'react-redux'

class Register extends Component {
  state = {
    username: '',
    password: '',
    isPassword: ''
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    toRegisterAsync: PropTypes.func.isRequired
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleClick = () => {
    this.props.history.replace('/login')
  }

  Register = () => {
    let {username, password, isPassword} = this.state
    if (username.trim() && password.trim()) {
      if (password !== isPassword) {
        Toast.info('两次密码要一致', 1)
      } else {
        this.props.toRegisterAsync(username, password)
      }
    } else {
      Toast.info('用户名或者密码不能为空', 1)
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.user.msg) {
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
            <i className='iconfont icon-wode tubiao' />
            <input type="text" placeholder='请输入注册用户名' maxLength={20} value={this.state.username}
                   onChange={this.handleChange} name='username'/>
          </div>
          <div className='container item'>
            <i className='iconfont icon-mima tubiao' />
            <input type="password" placeholder='请输入密码' maxLength={16} value={this.state.password}
                   onChange={this.handleChange} name='password'/>
          </div>
          <div className='container item'>
            <i className='iconfont icon-mima tubiao' />
            <input type="password" placeholder='请再次输入密码' maxLength={16} value={this.state.isPassword}
                   onChange={this.handleChange} name='isPassword'/>
          </div>
          <div className='container'>
            <Button type='primary' onClick={this.Register}>注册</Button>
          </div>
          <div className='container'>
            <Button type='primary' onClick={this.handleClick}>已有账户</Button>
          </div>
        </div>
    )
  }
}

export default connect(
    state => ({user: state.userMsg}),
    {toRegisterAsync}
)(Register)