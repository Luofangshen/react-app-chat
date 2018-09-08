import React, {Component} from 'react'
import {NavLink, Route} from 'react-router-dom'

import MessageContent from './messageContent'

export default class News extends Component {

  state = {
    messages: []
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        messages: [{id: 1, content: 'message01'}, {id: 2, content: 'message02'}, {id: 3, content: 'message03'}]
      })
    }, 2000)

  }

  render () {
    return (
        <div>
          <ul>
            {
              this.state.messages.map((message, index) => (
                  <li key={index}>
                    <NavLink to={`/home/messages/${message.id}`}>
                      {message.content}
                    </NavLink>
                  </li>
              ))
            }
          </ul>
          <Route path='/home/messages/:id' component={MessageContent}/>
        </div>
    )
  }
}