import React ,{Component}from 'react';
import ActionCreator from './actionCreator'

class Change extends Component{
  change(){
    ActionCreator.changeName('李雷')
  }
  render(){
    return(
      <div>
      
        <h3>修改全局状态值</h3>
        <button onClick={this.change}>改名</button>
      </div>
    )
  }
}

export default Change;