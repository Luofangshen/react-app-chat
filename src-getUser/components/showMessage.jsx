import React, {Component} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export default class ShowMessage extends Component{
  state = {
    pending: true,
    loading: false,
    data: [],
    error: '',
    cancel: null
  }

  static propTypes = {
    searchName: PropTypes.string.isRequired
  }

  componentWillReceiveProps (nextProps) {

    this.setState({
      pending: false,
      loading: true,
      data: [],
      error: false,
    })

    if (this.state.cancel) {
      this.state.cancel()
    }

    if (nextProps.searchName) {
        let CancelToken = axios.CancelToken;

        axios.get(`https://api.github.com/search/users?q=${nextProps.searchName}`, {
          cancelToken: new CancelToken((c) => {
             this.setState({
               cancel: c
             })
          })
        })
            .then(res => {
              let result = res.data
              let output = result.items
              let data = output.map((item, index) => ({html_url: item.html_url, avatar_url: item.avatar_url, login:item.login}))
              this.setState({
                loading: false,
                data
              })
            })
            .catch(res => {
              if (axios.isCancel(res)) {
                console.log('取消了')
              } else {
                this.setState({
                  loading: false,
                  error: true
                })
              }
            })
      }




    }



  render () {
    return (
        <div>
          <div className="container-fluid">
            {this.state.pending ? <h1>Enter name to search</h1> : null}
            {this.state.loading ? <h1>Loading to search</h1> : null}
            {this.state.data ? <div className="row">
                  {this.state.data.map((user, index) =>
                      <div className="col-sm-4 col-md-3 col-lg-2" key={index}>
                        <div className="thumbnail" style={{textAlign: 'center'}}>
                          <a href={user.html_url}>
                            <img src={user.avatar_url} alt="..." width='100'/>
                          </a>
                          <div className="caption" >
                            <p >{user.login}</p>
                          </div>
                        </div>
                      </div>
                  )}
            </div> : null}
            {this.state.error ? <h1>Error Not found</h1> : null}
          </div>
        </div>
    )
  }
}