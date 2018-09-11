/*
action 工厂函数
 */
import {RECEVIEUSER,ERRORMSG, UPDATEUSER, TOGETUSER, LOGOUT, RECEVIEUSERLIST} from './action-types'
import {reqRegister, reqLogin, reqUpdate, reqGetUser, reqGetUserList} from '../ajax/index'

const toRecevieUser = (data) => ({type: RECEVIEUSER, data})
const errorMsg = (data) => ({type: ERRORMSG, data})
const updateUser = (data) => ({type: UPDATEUSER, data})
const toGetUser = (data) => ({type: TOGETUSER, data})
export const toLogOut = () => ({type: LOGOUT})
const toRecevieUserList = (data) => ({type: RECEVIEUSERLIST, data})

//注册异步action
export const toRegisterAsync = (username, password) => {
  return async dispatch => {
    let result = await reqRegister(username, password)
    if (result.code === 0) {
      dispatch(toRecevieUser(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}

// 登录异步action
export const toLoginAsync = (username, password) => {
  return async dispatch => {
    let result = await reqLogin(username, password)
    if (result.code === 0) {

      dispatch(toRecevieUser(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}

// 更新异步action
export const toUpdateAsync = (userinfo) => {
  return async dispatch => {
    let result = await reqUpdate(userinfo)
    if (result.code === 0) {

      dispatch(updateUser(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}

// 异步获取用户信息action
export const toGetUserAsync = (cb) => {
  return async dispatch => {
    let result = await reqGetUser()
    if (result.code === 0) {
      dispatch(toGetUser(result.data))
      cb()
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}

//异步获取用户列表信息
export const toRecevieUserListAsync = () => {
  return async dispatch => {
    let result = await reqGetUserList()
    if (result.code === 0) {
      dispatch(toRecevieUserList(result.data))
    } else {
      dispatch(errorMsg(result.msg))
    }
  }
}