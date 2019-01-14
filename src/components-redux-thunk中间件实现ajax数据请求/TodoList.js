import React, {Component} from 'react'

import store from './store'
import {getTodoList, getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

export default class TodoList extends Component{
  constructor (props) {
    super (props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }
  componentWillMount () {
    // action返回一个函数，注意getTodolist()也是个未调用的函数
    const action = getTodoList()
    // 当dispatch时候 action中的函数就会被自动执行
    store.dispatch(action)
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
