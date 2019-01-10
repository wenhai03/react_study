import React, {Component} from 'react'
import {Prompt} from 'react-router-dom'

export default class UserAdd extends Component{
  constructor (props) {
    super (props)
    // 初始化状态
    this.state = {blocking: false} // 默认不阻止
  }

  handleSubmit = ()=>{
    let name=this.name.value
    // 从缓存中读取用户列表字符串
    let userStr = localStorage.getItem('users')
    // 转成对象数组
    let users = userStr?JSON.parse(userStr):[]
    // 向此数组中加入新的对象
    users.push({id: Date.now(), name})
    // 再把新数组保存到缓存中
    localStorage.setItem('users', JSON.stringify(users))

    this.setState({
      blocking: false
    }, () => {
      /// 再通过history对象的push方法跳转到用户列表页面
      this.props.history.push('/user/list')
    })
  }
  handleChange = (event)=>{
    this.setState({
      blocking: event.target.value && event.target.value.length>0
    }, () => {
      console.log(this.state.blocking)
    })
  }
  render () {
    return (
       <div>
         <Prompt
            when={this.state.blocking}
            message={location => `你确定要跳转到${location.pathname}吗？`}
         />
         <form onSubmit={this.handleSubmit}>
           <div className="form-group">
             <label htmlFor="name" className="control-label">用户名</label>
             <input onChange={this.handleChange} ref={ref=> this.name=ref} required id="name" type="text" className="form-control"/>
           </div>
           {/*<div className="form-group">
             <label htmlFor="email" className="control-label">邮箱</label>
             <input ref={ref=> this.email=ref} required id="email" type="email" className="form-control"/>
           </div>*/}
           <div className="form-group">
             <input type="submit" className="btn btn-info"/>
           </div>
         </form>
       </div>
    )
  }
}
