import React, {Component} from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import Message from './Message.css'

export default class MessageBox extends Component{
  constructor (props) {
    super (props)
    // 初始化状态
    this.state = {
      messages: [
        // {username: '张三', content: '今天天气很好', createAt: new Date()}
      ]
    }
  }
  addMessage = (message) => {
    // 状态对象每次都要生成一个新对象
    let messages = [...this.state.messages, message]
    this.setState({messages})
  }
  removeMessage = (index) => {
    // 先从数组中删除指定的元素
    this.state.messages.splice(index, 1)
    this.setState({messages: [...this.state.messages]})
  }
  render () {
    return (
       <div className='container'>
         <div className="row">
           <div className="col-sm-8 col-sm-offset-2">
             <div className="panel panel-default">
               <div className="panel-heading">
                 <h2 className='text-center'>欢迎来到留言板</h2>
               </div>
               <div className="panel-body">
                 <div>
                   <MessageList messages={this.state.messages} removeMessage={this.removeMessage}/>
                 </div>
                 <div>
                   <MessageForm addMessage={this.addMessage}/>
                 </div>
               </div>
               <div className="panel-footer">
               </div>
             </div>
           </div>
         </div>
       </div>
    )
  }
}
