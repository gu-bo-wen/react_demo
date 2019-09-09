import Store from './store'//引用store,他有dispatch方法

export default {//抛出一个对象，其中是一些方法
    //修改名字的方法，接收一个参数params
    changeName(params){
    //每一个actionCreator都有两个功能：
    //1.创建action 对象，其中type类型必修要有
    let action={
        type:'CHANGE_NAME',
        params:params//修改的参数就是接收过来的
    }
    //2.通过dispath 将action 提交到reducer修改数据
    console.log('action创建者',action)
    Store.dispatch(action)

    },
    changeAge(params){
        let action={
            type:'CHANGE_AGE',
            params:params
        }
        Store.dispatch(action)
    }
}