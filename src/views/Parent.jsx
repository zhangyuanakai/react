import Child1 from './Child1'
import Child2 from './Child2'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../ThemeContext'

const Parent = () => {
  const { store } = useContext(ThemeContext)
  // 获取容器中的公共状态
  let { supNum, oppNum } = store.getState()

  // 组件第一次渲染完毕后，把让组件更新的方法，放在STORE的事件池中
  let [num, setNum] = useState(0)
  const update = () => {
    setNum(num + 1)
  }
  useEffect(() => {
    // let unsubscribe=store.subscribe(让组件更新的方法)
    //  +把组件更新的方法放在STORE的事件池中
    //  +返回的unsubscribe方法执行，可以把刚才放入事件池中的方法移除掉

    let unsubscribe = store.subscribe(update)
    return () => unsubscribe()
  }, [num])

  return <div className="parent">
    <div className="header">
      <h2>这是个标题</h2>
      <span>{ supNum + oppNum }</span>
    </div>
    <Child1 />
    <Child2 />
  </div>
}
// const Parent = () => {
//   const context = useContext(ThemeContext)
//   console.log(context, 'contexteee')
//
//
//   let [supNum, setSupNum] = useState(10),
//     [oppNum, setOppNum] = useState(0)
//
//   const change = (type) => {
//     console.log('Button clicked:', type);
//     if (type === 'sup') {
//       setSupNum((prev) => prev + 1)
//     } else {
//       setOppNum((prev) => prev + 1)
//     }
//   }
//
//   return <ThemeContext.Provider value={{ supNum, oppNum, change }}>
//     <div>
//       {/*<h2>投票{ supNum + oppNum }</h2>*/ }
//       {/*<Child1 supNum={ supNum } oppNum={ oppNum }></Child1>*/ }
//       {/*<Child2 change={ change }></Child2>    */ }
//       <h2>投票{ supNum + oppNum }</h2>
//       <Child1 />
//       <Child2 />
//     </div>
//   </ThemeContext.Provider>
//
// }
export default Parent