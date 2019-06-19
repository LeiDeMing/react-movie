/**
 * axios整体设置，拦截器设置
 * by Nei
 */
import axios from 'axios'
import config from './serviceConfig'
// import { utils } from '../utils/index'
// import qs from 'qs'

const service: any = axios.create(config)
const _toString=Object.prototype.toString

service.interceptors.request.use((config: any) => {
    // utils.layer.closeAll()
    return config;
}, (err: any) => {
    // utils.layer.closeAll()
    // _layer({
    //     content: JSON.stringify(err)
    // })
    return Promise.reject(err)
})

service.interceptors.response.use((res: any) => {
    let { data, data: { result }, data: { data: d } } = res
    // utils.layer.closeAll()
    if (result === 200 && (!d || ((Array.isArray(d) || _toString.call(d) === '[object String]') && d.length === 0))) {
        // _layer({
        //     content: '数据为空！'
        // })
    }
    if (result !== 200) {
        let msg=data.message || data.msg
        // _layer({
        //     content: JSON.stringify(msg)
        // })
    }
    return data
}, (err: any) => {
    const res = err.response
    // utils.layer.closeAll()
    if (res) {
        // _layer({
        //     content: `${JSON.stringify(res.data.message)}`
        // })
    } else {
        // _layer({
        //     content: '请检查网络'
        // })
    }

    return Promise.reject(err)
})

// function _layer({ content = "", btn = "我知道了" }) {
//     utils.layer.open({
//         content,
//         btn
//     })
// }
export default service