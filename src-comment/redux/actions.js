/*
action对象的工厂函数
 */
import {DELETECOMMENT, ADDCOMMENT} from './action-types'

export const deleteComment = (data) => ({type: DELETECOMMENT, data})
export const addComment = (data) => ({type: ADDCOMMENT, data})