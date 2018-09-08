import {DECREMENT, INCREMENT} from './action-types'

const initCount = 0

export function count(state = initCount, action) {

  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  }





}