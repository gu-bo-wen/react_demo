import React,{Component,Fragment} from 'react'
import NavComponent from './nav.js'

import List from './list.js'
class Box extends Component{
    constructor(){
        super()
        this.state={
            defaultSel:'周杰伦'
        }
    }
    shouldComponentUpdate(props,state){
        if(this.state.defaultSel===state.defaultSel){
            return false
        }else{
            return true
        }
    }
    changeNav=(item)=>{
        this.setState({defaultSel:item})
    }
    render(){
        let {defaultSel}=this.state
        return(
            <Fragment>
                <NavComponent sel={defaultSel} fun={this.changeNav}></NavComponent>
                <List singer={defaultSel}></List>
            </Fragment>
        )
    }
}
export default Box;