// 模拟从服务器异步获取数据
import { useEffect, useState } from 'react'

const queryData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([10, 20, 30])
    })
  })
}

const Demo2 = () => {

  let [num, setNum] = useState(0)
  // useEffect必须在函数的最外层上下文中调用，不能把其嵌入到条件判断、循环等操作语句中
  useEffect(() => {
    if (num > 5) {
      console.log('ok')
    }
  }, [num])
  const handle = () => {
    setNum(num + 1)
  }
  return <div className="demo">
    <div>{ num }</div>
    <button onClick={ handle }>新增</button>
  </div>
}
export default Demo2