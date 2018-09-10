/*
一堆reducer纯函数
 */
import {RECEVIEUSER, ERRORMSG, UPDATEUSER, TOGETUSER} from './action-types'

const initUser = {}

export function userMsg(state=initUser, action) {
  switch (action.type) {
    case RECEVIEUSER:
      return {...state,msg: '',...action.data}
    case ERRORMSG:
      return {...state, msg: action.data}
    case UPDATEUSER:
      return {...state,msg: '',...action.data}
    case TOGETUSER:
      return {...state,msg: '',...action.data}
    default:
      return state
  }
}