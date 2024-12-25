import React from 'react'
import { Outlet } from 'react-router-dom'

const A = () => {
  return <div className="box">
    A组件的内容
    {/*路由容器，用来渲染耳机*/}
    <Outlet></Outlet>
  </div>
}
export default A