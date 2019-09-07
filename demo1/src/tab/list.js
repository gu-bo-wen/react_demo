import React,{Component,Fragment} from 'react'
import './list.css'

class List extends Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    initDate(singer){
        setTimeout(()=>{
            let obj={
                "周杰伦":['稻香','听妈妈的话','青花瓷'],
                "刘德华":['笨小孩','忘情水','冰雨'],
                "邓紫棋":['你好笨小孩','听妈妈的话','你好青花瓷'],
            }
            let list =obj[singer]
            this.setState({list})
        },100)
    }
    shouldComponentUpdate(props,state){
        if(this.props.singer===props.singer){
            return false
        }else{
            return true
        }
    }
    componentDidUpdate(){
        this.initDate(this.props.singer)
    }
    componentDidMount(){
        let singer=this.props.singer
        this.initDate(singer)
    }
    render(){
        return(
            <div className="list">
                 <ul>
                {this.state.list.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
            </div>
        )
    }
}

export default List