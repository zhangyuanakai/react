import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.less'
// import { createElement, render } from './jsxHandle'
import DemoOne from './views/DemoOne'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <DemoOne title="我是标题" x={30}>
      <span slot="footer">我是页脚</span>
      <span slot="header">我是页眉</span>
    </DemoOne>
    {/*<DemoOne title='我是标题2'>*/}
    {/*  <span>我是children2-1</span>*/}
    {/*</DemoOne>*/}
    {/*<DemoOne title='我是标题3'/>*/}
  </>
)

