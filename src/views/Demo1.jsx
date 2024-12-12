import { useState } from 'react'

const Demo1 = () => {
  console.log('render')
  let [x, setX] = useState(10)
  const handle = () => {
    for (let i = 0; i < 10; i++) {
      setX(x + 1)
      console.log(x,'kkkk')
    }

  }
  return <div>
    <span>{ x }</span>
    <button onClick={ handle }>x</button>
  </div>
}
export default Demo1