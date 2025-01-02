import React, { useState } from 'react'
import { Button } from 'antd-mobile'

const ButtonAgain = (props) => {
  //props包含了调用《button》组件时候的属性

  let options = { ...props }
  let { children, onClick: handle } = options
  delete options.children


  // 状态
  let [loading, setLoading] = useState(false)
  const clickHandle = async () => {
    setLoading(true)
    try {
      await handle()
    } catch (e) {}
    setLoading(false)
  }

  if (handle) {
    options.onClick = clickHandle
  }

  return <Button { ...options } loading={ loading }>
    { children }
  </Button>
}
export default ButtonAgain