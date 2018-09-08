import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import store from '../redux/store'
import {increment, decrement, incrementAsync} from '../redux/actions'

class Add extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  state = {
    select: 1
  }

  handleChange = (ev) => {
    this.setState({
      select: +ev.target.value
    })
  }

  addNumber = () => {
    this.props.increment(this.state.select)
  }

  decNumber = () => {
    this.props.decrement(this.state.select)
  }

  addOdd = () => {
    if (store.getState() % 2 !== 0) {
      this.props.increment(this.state.select)
    }
  }

  addAsync = () => {
    this.props.incrementAsync(this.state.select)
  }
  render () {
    return (
        <div>
          <select value={this.state.select} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;&nbsp;
          <button onClick={this.addNumber}>+</button>&nbsp;&nbsp;
          <button onClick={this.decNumber}>-</button>&nbsp;&nbsp;
          <button onClick={this.addOdd}>increment if odd</button>&nbsp;&nbsp;
          <button onClick={this.addAsync}>increment async</button>&nbsp;&nbsp;
        </div>
    )
  }
}

export default connect(
    state => ({count: state}),
    {increment, decrement, incrementAsync}
)(Add)