/*
   redux中action工厂函数
 */
import {INCREMENT, DECREMENT} from './action-types'

export const increment = (value) => ({type: INCREMENT, data: value})
export const decrement = (value) => ({type: DECREMENT, data: value})

export const incrementAsync = (value) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment(value))
    }, 1000)
  }
}