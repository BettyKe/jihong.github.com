
import Vue from 'vue'
import router from '../router'
import axios from 'axios'
import store from '../store/index'
/** 请求Loading方法 */
let requestLoading
// 声明一个对象用于存储请求个数
let needLoadingRequestCount = 0
// 显示Loading
function showFullScreenLoading (params) {
  if (needLoadingRequestCount === 0) {
    if (params && params.loading) {
      if (Object.prototype.toString.call(params.loading) === '[object Object]') {
        requestLoading = Vue.prototype.$toast({type:'loading',overlay:true,duration:0,message:'加载中..'})
      } else {
        requestLoading = Vue.prototype.$toast({type:'loading',overlay:true,duration:0,message:'加载中...'})
      }
    }
  }
  needLoadingRequestCount++
}
// 隐藏Loading
function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    requestLoading.close()
  }
}

/** 默认请求超时时间 */
axios.defaults.timeout = 120000
/** 默认基础请求地址 */
if (process.env.NODE_ENV === 'development') {
  // axios.defaults.baseURL = 'http://cnhct.iask.in/lzm' // 开发地址
  axios.defaults.baseURL = '' // 开发地址
  // axios.defaults.baseURL = 'http://localhost:8080' // 开发地址
} else if (process.env.NODE_ENV === 'production') {
  // axios.defaults.baseURL = 'http://cnhct.iask.in/lzm' // 正式库地址
  axios.defaults.baseURL = '' // 正式库地址
  // axios.defaults.baseURL = 'http://localhost:8080' // 正式库地址
}

/** 请求配置拦截 */
axios.interceptors.request.use(config => {
  // 加载弹框方法
  if (config.params && config.params.loading) {
    showFullScreenLoading(config.params)
  }
  
  // 处理请求参数
  config.data = setPostSessionKey(config.data)
  
  // 判断是否是form表单提交
  if (config.params && config.params.isForm) {
    config.data = config.data
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
  } else {
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
  }
  // 请求头添加判断是否有token
  config.headers['token'] = localStorage.getItem('token') || ''
  // config.headers['X-AUTH-TOKEN'] = store.getters.getSessionKey || ''
  // config.headers['custom-params'] = config.params
  // 清空自定义的数据
  config.params = ''
  return config
}, error => {
  return Promise.reject(error)
})

/** 请求拦截 */
axios.interceptors.response.use(response => {
  // 关闭加载弹框
  if (response && response.config && response.config.headers && response.config.headers['custom-params'] && response.config.headers['custom-params'].loading) {
    tryHideFullScreenLoading()
  }
  return response
}, error => {
  // 关闭加载弹框
  console.log('错误信息-',error)
  tryHideFullScreenLoading();
  return Promise.resolve(error.response)
})

/** 数据预处理 */
function setPostSessionKey (data) {
  // 除空
  if (typeof(data)=='undefined') {
    data = {}
  }
//   data.userId = store.getters.getUserId || ""


  // data.token = store.getters.getSessionKey || "" //被我注释的

  data.token = localStorage.getItem('token') || ''



//   let tempData = JSON.parse(data.data == null ? '{}' : data.data)
//   tempData.timeStamp = store.getters.getMPostTimeStamp || ""
//   tempData.userId = store.getters.getUserId || ""
//   tempData.supplierId = store.getters.getUserInfo.supplierId || ""
//   tempData.groupId = store.getters.getUserInfo.groupId || ""
//   //云货优选groupId(默认为集团2);
//   if (store.getters.getUserInfo && !tempData.groupId) {
//     tempData.groupId = store.getters.getUserInfo.groupId || 2;
//   }
//   if (tempData.sortField == null) {
//     tempData.sortField = 0;
//   }
//   data.data = JSON.stringify(tempData)
  return data;
}

/** 请求成功响应回调 */
function checkStatus (response) {
  // 如果http状态码正常，则直接返回数据
  Vue.prototype.$toast.clear()
  if (response && (response.status === 200 || response.status === 400)) {
    if (response.data.code == 200) {
      // 请求成功
      return response.data
    } else if (response.data.code === -4 || response.data.code === -3 || response.data.code === -10) {
      Vue.prototype.$toast({
        type: 'fail',
        duration: 1000,
        message: response.data.resultMsg,
        onClose: function (params) {
        //   store.commit('clearLoginInfo')
          router.push('/login')
        }
      })
      return
    } else if (Object.prototype.toString.call(response.data) === '[object ArrayBuffer]') {
      try {
        var enc = new TextDecoder('utf-8') 
        var res = JSON.parse(enc.decode(new Uint8Array(response.data))) //转化成json对象
        if (res && res.code) {
          Vue.prototype.$toast({
            type: 'fail',
            duration: 1000,
            message: res.message
          })
          return false
        }
      } catch (err) {
        let blob = new Blob([response.data])
        return blob
      }
    } else {
    //   store.commit('updataMPostTimeStamp')
      Vue.prototype.$toast({
        type: 'fail',
        duration: 1000,
        message: response.data.message
      })
      return response.data
    }
  }
  // 未知状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

/** 请求异常回调 */
function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)可在这做自定义操作
  return res
}

export default {
  post (url, data, loading) {
    return axios({
      method: 'post',
      url,
      data,
      params: {'loading': loading}
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, data, loading) {
    return axios({
      method: 'get',
      url,
      data,
      params: {'loading': loading}
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }, 
  form (url, data, loading) {
    return axios({
      method: 'post',
      url,
      data,
      params: {'loading': loading, 'isForm': true}
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  download (url, data, loading) {
    return axios({
      method: 'post',
      url,
      data,
      responseType: 'arraybuffer',
      params: {'loading': loading, 'isForm': true}
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  put (url, data, loading) {
    return axios({
      method: 'put',
      url,
      data,
      params: {'loading': loading}
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  delete (url, data, loading) {
    return axios({
      method: 'delete',
      url,
      data,
      params: {'loading': loading}
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
