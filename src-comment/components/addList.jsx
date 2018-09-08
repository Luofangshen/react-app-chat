import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../redux/actions'

class AddList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      content: ''
    }
  }
  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleClick = () => {
    if (this.state.username.trim() && this.state.content.trim()) {
      this.props.addComment(this.state)
      this.setState({
        username: '',
        content: ''
      })
    } else {
      alert('用户名或者内容不能为空')
    }
  }

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  render () {
    return (
        <div className="col-lg-4 col-md-4">
          <form >
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">用户名</label>
              <input name='username' type="text" className="form-control" id="exampleInputEmail1" placeholder="用户名" value={this.state.username}
                     onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">评论内容</label>
              <textarea  name='content' className="form-control" rows="3" id='exampleInputPassword1' placeholder='评论内容' value={this.state.content}
                         onChange={this.handleChange}/>
            </div>
          </form>
          <button type="button" className="btn btn-info" onClick={this.handleClick}>提交</button>
        </div>
    )
  }
}

export default connect(
    state => ({}),
    {addComment}
)(AddList)
