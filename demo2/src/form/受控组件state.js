import React,{Fragment,Component} from 'react'
//Fragment可以当成根元素使用，不会再页面显示

class Hehe extends Component{
    constructor(){
        super()
        this.state={
            name:'韩梅梅',
            age:16
        }
    }
    submit=()=>{
        console.log(this.state)
    }
    render(){
       
        return(
           
            <p>
                {/* input中value值受state绑定 。修改值通过onChange(e.target.valu取值)*/}
              <input type="text" value={this.state.name} onChange={(e)=>{
                  console.log(e.target.value)
                  this.setState({name:e.target.value})
              }}/>
              <br/>
                <input type="text" value={this.state.age} onChange={(e)=>{
                  console.log(e.target.value)
                  this.setState({age:e.target.value})
              }}/>
                <button onClick={this.submit}>提交</button>
            </p>
        )
    }
}
export default Hehe;