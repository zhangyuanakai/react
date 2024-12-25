import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../ThemeContext'

const Child1 = () => {

  const { store } = useContext(ThemeContext)
  let { supNum, oppNum } = store.getState()


  useEffect(() => {
    // 订阅 store
    const unsubscribe = store.subscribe(() => {
      // 触发重新渲染，通过 state 来更新组件
      forceRerender();
    });

    // 清理函数，组件卸载时取消订阅
    return () => unsubscribe();
  }, [store]); // 依赖于 store

  const [, setRerender] = React.useState(false);

  const forceRerender = () => setRerender((prev) => !prev);

  return <div>

    <div>支持：{ supNum }人</div>
    <div>反对：{ oppNum }人</div>

  </div>

}

// const Child1 = () => {
//
//   let { oppNum, supNum } = useContext(ThemeContext)
//
//   return <div>
//     <div>支持：{ supNum }人</div>
//     <div>反对：{ oppNum }人</div>
//     <div>反对占比：{ (oppNum / (supNum + oppNum)*100).toFixed(2) }%</div>
//   </div>
//
// }
export default Child1