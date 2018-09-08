import React, {Component} from 'react'

import Search from './search'
import ShowMessage from './showMessage'

export default class App extends Component {

  state = {
    searchName: ''
  }

  setSearch = (searchName) => {
    this.setState({
      searchName
    })
  }

  render () {
    return (
        <div>
          <Search setSearch={this.setSearch}/>
          <ShowMessage searchName={this.state.searchName}/>
        </div>
    )
  }
}