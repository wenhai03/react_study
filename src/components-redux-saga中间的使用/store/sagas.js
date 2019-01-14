import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import {initListAction} from './actionCreators'
import axios from 'axios'

//除了在reducer能够接收到store传递过来，saga这个中间件也能接收到

function* getInitList() {
  // 对接口出路的异常
  try {
    const res = yield axios.get('https://www.easy-mock.com/mock/5c2f2e637106f779e7eacbd6/mockapi/list')
    const action = initListAction(res.data.result)
    console.log('action---', action)
    // saga中派发给store
    yield put(action)
  } catch (e) {
    console.log('网络请求失败---')
  }
}

// generator函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga
