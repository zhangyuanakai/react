import React,{ useState } from 'react'

const Vote1 = (props) => {
  let { title } = props
  let [subNumber, setSubNumber] = useState(20)
  let [oppNumber, setOppNumber] = useState(10)

  const handle = (type) => {
    if (type === 'sub') {
      setSubNumber(subNumber + 1)
    }else {
      setOppNumber(oppNumber +1)
    }
  }

  return <div className="vote">
    <div className="header">
      <h2>{ title }</h2>
    </div>
    <h2>反对人数：{oppNumber }</h2>
    <h2> 支持人数：{subNumber }</h2>
    <h2> 总人数：{oppNumber+subNumber }</h2>
    <div>
      <button onClick={()=> handle('sub') }>支持</button>
      <button onClick={ ()=>handle('opp') }>反对</button>
    </div>

  </div>
}
export default Vote1