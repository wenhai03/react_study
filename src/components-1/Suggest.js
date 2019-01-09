import React, {Component} from 'react'
import jsonp from 'jsonp'
/*
* 1.给input绑定值 改变事件，当值发生改变的时候调用对应的监听函数
* 2.获取到input的值，然后调用百度的接口获取数据，并修改状态对象中你words属性
*
* */

export default class Suggest extends Component{
  constructor (props) {
    super (props)
    // 初始化状态
    this.state = {
      words: [],
      index: -1
    }
    this.wd = ''
  }
  handleChange = (event) => {
    let wd = event.target.value
    this.wd = wd
    jsonp(`https://www.baidu.com/su?wd=${wd}`, {
      param: 'cb'
    }, (err, data) => {
      this.setState({words: data.s})
    })
  }
  handleKeyDown = (event) => {
    let keyCode = event.keyCode
    if (keyCode === 38 || keyCode === 40) { //上38 下40
      let index = this.state.index
      if (keyCode === 40) {
        index++
        if (index>=this.state.words.length) index = -1
      } else if (keyCode === 38) {
        index--
        if (index === -2) index = this.state.words.length - 1
      }
      this.setState({index})
    } else if (event.keyCode === 13) {
      window.location.href = `http://www.baidu.com/su?wd=${event.target.value}`
    }
  }
  render () {
    return (
      <div className='container'>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                value={this.state.index===-1?this.wd:this.state.words[this.state.index]}
                type="text"
                className="form-control"/>
              </div>
              <div className="panel-body">
                <ul className='list-group'>
                  {
                    this.state.words.map((v, i) => (
                      <li key={i} className={"list-group-item " + (i === this.state.index ? 'active' : '')}>{v}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
