import React, {Component} from 'react'
import {createStore} from './redux'
const ADD_TODO = 'ADD_TODO' // 这是action的类型  增加todo
const DELETE_TODO = 'DELETE_TODO' // 删除todo

let reducer = (state={list: []}, action) =>{
  if (action === undefined) return state
  switch (action.type){
    case ADD_TODO:
      return {list: [...state.list, action.text]}

    case DELETE_TODO:
      let list = state.list
      list.splice(action.index, 1)
      // 状态具有不变性，每次都要返回一个新的对象
      return {list: [...list]}
    default:
      return state
  }
}
let store = createStore(reducer)


export default class Todo extends Component{
  constructor (props) {
    super (props)
    // 初始化状态
    this.state = {list: store.getState().list}
  }
  componentWillMount () {
    this.unSubscribe = store.subscribe(() =>{
      this.setState({
        list: store.getState().list
      })
    })
  }
  componentWillUnmount () {
    // 组件将要被卸载的时候 取消监听
    this.unSubscribe()
  }
  handleKeyDown = (event)=>{
    if (event.keyCode === 13 && event.target.value.length>0) {
      store.dispatch({
        type: ADD_TODO,
        text: event.target.value
      })
      event.target.value = ''
      /*let list = this.state.list
      list.push(event.target.value)
      this.setState({list})

      event.target.value = ''*/
    }

  }
  deleteTodo = (index) =>{
    console.log('index---', index)
    // 删除todo
    store.dispatch({
      type: DELETE_TODO,
      index
    })
  }
  render () {
    return (
       <div>
         <input type="text" onKeyDown={this.handleKeyDown}/>
         <ul>
           {
             this.state.list.map((v, i) => (
               <li key={i}>{v}  <button onClick={() =>this.deleteTodo(i)}>删除</button></li>
             ))
           }
         </ul>
       </div>
    )
  }
}
