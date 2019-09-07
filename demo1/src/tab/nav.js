import React,{Component,Fragment} from 'react'
import './nav.css'
class NavComponent extends Component{
    constructor(){
        super()
        this.state={
            navs:['周杰伦','邓紫棋','刘德华'],
            defaultSel:'周杰伦'
        }
    }
    renderNav(data){
        let {sel}=this.props
        if(!data.length) return '暂无数据'
        return(
            <ul className='nav-list'>
                {data.map((item,index)=>{
                    return <li className={sel===item?'nav-list-li primary':'nav-list-li'}
                     key={index}
                     onClick={this.props.fun.bind(this,item)}
                     >{item}</li>
                })}
            </ul>
        )
    }
    render(){
        let {navs,defaultSel}=this.state
        return(
            <Fragment>
            {this.renderNav(navs)}
            </Fragment>
        )
    }
}
export default NavComponent