import React, {Component} from 'react'
import { createStore } from './redux'
const INCREASE = 'INCREASE'
const DECREASE = 'DECREASE'

let reducer = (state = {number:0}, action) =>{
  if (action === undefined) return state
  switch (action.type){
    case INCREASE:
      return {number: state.number + action.amount}
    case DECREASE:
      return {number: state.number - action.amount}

    default:
      return state
  }
}

let store = createStore(reducer)
let increase = (amount)=>(
  {type: INCREASE, amount}
)
let decrease = (amount)=>(
  {type: DECREASE, amount}
)

export default class Counter extends Component{
  constructor (props) {
    super (props)
    // 初始化状态
    this.state = {number: store.getState().number}
  }
  componentWillMount () {
    this.unsubscribe = store.subscribe(() =>{
      console.log('store.getState().number---', store.getState().number)
      this.setState({
        number: store.getState().number
      })
    })
  }
  componentWillUnMount () {
    // 组件离开取消事件监听
    this.unsubscribe()
  }
  render(){
    return (
    <div>
      <p>{this.state.number}</p>
      <button onClick={()=>store.dispatch(increase(20))}>+</button>
      <button onClick={()=>store.dispatch(decrease(10))}>-</button>
    </div>
    )
  }
}
