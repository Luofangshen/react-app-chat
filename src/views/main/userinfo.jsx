import React, {Component} from 'react'
import {Grid, Button, List, TextareaItem} from 'antd-mobile'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {toUpdateAsync} from '../../redux/actions'

const data = Array.from(new Array(20)).map((_val, i) => ({
  icon: require(`../../images/headers/头像${i+1}.png`),
  text: `头像${i+1}`,
}));

class UserInfo extends Component{

  state = {
    header: '',
    info: ''
  }

  static propTypes = {
    toUpdateAsync: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  }

  handleClick = (el, index) => {
    this.setState({
      header: el.text,
    })
  }

  handleChange = (value) => {
    this.setState({
      info: value
    })
  }

  save = () => {
    const {header} = this.state
    if (header !== '') {
      this.props.toUpdateAsync(this.state)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.user.header) {
      this.props.history.replace('/userlist')
    }
  }

  componentDidMount () {
    if (this.props.user.header) {
      this.props.history.replace('/userlist')
    }
  }
  
  render () {

    return (
        <div className='userinfo'>
          {this.state.header ? (<div className="title">
            <span style={{position: 'absolute', margin: '10px', fontSize: '20px'}}>{`你选择的是`}</span>
            <img src={require(`../../images/headers/${this.state.header}.png`)} alt=""
                 style={{display: 'inline-block', paddingTop: '14px', marginLeft: '120px'}}/>
          </div>) : <p style={{margin: '10px', fontSize: '20px'}}>请选择头像</p>}
          <Grid data={data}
                columnNum={5}
                onClick={this.handleClick}
                renderItem={dataItem => (
                    <div >
                      <img src={dataItem.icon} style={{width: '52%!important'}} alt="" />
                    </div>
                )}
          />
          <List renderHeader={() => '介绍'}>
            <TextareaItem
                value={this.state.info}
                onChange={this.handleChange}
                rows={5}
                count={100}
            />
          </List>
          <br/>
          <Button type='primary' onClick={this.save}>完善信息</Button>
        </div>
    )
  }
}

export default connect(
    state => ({user: state}),
    {toUpdateAsync}
)(UserInfo)