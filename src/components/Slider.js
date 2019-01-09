import React, {Component} from 'react'
import './Slider.less'
import SliderItems from "./SliderItems"
import SliderArrows from "./SliderArrow"
import SliderDots from "./SliderDots"


export default class Slider extends Component{
  constructor (props) {
    super (props)
    // 初始化状态
    // 通过修改index改变轮播的值
    this.state = {index: 0}
  }
  turn = (step) => {
    let index = this.state.index + step

    if(index >= this.props.images.length) index = 0
    else if(index<0) index = this.props.images.length-1
    this.setState({index})
  }
  componentDidMount () {
    // 如果自动轮播为true，开启自动轮播
    if (this.props.autoPlay) {
      this.go()
    }
  }
  // 启动自动轮播
  go = ()=>{
    this.$timer = setInterval(() => {
      this.turn(1)
    }, this.props.delay*1000)
  }
  render () {

    return (
       <div
         onMouseOver={() => clearInterval(this.$timer)}
         onMouseOut={() => this.go()}
         className='slider-wrapper'>
         <SliderItems images={this.props.images} index={this.state.index} speed={this.props.speed}/>
         <SliderArrows turn={this.turn}/>
         {/*<SliderDots images={this.props.images} index={this.state.index} turn={this.turn}/>*/}
       </div>
    )
  }
}
