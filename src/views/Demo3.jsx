import { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'

const Demo3 = () => {

  let [num, setNum] = useState(0)

  let box = useRef(null)

  // useEffect必须在函数的最外层上下文中调用，不能把其嵌入到条件判断、循环等操作语句中
  useEffect(() => {
    console.log(box.current)
  }, [])


  const handle = () => {
    setNum(num + 1)
  }

  return <div className="demo">
    <div ref={box}>{ num }</div>
    <button onClick={ handle }>新增</button>
  </div>
}
export default Demo3