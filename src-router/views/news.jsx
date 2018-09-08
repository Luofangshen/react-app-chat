import React, {Component} from 'react'

export default class News extends Component {
  state = {
    newArr: ['news01', 'news02', 'news03']
  }

  render () {
    return (
        <div >
          <ul>
            {
              this.state.newArr.map((news, index) => (
                  <li key={index}>
                    {news}
                  </li>
              ))
            }
          </ul>
        </div>
    )
  }
}