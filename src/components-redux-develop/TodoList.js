import React, {Component} from 'react'

import store from './store'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

export default class TodoList extends Component{
  constructor (props) {
    super (props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }
  componentWillMount () {
    // mock上模拟数据接口
    axios.get('https://www.easy-mock.com/mock/5c2f2e637106f779e7eacbd6/mockapi/list').then((res) => {
      const data = res.data.result
      const action = initListAction(data)
      store.dispatch(action)
    }).catch((err) => console.log('err---', err))
  }
  handleStoreChange=() =>{
    this.setState(store.getState())
  }
  handleChange=(e) =>{
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleClick=() =>{
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete=(index) =>{
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  render () {
    return (
    <TodoListUI
      list={this.state.list}
      inputValue={this.state.inputValue}
      handleChange={this.handleChange}
      handleClick={this.handleClick}
      handleItemDelete={this.handleItemDelete}
    />
    )
  }
}
