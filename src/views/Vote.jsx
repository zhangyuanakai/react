import React, { Component, useContext, useState } from 'react'

// 函数组件
const Vote = () => {
  let [num, setNum] = useState(0)
  const handleChange = (e) => {
    setNum(num + 10)
  }
  return <div>
    <span>{ num }</span>
    <button onClick={ handleChange }>新增</button>
  </div>
}
export default Vote

//类组件
// class Vote extends Component {
//   state = { num: 0 }
//   handle = () => {
//     let { num } = this.state
//     this.setState({ num: num + 10 })
//   }
//
//   render() {
//     let { num } = this.state
//     return <div className="vote">
//       <span>{ num }</span>
//       <button onClick={ this.handle }>点击事件</button>
//     </div>
//   }
// }
//
// export default Vote
