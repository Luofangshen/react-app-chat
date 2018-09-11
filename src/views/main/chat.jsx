import React, {Component} from 'react'
import io from 'socket.io-client'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {List, InputItem, NavBar, Icon} from 'antd-mobile'

class Chat extends Component {
  state = {
    content: ''
  }

  static propTypes = {
    user: PropTypes.object.isRequired
  }

  handleChange = (value) => {
    this.setState({
      content: value
    })
  }

  componentDidMount () {
    this.socket = io.connect('http://localhost:4001');
    this.socket.on('receiveMsg', function (data) {
      console.log(data);
    });
  }

  componentWillUnmount () {
    this.socket.disconnect()
  }

  sendMsg = () => {
    let from = this.props.user._id
    let to = this.props.match.params.id
    let {content} = this.state
    if (content.trim()){
      this.socket.emit('sendMsg', {from, to, content})
    }
    this.setState({
      content: ''
    })
  }

  render () {

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
          >{this.props.user.username}</NavBar>
          <div className='content'>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p><p>11111</p><p>11111</p>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p><p>11111</p><p>11111</p>
            <p>11111</p>
            <p>11111</p><p>11111</p>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p><p>11111</p><p>11111</p>
            <p>11111</p>
            <p>11111</p><p>11111</p>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p><p>11111</p><p>11111</p>
            <p>11111</p>
            <p>11111</p><p>11111</p>
            <p>11111</p>
            <p>11111</p>
            <p>11111</p><p>11111</p><p>11111</p>
            <p>11111</p>
            <p>11111</p>


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
    state => ({user: state.userMsg}),
    {}
)(Chat)