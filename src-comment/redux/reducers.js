/*
reducer纯函数
 */
import {DELETECOMMENT, ADDCOMMENT} from './action-types'

const initComments = [
  {username: 'Jack', content: 'React真难'},
  {username: 'Blue', content: 'React还行'},
  {username: 'caa', content: 'React不错'}
]

export function comments(state=initComments, action) {
  switch (action.type) {
    case DELETECOMMENT:
      return state.filter((user, index) => index !== action.data)
    case ADDCOMMENT:
      return [...state, action.data]
    default:
        return state
  }
}