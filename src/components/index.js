import React from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Slider from './components/Slider'

let IMG = [
  {src: require('./components/img/1.jpg')},
  {src: require('./components/img/2.jpg')},
  {src: require('./components/img/3.jpg')}
]
/**
 * speed 每次轮播的速度
 * delay 每隔多长时间轮播一次
 * autoPlay 是否启动自动轮播
 * arrows 是否显示左右导航箭头
 * dots 是否显示底部的点状导航按钮
 * images要轮播的图片
 * pause 当光标移动上去后是否自动暂停轮播
 */

render(<Slider
  speed={1.2}
  delay={1.5}
  autoPlay={true}
  arrows={true}
  dots={true}
  images={IMG}
  pause={true}
/>, document.getElementById('root'))
