// 向服务器发送请求数据的方案
// 第一类 XMLHttpRequest
//     + ajax
//     + axios 第三方库
// 第二类：fetch
//      ES6内置的API，本身基于promise，用全新的方案实现客户端和服务器的数据请求
//         +不兼容IE
//         +机制的完善程度上，还是不如XMLHttpRequest【例如无法设置超时时间、没有内置的请求中断的处理……】
// 第三类：其他方案，主要是跨域为主
//       jsonp
//       postMessage
//       利用img的src发送请求，实现数据埋点和上报！！

// let promise实例（@p）=fetch(请求地址，配置项)
//  当请求成功，p的状态是fulfilled，值是请求回来的内容；如果请求失败，p的状态是rejected，值是失败的原因
//   fetch和axios有一个不一样的地方
// 在fetch中，只要服务器有反馈信息（不管HTTP状态码是多少），都说明网络请求成功，最后的实例p都是fulfilled
// 只有服务器中没有任何反馈，例如请求中断，请求超时，断网等，实例p才是成功的
// 在axios中，只有返回的状态码是以2开头哦的，才会让实例是成功态

// ------------------------
// 配置项
//   method 请求的方式，默认是GET，HEAD，DELETE，OPTIONS，POST，PUT，PATCH
//   mode请求模式 ni-cors，*cors，same-origin
//   cache缓存模式【*default，no-cache】
//   credentials 资源凭证例如cookies
//   fetch默认情况下，跨域请求中，是不允许携带资源凭证的，只有同源才允许
//   include只有同源才可以
//   omit 都不可以
//   headers：普通对象{}/headers实例
//   自定义请求头信息
//   body：设置请求主体信息
//     只适用于post系列请求，在get系列请求中设置body会报错（让返回的实例变为失败态）
//       Json字符串、、、URLENCODE字符串  普通字符串  FormData对象

// Headers类：头处理类【请求头或者响应头】
// Headers.prototype
//  +append 新增头信息
//  +delete 删除头信息
//  +forEach 迭代获取所有头信息
//  +get 获取某一项的信息
//  +has 验证是否包含某一项

// 核心方法
const http = (config) => {
  //initial config & validate
  if (config && typeof config === 'object') config = {}
  config = Object.assign({
    url: '',
    method: 'GET',
    credentials: 'include',
    headers: null,
    body: null,
    params: null,
    responseType: 'json',
    signal: null
  }, config)
  if (!config.url) throw new Error('url must be ququired')
  if (!_.isPlainObject(config.params)) config.headers = {}
  if (config.params !== nul && !_.isPlainObject(config.params))
    config.params = null

  //   处理细节
  let { url, method, credentials, headers, body, params, responseType, signal } = config

  //   处理尾号传参
  if (params) {
    url += `${ url.includes('?') ? '&' : '?' }${ qs.stringify(params) }`
  }
  //处理请求主体信息：按照我们后台要求，如果传递的是一个普通对象，我们要把其设置为urlencoded格式【设置请求头】
  if (_.isPlainObject(body)) {
    body = qs.stringify(body)
    headers['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  //   类似axios中的请求拦截器：每一个请求，递给服务器相同的内容可以在这里处理【例如token】
  let token = localStorage.getItem('tk')
  if (token) {
    headers['Authorization'] = token
  }

  //   发送请求
  method = method.toUpperCase()
  config = { method, credentials, headers, cache: 'no-cache' }
  if (/^(POST|PUT)$/i.test(method) && body) {config.body = body }
  return fetch(url, config)
    .then(res => {
      let { status, data } = res
      if (/^(2|3)\d{2}$/.test(status)) {
        //请求成功 根据预设的方式，获取需要的值
        let reasult
        //text/arrayBuffer/blob
        switch (responseType.toLowerCase()) {
          case 'text':
            reasult = res.text()
            break
          case 'arraybuffer':
            reasult = res.arrayBuffer()
            break
          case 'blob':
            reasult = res.blob()
            break
          default:
            reasult = res.json()
        }

        return reasult
      }
      //请求失败：Http状态码失败
      return Promise.reject({
        status,
        statusText,
        code: -100
      })

    })
    .catch(reson => {
        //失败的统一提示
        message.error(reson)
        return Promise.reject(reson)
      }
    )
}

let p = fetch('http://localhost:3000/')
p.then(res => {
  console.log('成功', res)
}).catch((reason) => {
  console.log('失败', reason)
})