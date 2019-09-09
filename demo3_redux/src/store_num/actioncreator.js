import Store from './store'

export default{
    changeNum(){
        let action={
            type:'hehe'
        }
        Store.dispatch(action)
    },
    nm(params){
        let action={
            type:'xixi',
            params:params
        }
        Store.dispatch(action)
    }
}