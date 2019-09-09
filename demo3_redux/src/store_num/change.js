import React ,{Component}from 'react';
import ActionCreator from './actioncreator'
class ChangeNum extends Component{
  change(){
    ActionCreator.changeNum()
  }
  nm(){
    ActionCreator.nm('喵喵喵')
  }
  render(){
  
    
    return(
      <div>
      <h3>changenum</h3>
      <button onClick={this.change}>添加</button> 
      <button onClick={this.nm}>修改</button>
      </div>
    )
  }
}

export default ChangeNum;