import React, {Component} from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'


// 复合组件
class Panel extends Component{
  state = {
    color: 'black'
  }
  render () {
    return (
    <div className='panel panel-default'>
      <button onClick={()=>this.setState({color: 'red'})}>红</button>
      <button onClick={()=>this.setState({color: 'green'})}>绿</button>
      <PanelHeader head1={this.props.head} color={this.state.color}/>
      <PanelBody body2={this.props.body}/>
      <PanelFooter footer3={this.props.footer}/>
    </div>
    )
  }
}
class PanelHeader extends Component{
  render () {
    return (
    <div className='panel-heading' style={{color: this.props.color}} color={this.props.color}>{this.props.head1}</div>
    )
  }
}
class PanelBody extends Component{
  render () {
    return (
    <div className='panel-body'>{this.props.body2}</div>
    )
  }
}
class PanelFooter extends Component{
  render () {
    return (
    <div className='panel-footer'>{this.props.footer3}</div>
    )
  }
}

render(<Panel head='头' body='体重' footer='尾巴'/>, document.getElementById('root'))
