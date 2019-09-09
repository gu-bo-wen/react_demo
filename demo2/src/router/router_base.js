import React,{Fragment,Component} from 'react'
import {HashRouter,Link,Route,NavLink} from 'react-router-dom'
import './index.css'


function Home(){
    return(
        <div>
            首页
        </div>
    )
}

class Box extends Component{
   
    render(){
       
        return(
           
           <HashRouter>
           {/* 所有和路由相关的都放在HashRouter中 ，导航Navlink实现*/}
            <NavLink to='/home' activeClassName='red'>首页</NavLink>
            <NavLink to='/singer' activeClassName='blue'>歌手</NavLink>
            <NavLink to='/tuijian'activeClassName='yellow'>推荐</NavLink>
            <React path='/home' component={Home}></React>
           </HashRouter>
        )
    }
}
export default Box