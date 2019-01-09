import React, {Component} from 'react'

export default class SliderDots extends Component{
  render () {
    return (
       <div className='slider-dots'>
         {
           this.props.images.map((v, i) => (
              <span onClick={this.props.turn(i-this.props.index)} className={i===this.props.index?'active': ''} key={i}>

              </span>
           ))
         }
       </div>
    )
  }
}
