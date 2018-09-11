import React, {Component} from 'react'
import {WhiteSpace, List, Button, Modal} from 'antd-mobile'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import {toLogOut} from '../../redux/actions'

const Item = List.Item;
const alert = Modal.alert;

class Personal extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    toLogOut: PropTypes.func.isRequired
  }

  render () {
    if (!this.props.user.header) {
      return null
    }
    let {header, username, info} = this.props.user
    return (
        <div className='personal'>
          <WhiteSpace size='lg' />
          <div className='info'>
            <img src={require(`../../images/headers/${header}.png`)} alt=""/>
            <p className='username'>{username}</p>
            <p className='introduction'>介绍:{info}</p>
          </div>
          <WhiteSpace size='lg' />
          <WhiteSpace size='lg' />
          <List>
            <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => {}}
            >
              收藏
            </Item>
            <Item
                thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                onClick={() => {}}
                arrow="horizontal"
            >
              图片
            </Item>
            <Item
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                arrow="horizontal"
                onClick={() => {}}
            >
              表情
            </Item>
            <Item
                thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                onClick={() => {}}
                arrow="horizontal"
            >
              设置
            </Item>
          </List>
          <WhiteSpace size='lg' />
          <WhiteSpace size='lg' />
          <Button
              type='primary'
              onClick={() =>
                  alert('退出提示', '你确认要退出么?', [
                    { text: '取消', onPress: () => {} },
                    { text: '确认', onPress: () => {
                        Cookies.remove('userid')
                        this.props.toLogOut()
                        this.props.history.replace('/login')
                      } },
                  ])
              }
          >
            退出登录
          </Button>
        </div>
    )
  }
}

export default connect(
    state => ({user: state.userMsg}),
    {toLogOut}
)(Personal)