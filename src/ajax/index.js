import ajax from './ajax'

// 注册用户
export const reqRegister = (username, password) => ajax('/register', {username, password}, 'POST')
//登录用户
export const reqLogin = (username, password) => ajax('/login', {username, password}, 'POST')
//更新用户
export const reqUpdate = (userinfo) => ajax('/update', userinfo, 'POST')
//获取用户信息
export const reqGetUser = () => ajax('/user')
//获取用户列表
export const reqGetUserList = () => ajax('/userlist')
//获取用户聊天记录列表
export const reqChatMsg = () => ajax('/msglist')
// 修改注定消息为已读
export const reqRead = (from) => ajax('/readmsg', {from}, 'POST')