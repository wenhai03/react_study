import React from 'react'

export default function (props) {
  return <button onClick={()=>{
    localStorage.setItem('login', 'true')
    props.history.push(props.location.state.from)
  }} className='btn btn-primary'>登录</button>
}
