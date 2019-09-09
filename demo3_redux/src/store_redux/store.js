//创建store用于建立连接乘上启下
import {createStore} from 'redux'
import reducer from './reducer' //引用reducer.js 
//创建全局对象，并和reducer进行关联
const store = createStore(reducer) //将reducer作为参数引用
export default store //抛出