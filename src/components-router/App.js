import React, {Component} from 'react'
import {
  BrowserRouter as Router, // 容器
  Route, // 一条路由
  Link,
  Switch
} from 'react-router-dom'

import Home from './Home'
import Profile from './Profile'
import User from './User'
import ProtectedRoute from './ProtectedRoute'
import Login from './Login'
import MenuLink from './MenuLink'

import NotFound from './NotFound'
let Hello = (props)=><div>hello {props.name}</div>

export default (
  <Router>
    <div>
      <nav className="navbar-inverse">
        <div className="row container-fluid">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">用户管理系统</a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <MenuLink to="/home" label='首页'/>
              <MenuLink to="/user" label='用户管理'/>
              <MenuLink to="/profile" label='个人设置'/>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        {/*<Route path='/' render={()=><div>首反反复复fff 付付页</div>}/>*/}
        {/*<Route path='/:name' render={props=><div>{props.match.params.name}</div>}/>*/}
        <Route path='/home' component={Home}/>
        <Route path='/user' component={User}/>
        <Route path='/login' component={Login}/>

        <ProtectedRoute path='/profile' component={Profile}/>

        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>
)
