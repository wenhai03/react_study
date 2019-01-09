import React, {Component} from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


// 复合组件
class Count extends Component{
  state = {
    num: 0
  }
  // 组件将要被挂载
  componentWillMount () {
    console.log('1.componentWillMount组件将要被挂载')
  }
  handleClick = () => {
    this.setState({num: this.state.num + 1}, () => {
      console.log('---', this.state.num)
    })
    /*// 第一次点击this.state.num为 0  因为setState是异步的,不能在赋值之后立即获取最新的state值
    console.log('---', this.state.num)*/
  }
  shouldComponentUpdate (newProps, newState) {
    console.log('4.shouldComponentUpdate组件是否要进行更新')
    if (newState.num%5===0) {
      return true
    } else {
      return false
    }
  }
  componentWillUpdate () {
    console.log('5.componentWillUpdate组件将要更新')
  }
  componentDidUpdate () {
    console.log('6.componentDidUpdate组件更新结束')
  }
  render () {
    console.log('2.render组件挂载')
    return (
    <div style={{border: '1px solid red', padding: '10px'}}>
      <p>{this.state.num}</p>
      <button onClick={this.handleClick}>点击</button>

      <SubCounter num={this.state.num}/>
    </div>
    )
  }
  componentDidMount () {
    console.log('3.componentDidMount组件挂载完成')
  }
}
// 子计数器
class SubCounter extends Component{
  // 组件将要接收到新的属性对象
  componentWillReceiveProps () {
    console.log('SubCounter componentWillReceiveProps')
  }

  shouldComponentUpdate (newProps, newState) {
    if (newProps.num%3===0) {
      return true
    } else {
      return false
    }
  }

  render () {
    return (
    <div style={{border: '1px solid #333'}}>
      <p>{this.props.num}</p>
    </div>
    )
  }
}

render(<Count />, document.getElementById('root'))
