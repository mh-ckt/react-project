import axios from 'axios'

// 1. 创建一个 axios 实例（而不是直接使用全局 axios）
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 2. 请求拦截器（可选，比如加 token、loading 等）
api.interceptors.request.use(
  (config) => {
    // 请求发送之前做些什么
    // 例如：如果有 token，可以在这里统一加到 header
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  (error) => {
    // 请求错误时做些什么
    console.error('🔥 请求拦截器出错：', error)
    return Promise.reject(error)
  }
)

// 3. 响应拦截器（可选，统一处理返回数据、错误提示等）
api.interceptors.response.use(
  (response) => {
    // 服务器返回状态码 2xx 的情况
    // 你可以在这里对返回的数据格式做统一处理
    // 假设后端返回格式是 { success: true, data: ..., message: '' }
    return response.data // 直接返回 data，方便组件使用
  },
  (error) => {
    // 服务器返回状态码非 2xx，或者网络错误
    console.error('🔥 响应拦截器出错：', error)
    if (error.response) {
      // 服务器有响应，但状态码不是 2xx
      const { status, data } = error.response
      console.error(`请求失败，状态码：${status}, 错误信息：`, data)
      alert(`请求失败：${data?.message || '未知错误'}`) // 可选：弹窗提示用户
    } else if (error.request) {
      // 请求发出去了，但没有收到响应
      console.error('⚠️ 无响应：', error.request)
      alert('网络错误，请检查您的网络连接')
    } else {
      // 其它错误
      console.error('⚠️ 请求配置错误：', error.message)
      alert('请求配置出错')
    }
    return Promise.reject(error) // 继续抛出错误，供组件捕获
  }
)

// 4. 导出这个封装好的 axios 实例
export default api