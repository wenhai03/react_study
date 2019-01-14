import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value)=>({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = ()=>({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index)=>({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data)=>({
  type: INIT_LIST_ACTION,
  data
})
// 使用redux-thunk中间键 action就可以返回一个函数
// 如何调用这个函数？在组件componentWillMount调用 const action = getTodoList()
export const getTodoList =()=>{
  return (dispatch)=> {
    // mock上模拟数据接口
    axios.get('https://www.easy-mock.com/mock/5c2f2e637106f779e7eacbd6/mockapi/list').then((res) => {
      const data = res.data.result
      // 因为要改变store里面的数据，所以又要走创建action
      const action = initListAction(data)
      // 当action是函数，可以接受到store中的dispatch参数，我们创建的action无非就是要提交到store中
      dispatch(action)
    }).catch((err) => console.log('err---', err))
  }
}
