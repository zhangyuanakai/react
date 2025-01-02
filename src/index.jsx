import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// REDUX
import { Provider } from 'react-redux'
import store from './store'
// antd-mobile
import { ConfigProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'
//REM改变rem换算比例
import 'lib-flexible'

// 处理宽度
(function () {
  const handleMax = function handleMax() {
    let html = document.documentElement,
      root = document.getElementById('root'),
      size = parseFloat(html.style.fontSize)
    root.style.maxWidth = '750px'
    if (size >= 750) {
      html.style.fontSize = '75px'
    }
  }
  handleMax()
})()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider locale={ zhCN }>
    <Provider store={ store }>
      <App />
    </Provider>

  </ConfigProvider>
)