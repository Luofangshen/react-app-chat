/*
一堆reducer纯函数
 */
import {RECEVIEUSER, ERRORMSG, UPDATEUSER, TOGETUSER, LOGOUT, RECEVIEUSERLIST} from './action-types'
import {combineReducers} from 'redux'
const initUser = {}

function userMsg(state=initUser, action) {
  switch (action.type) {
    case RECEVIEUSER:
      return {...state,msg: '',...action.data}
    case ERRORMSG:
      return {...state, msg: action.data}
    case UPDATEUSER:
      return {...state,msg: '',...action.data}
    case TOGETUSER:
      return {...state,msg: '',...action.data}
    case LOGOUT:
      return {}
    default:
      return state
  }
}

const initUserList = []
function userList(state=initUserList, action) {
  switch (action.type) {
    case RECEVIEUSERLIST:
      return [...state, ...action.data]
    case LOGOUT:
      return []
    default:
      return state
  }
}

export default combineReducers({
  userMsg,
  userList
})
