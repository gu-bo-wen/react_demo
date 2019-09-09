import React ,{Component}from 'react';
import Store from './store'
class Shownum extends Component{
    componentDidMount(){
        Store.subscribe(()=>{
          console.log('全局状态值触发了事件监听')
          this.setState({})
        })
      }
  render(){
  let {num,name}=Store.getState()
    
    return(
      <div>
      <h6>shownum</h6>
       {num}
       <br/>
       {name}
      </div>
    )
  }
}

export default Shownum;