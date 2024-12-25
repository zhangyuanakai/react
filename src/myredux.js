// 实现redux的部分源码

export const createStore = (reducer) => {
  let state,//存放公共状态
    listeners = []//事件池

  //   获取公共状态
  const getState = state => {
    return state
  }

  //   向事件池中加入组件更新的方法
  const subscribe = (listener) => {
    // 规则校验
    if (typeof listener !== 'function') {
      throw new TypeError('listeners must be a function')
    }
    //   把传入的方法（让组件更新办法）加入到时间池中【需要去重处理】
    if (!listeners.includes(listener)) {
      listeners.push(listener)
    }
    //   返回一个cong事件池中，移除方法的函数
    return function unsubscribe() {
      let index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  //   派发任务通知REDUCER执行
  const dispatch = (action) => {
    // 规则校验(一个方法)
    if (!_.isPlainObject(action)) throw new TypeError('action must be a object')
    if (typeof action.type === 'undefined') {
      throw new TypeError('Action may not have an undefined ’type‘ property')
    }

    //   把reducer执行，传递，公共状态、行为对象；接受执行的返回值，替换公共状态
    state = reducer(state, action)

    //   当状态更改，我们还需要把事件池中的方法执行
    listeners.forEach(listener => {
      listener()
    })

    return action
  }
  // redux内部会默认进行一次dispatch派发 ，目的：给公共容器中的状态赋值初始值
  dispatch({
    type: Symbol()
  })
  //   返回创建的STORE对象
  return {
    getState,
    subscribe,
    dispatch
  }

}