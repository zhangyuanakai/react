//createElement： 创建虚拟dom
export function createElement(ele, props, ...children) {
  let virturalDom = {
    $$typeof: Symbol('react.element'),
    key: null,
    ref: null,
    type: null,
    props: {}
  }
  let len = children.length
  virturalDom.type = ele
  if (props !== null) {
    virturalDom.props = { ...props }
  }
  if (len === 1) {
    virturalDom.props.children = children[0]
  }
  if (len > 1) {
    virturalDom.props.children = children
  }
  return virturalDom
}

const each = function (obj, callback) {
  if (obj === null || typeof obj !== 'object')
    throw new TypeError('obj is not a object')
  if (typeof callback !== 'function')
    throw new TypeError('callback is not a function')
  let keys = Reflect.ownKeys(obj)
  keys.forEach(key => {
    let value = obj[key]
    // 每一次迭代，都会把回调函数执行
    callback(value, key)
  })
}

//render：把虚拟DOM变为DOM
export function render(virtualDOM, container) {
  let { type, props } = virtualDOM
  if (typeof type === 'string') {
    // 存储的标签名：动态创建这样的一个标签
    let ele = document.createElement(type)
    // 为标签设置相关的属性 & 子节点
    each(props, (value, key) => {
      // className的处理：value存储的是样式类名
      if (key === 'className') {
        ele.className = value
        return
      }
      //   style的处理：value存储的是样式对象
      if (key === 'style') {
        each(value, (val, attr) => {
          ele.style[attr] = val
        })
        return
      }
      //   子节点的处理：value存储的children属性值
      if (key === 'children') {
        let children = value
        if (!Array.isArray(children)) children = [children]
        children.forEach(child => {
        //   子节点是文本节点：直接插入即可
          if ( /^(string|number)$/.test(typeof child) ){
            ele.appendChild(document.createTextNode(child))
            return
          }
        //  子节点又是一个virtualDOM：递归处理
          render(child, ele)
        })
        return
      }
      ele.setAttribute(key, value)
    })
    // 把新增的标签，增加到指定容器中
    container.appendChild(ele)
  }
}



// Array.prototype.BB = 200
// let arr = [10, 20]
// arr[Symbol('AA')] = 100
//
// each(arr, (value, key) => {
//   console.log(value, key, '🐸')
// })