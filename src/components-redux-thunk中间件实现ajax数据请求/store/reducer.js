import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'

// reducer返回一个函数
const defaultState = {
  inputValue: '默认显示',
  list: [1,2]
}

// reucer 可以接受state，但是绝不能修改state
export default (state = defaultState, action) => {
  console.log('state---', state)
  console.log('action---', action)
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === INIT_LIST_ACTION) {
    console.log('actions---', action)
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data.list
    return newState
  }
  return state
}
