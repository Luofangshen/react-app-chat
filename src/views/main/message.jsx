import React, {Component} from 'react'
import {List, Badge} from 'antd-mobile'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  static propTypes = {
    chat: PropTypes.object.isRequired
  }

  render () {
    if (!this.props.chat.users) {
      return null
    }
    let {users, chatMsgs} = this.props.chat
    let {_id} = this.props.user
    let arr = Object.keys(users).map((id, index) => {
      return chatMsgs.filter((chatMsg, index) => chatMsg.from === id && chatMsg.to === _id)
    })
    arr = arr.filter((chatArr, index) => chatArr.length !== 0)
    arr.sort((a, b) => {
      return b[b.length - 1].create_time - a[a.length - 1].create_time
    })
    return (
        <div>
          <List>
            {
              arr.map((chatArr, index) => {
                let id = chatArr[0].from !== _id ? chatArr[0].from : chatArr[0].to
                let length = chatArr.reduce((total, chat) => total + (chat.read ? 0 : 1), 0)
                return (
                    <Item
                        extra={<Badge text={length} overflowCount={30} />}
                        key={index}
                        arrow="horizontal"
                        thumb={require(`../../images/headers/${users[id].header}.png`)}
                        multipleLine
                        onClick={() => this.props.history.push(`/chat/${id}`)}
                    >
                      {users[id].username}
                      <Brief>{chatArr[chatArr.length-1].content}</Brief>
                    </Item>
                )
              })
            }

          </List>
        </div>
    )
  }
}

export default connect(
    state => ({chat: state.chat, user: state.userMsg}),
    {}
)(Message)