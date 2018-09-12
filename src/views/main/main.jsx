import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Cookies from 'js-cookie'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import io from 'socket.io-client'
import PubSub from 'pubsub-js'

import UserInfo from './userinfo'
import Message from './message'
import Personal from './personal'
import UserList from './userlist'
import NavFooter from '../../components/navfooter'
import NavTitle from '../../components/navtitle'
import Chat from './chat'
import {toGetUserAsync, toRecevieUserListAsync, toReceiveChatAsync, toReceiveOneChat} from '../../redux/actions'

class Main extends Component {

  componentDidMount () {
    let userid = Cookies.get('userid')
    let cb = () => {
      this.props.toRecevieUserListAsync()
      this.props.toReceiveChatAsync()
      this.socket = io.connect('http://localhost:4001');
      PubSub.subscribe('MSG', (msg, data) => {
        this.socket.emit('sendMsg', data);
      });
      this.socket.on('receiveMsg',(data) => {      
        if (data.from === this.props.user._id || data.to === this.props.user._id) {
          this.props.toReceiveOneChat(data)
        } 

      });
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

  componentWillUnmount() {
	if (this.socket) {
	this.socket.disconnect()
	}
    
  }

  static propTypes = {
    user: PropTypes.object.isRequired,
    chat: PropTypes.object.isRequired,
    toGetUserAsync: PropTypes.func.isRequired,
    toRecevieUserListAsync: PropTypes.func.isRequired,
    toReceiveChatAsync: PropTypes.func.isRequired,
    toReceiveOneChat: PropTypes.func.isRequired
  }

  render () {
    if (!this.props.chat.chatMsgs) {
      return null
    }
    let {chatMsgs} = this.props.chat
    chatMsgs = chatMsgs.filter((chatMsg, index) => chatMsg.to === this.props.user._id)
    let num = chatMsgs.reduce((total, chatMsg) => total + (chatMsg.read ? 0 : 1), 0)
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
              ? <NavFooter num={num}/> : null
          }
        </div>
    )
  }
}
export default connect(
    state => ({user: state.userMsg, chat: state.chat}),
    {toGetUserAsync, toRecevieUserListAsync, toReceiveChatAsync, toReceiveOneChat}
)(Main)
