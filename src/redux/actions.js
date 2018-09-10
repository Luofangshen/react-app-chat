/*
action 工厂函数
 */
import {RECEVIEUSER,ERRORMSG, UPDATEUSER, TOGETUSER} from './action-types'
import {reqRegister, reqLogin, reqUpdate, reqGetUser} from '../ajax/index'

export const toRecevieUser = (data) => ({type: RECEVIEUSER, data})
export const errorMsg = (data) => ({type: ERRORMSG, data})
export const updateUser = (data) => ({type: UPDATEUSER, data})
export const toGetUser = (data) => ({type: TOGETUSER, data})

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