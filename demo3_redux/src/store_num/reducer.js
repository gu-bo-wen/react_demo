//reducer用于修改全局数据，本质是一个函数:有两个参数（prestate,action）
//prestate:修改之前的全局状态值
//action:接收的数据，进行修改全局状态值


import State from './state'//引用全局状态值,修改之前State作为初始值
export default (preState=State,action)=>{
    console.log('修改前的数据',preState)
    console.log('state.js',State)
let newdata=preState //声明一个newdata等于修改之前的全局状态值
//结构赋值
let {type,params}=action
switch (type) {
    case 'hehe':
        newdata.num+=1
        break;
    case 'xixi':
            newdata.name=params
        break;

    default:
        break;
}

console.log('修改后的数据',newdata)
return newdata //将全局状态值:return回去到store.js
                //全局状态值初始值在state.js中声明

}