import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {List, InputItem, NavBar, Icon} from 'antd-mobile'
import PubSub from 'pubsub-js'

import {toReadAsync, toReceiveChatAsync} from '../../redux/actions'

class Chat extends Component {
  state = {
    content: ''
  }

  componentDidMount () {
    let fb = () => {
      this.props.toReceiveChatAsync()
    }
    this.props.toReadAsync(this.props.match.params.id, fb)
    document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight
    window.pageYOffset =  document.documentElement.scrollHeight - document.documentElement.clientHeight
    document.body.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight
  }

  componentWillUnmount () {
      let fb = () => {
        this.props.toReceiveChatAsync()
      }
      this.props.toReadAsync(this.props.match.params.id, fb)
  }

  componentDidUpdate () {
    document.documentElement.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight
    window.pageYOffset =  document.documentElement.scrollHeight - document.documentElement.clientHeight
    document.body.scrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight

  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    chat: PropTypes.object.isRequired,
    toReadAsync: PropTypes.func.isRequired,
    toReceiveChatAsync: PropTypes.func.isRequired
  }

  handleChange = (value) => {
    this.setState({
      content: value
    })
  }

  sendMsg = () => {
    let from = this.props.user._id
    let to = this.props.match.params.id
    let {content} = this.state
    if (content.trim()){
      PubSub.publish('MSG', {from, to, content});
    }
    this.setState({
      content: ''
    })
  }

  render () {
    if (!this.props.chat.users) {
      return null
    }
    let {chatMsgs} = this.props.chat
    let {username, header} = this.props.chat.users[this.props.match.params.id]
    let from = this.props.user._id
    let to = this.props.match.params.id
    let chat_id = [from, to].sort().join('_')
    chatMsgs = chatMsgs.filter((chatMsg, index) => chatMsg.chat_id === chat_id)


    return (
        <div className='chat'>
          <NavBar
              className='navbar'
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() => this.props.history.goBack()}
              rightContent={[
                <Icon key="1" type="ellipsis" />,
              ]}
          >{username}</NavBar>
          <div className='content'>
            {
              chatMsgs.map((chatMsg, index) => {
                return (
                    <div className={chatMsg.from === to ? 'chatContent left' : 'chatContent right'} key={index}>
                      {chatMsg.from === to ? <img src={require(`../../images/headers/${header}.png`)} alt=""/> : <img src={require(`../../images/headers/${this.props.user.header}.png`)} alt=""/>}
                      <p >{chatMsg.content}</p>
                    </div>
                )
              })
            }
          </div>
          <List className='inputItem'>
            <InputItem
                placeholder="你想说点什么"
                extra={<i className='iconfont icon-fasong sendBtn' />}
                onExtraClick={this.sendMsg}
                onChange={this.handleChange}
                value={this.state.content}
                clear
            />
          </List>
        </div>
    )
  }
}

export default connect(
    state => ({user: state.userMsg, chat: state.chat}),
    {toReadAsync, toReceiveChatAsync}
)(Chat)