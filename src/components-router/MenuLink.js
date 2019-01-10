/*
* 有些时候一个组件不管是否匹配都 显示一些东西
*
* component 对应一个组件 当URL路径跟当前Route path匹配时渲染
* render 对应一个匿名组件函数  当前Route path匹配时渲染
*
* children不管URL里的路径跟path是否匹配，都能渲染出来
* */
import React from 'react'
import {Route, Link} from 'react-router-dom'
export default function({to, label}) {
  return <Route path={to} children={({match})=> (
    <li className={match?'active': ''}><Link to={to}>{label}</Link></li>
  )}/>
}
