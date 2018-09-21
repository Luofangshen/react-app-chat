import React, {Component} from 'react'
import {WhiteSpace, Card, WingBlank} from 'antd-mobile'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Userlist extends Component {
  static propTypes = {
    userList: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired
  }

  handleClick = (user) => {
    this.props.history.push(`/chat/${user._id}`)
  }
  
  render () {
    if (this.props.userList) {
      let userList = this.props.userList.filter((user, index) => user.username !== this.props.user.username)
      return (
          <div>
            <WhiteSpace />
            <WingBlank size="lg">
              {
                userList.map((user, index) => {
                  let header = user.header
                  return (
                      <div key={index}>
                        <WhiteSpace size="lg" />
                        <Card onClick={() => this.handleClick(user)}>
                          <Card.Header
                              title={user.username}
                              thumb={header ? require(`../../images/headers/${header}.png`) : ''}
                              extra={<i className='iconfont icon-arrow-right-copy' style={{fontSize: '1rem'}} />}
                          />
                          <Card.Body>
                            <div>个人介绍:{user.info}</div>
                          </Card.Body>
                        </Card>
                        <WhiteSpace size="lg" />
                      </div>
                  )
                })
              }
            </WingBlank>
          </div>
      )
    }
    return null
  }
}

export default connect(
    state => ({userList: state.userList, user: state.userMsg}),
    {}
)(Userlist)