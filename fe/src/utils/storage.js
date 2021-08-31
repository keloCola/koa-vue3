/**
 * Storage二次封装
 * @author JackBean
 */
//从config 中取命名空间
import config from './../config'
export default {
    //获取
    getStroage(){
        return JSON.parse(window.localStorage.getItem(config.namespace) || "{}");
    },
    setItem(key,val){
        let storage = this.getStroage();
        storage[key] = val;
        window.localStorage.setItem(config.namespace,JSON.stringify(storage));
    },
    getItem(key){
        return this.getStroage()[key]
    },

    clearItem(key){
        let storage = this.getStroage()
        //清空其中一项
        delete storage[key]
        //删除完还得再设置一下
        window.localStorage.setItem(config.namespace,JSON.stringify(storage));
    },
    clearAll(){
        window.localStorage.clear()
    }
}