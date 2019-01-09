import React, {Component} from 'react'

export default class MessageForm extends Component{
  constructor (props) {
    super (props)
    // 初始化状态
    this.state = {
    }
  }
  handleSubmit = (event) => {
    // 获得用户名和内容的值
    let username = this.username.value
    let content = this.content.value
    this.props.addMessage({username, content, createAt: new Date()})

    this.username.value = this.content.value = ''
    event.preventDefault()
  }
  render () {
    return (
    <form >
      <div className='form-group'>
        <label htmlFor="username" className='control-label'>
          用户名
        </label>
        <input type="text" ref={x=> this.username = x} className='form-control'/>
      </div>
      <div className="form-group">
        <label htmlFor="content" className="control-label">
          内容
        </label>
        <input ref={x=> this.content = x} type="text" className='form-control'/>
      </div>
      <div className="form-group">
        <label htmlFor="" className="control-label">
          <button onClick={this.handleSubmit} className='btn btn-primary'>发表</button>
        </label>
      </div>
    </form>
    )
  }
}
