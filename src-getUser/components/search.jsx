import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
  state = {
    searchName: ''
  }

  static propTypes = {
    setSearch: PropTypes.func.isRequired
  }

  handleChange = (ev) => {
    this.setState({
      searchName: ev.target.value
    })
  }

  handleClick = () => {
    if (this.state.searchName.trim()) {
      this.props.setSearch(this.state.searchName)
    }
    this.setState({
      searchName: ''
    })
  }

  render() {
    return (
        <div>
          <div className="container-fluid">
            <div className="jumbotron">
              <h1>Search GitHub users</h1>
              <input type="text" value={this.state.searchName} onChange={this.handleChange}/>
              <button onClick={this.handleClick}>Search</button>
            </div>
          </div>
        </div>
    )
  }
}