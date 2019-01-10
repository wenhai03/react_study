import React, {Component} from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
// 当通过函数来定义组件的时候参数是属性对象
//当一个组件不需要状态的时候可以用函数来声明
//当一个组件必须需要状态的时候必须用类来声明

/*
* props = {path: '/profile',  component: Profile}
* rest = {path: '/profile'}
*
* <Route path: '/profile' />
* */
export default function ({component: Component, ...rest}) {
  console.log('---', )
  return (
   <Route {...rest}
      render={(props)=> localStorage.getItem('login')?<Component/>:<Redirect
        to={{pathname: '/login', state: {from: props.location.pathname}}}
      /> }
   />
  )
}
