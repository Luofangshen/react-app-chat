import React, {Component} from 'react'

const messageDetails = [
  {id: 1, title: 'Message01', content: '我爱你, 中国'},
  {id: 2, title: 'Message02', content: '我爱你, 老婆'},
  {id: 3, title: 'Message03', content: '我爱你, 孩子'},
]


export default class MessageContent extends Component{


  render () {
    let {id} = this.props.match.params
    let message = messageDetails.find(message => message.id === +id)
    console.log(this.props.history)
    
    return (
        <div>
          <ul>
            <li>id: {message.id}</li>
            <li>title: {message.title}</li>
            <li>content: {message.content}</li>
          </ul>
        </div>
    )
  }
}