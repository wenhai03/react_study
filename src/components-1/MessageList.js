import React, {Component} from 'react'
import Message from './Message'

export default class MessageList extends Component{
  constructor (props) {
    super (props)
    // 初始化状态
    this.state = {
    }
  }

  render () {
    return (
    <ul className='list-group'>
      {
        this.props.messages.map((v, i) => (
          <Message message={v} index={i} removeMessage={this.props.removeMessage}/>
        ))
      }
    </ul>
    )
  }
}
