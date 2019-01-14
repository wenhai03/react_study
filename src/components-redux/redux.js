//创建仓库
const createStore = (reducer)=>{
  // 状态
  let state
  // 监听函数数组
  let listeners = []
  // 用来获取最新的状态
  let getState = () => state
  // 向仓库发送action
  let dispatch = (action) => {
    // 传入老状态和本次的action，返回新状态
    state = reducer(state, action)
    // 让所有的监听函数依次执行
    listeners.forEach(l => l())
  }
  // 订阅仓库内的状态变化事件，当状态发送变化之后会调用对应的监听函数
  //订阅方法执行后会返回一个取消订阅的函数，调用它可以取消订阅
  let subscribe = (listener) => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l=> listener !== l)
    }
  }
  dispatch()
  return {
    getState, // 获取最新的状态对象
    dispatch, // 原来订阅状态变化事件
    subscribe // 发射action
  }
}

export {createStore}
