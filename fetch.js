import axios from 'axios'// 引入axios
export default function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({ // 具体配置参数参考aixos api
      baseURL: 'http://localhost:9999', // url不是绝对地址 如http://www.baidu.coom。会在
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      timeout: 30 * 1000 // 30秒超时
    })
    // 添加拦截器
    instance.interceptors.request.use(function (config) { // 在请求发送到服务器之前 可以对请求的信息做相关处理 入数据格式 权限等等
      return config
    }, function (err) {
      return Promise.reject(err)
    })
    instance.interceptors.response.use(function (res) {
      return res
    }, function (err) {
      return Promise.reject(err)
    })
    // 请求
    instance(options)
      .then(response => { // then 请求成功之后
        resolve(response)
      })
      .catch(error => {
        console.log('请求异常信息：' + error)
        reject(error)
      })
  })
}
