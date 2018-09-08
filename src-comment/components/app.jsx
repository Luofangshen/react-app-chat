import React,{Component} from 'react'

import AddList from './addList'
import ShowList from './showList'

export default class App extends Component {

  render () {
    return (
        <div>
          <div className="jumbotron">
            <div className="container">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <AddList />
              <ShowList />
            </div>
          </div>
        </div>
    )
  }
}