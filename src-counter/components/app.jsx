import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Add from './add'

class App extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  }

  render () {
    return (
        <div style={{marginLeft: '15px', marginTop: '15px'}}>
          <p>click {this.props.count} times</p>
          <Add />
        </div>
    )
  }
}

export default connect(
    state => ({count: state}),
    {}
)(App)