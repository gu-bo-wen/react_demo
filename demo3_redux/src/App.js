import React ,{Component}from 'react';
import Store from './store_redux/store' //引用store,用于建立联系
import Change from './store_redux/change'
import  Shownum from './store_num/show'
import ChangeNam from './store_num/change'
class App extends Component{
  //添加事件监听，数据变页面更新。subscribe监听
  //挂载之后
  componentDidMount(){
    Store.subscribe(()=>{
      console.log('全局状态值触发了事件监听')
      this.setState({})
    })
  }
  render(){
    console.log(this,Store)//store中有getState方法
    console.log(Store.getState())//通过getState()获取全局状态值
    let {name}=Store.getState()//结构赋值,页面渲染
    return(
      <div>
        {name}
        <h3>reducer</h3>
        <hr/>
        <Change></Change>
        <hr/>
        <Shownum></Shownum>
        <hr/>
        <ChangeNam></ChangeNam>
      </div>
    )
  }
}

export default App;
