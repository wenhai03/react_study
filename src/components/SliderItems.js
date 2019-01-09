import React, {Component} from 'react'

export default class SliderItems extends Component{
  render () {
    let style = {
      left: this.props.index * -300,
      width: this.props.images.length * 300,
      transitionDuration:this.props.speed+'s'//转换的时间
    }
    return (
    <ul className='sliders' style={style}>
      {
        this.props.images.map((v, i) => (
        <li className="slider" key={i}><img src={v.src} /></li>
        ))
      }
    </ul>
    )
  }
}
