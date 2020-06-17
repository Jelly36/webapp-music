import axios from "axios"
import {HOST} from "./config"
//创建axios实例
export function request(config){
    const instance=axios.create({
        baseURL:HOST
    })
    return instance(config)
}
export default request