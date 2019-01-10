import React, {Component} from 'react'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'

export default class UserList extends Component{
  constructor (props) {
    super (props)
    // 初始化状态
    this.state = {users: []}
  }
  componentWillMount () {
    // 从缓存中读取用户列表字符串
    let userStr = localStorage.getItem('users')
    // 转成对象数组
    let users = userStr?JSON.parse(userStr):[]
    this.setState({users})
  }
  render () {
    return (
    <ul className='list-group'>
      {
        this.state.users.map((v, i) => (
          <li className='list-group-item' key={i}>
            <Link to={'/user/detail/' + v.id}>{v.name}</Link>
          </li>
        ))
      }
    </ul>
    )
  }
}
