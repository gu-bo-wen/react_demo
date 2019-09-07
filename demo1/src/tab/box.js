import React,{Fragment,Component} from 'react'
//Fragment可以当成根元素使用，不会再页面显示
console.log(React)
class Hehe extends Component{
    constructor(){
        super()
        this.state={
            name:'韩梅梅'
        }
    }
    render(){
        console.log('render',this)
        return(
           
            <p>
                box组件
            </p>
        )
    }
}
export default Hehe;