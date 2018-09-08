import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {deleteComment} from '../redux/actions'

class ShowList extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
  }

  deleteOne = (index, comment) => {
    if (window.confirm(`确认删除${comment.username}吗`) ) {
      this.props.deleteComment(index)
    }
  }

  render () {
    return (
        <div className="col-lg-8 col-md-8">
          <h2>评论回复</h2>
          {this.props.comments.length ? <ul className="list-group">
            {
              this.props.comments.map((comment, index) => (
                  <li className="list-group-item" key={index}>
                    <button className="btn btn-default left" onClick={() => this.deleteOne(index, comment)}>删除</button>
                    <h3>{comment.username}说</h3>
                    <p className='middle'>{comment.content}</p>
                  </li>
              ))
            }
          </ul> : <h1>暂无评论</h1>}
        </div>
    )
  }
}

export default connect(
    state => ({comments: state}),
    {deleteComment}
)(ShowList)