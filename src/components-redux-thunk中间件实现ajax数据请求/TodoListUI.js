import React, {Component} from 'react'

import 'antd/dist/antd.css'
import {Input, Button, List } from 'antd'

// 无状态组件的写法。 优点：性能比较高，因为就是一个函数，不要执行一些生命周期函数，render
const TodoListUI =(props) =>{
  return (
  <div style={{marginTop: '10px', marginLeft: '10px'}}>
    <div>
      <Input onChange={props.handleChange} value={props.inputValue} placeholder='todo info' style={{width: '300px'}}/>
      <Button type='primary' onClick={props.handleClick}>提交</Button>
    </div>
    <List
      bordered
      dataSource={props.list}
      style={{width: '300px', marginTop: '10px'}}
      renderItem={(item, index)=> (<List.Item onClick={()=>props.handleItemDelete(index)}>{item}</List.Item>)}
    />
  </div>
  )
}


// 下面是 UI 组件写法
/*class TodoListUI extends Component{
  render () {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input onChange={this.handleChange} value={this.props.inputValue} placeholder='todo info' style={{width: '300px'}}/>
          <Button type='primary' onClick={this.props.handleClick}>提交</Button>
        </div>
        <List
        bordered
        dataSource={this.props.list}
        style={{width: '300px', marginTop: '10px'}}
        renderItem={(item, index)=> (<List.Item onClick={(index)=>this.props.handleItemDelete(index)}>{item}</List.Item>)}
        />
      </div>
    )
  }

}*/
export default TodoListUI
