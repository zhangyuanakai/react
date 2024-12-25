import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.less'

// 引入REDUX
import store from './store'
import { ThemeContext } from './ThemeContext'

import Vote1 from './views/Vote1'
import Demo1 from './views/Demo1'
import Demo2 from './views/Demo2'
import Demo3 from './views/Demo3'
import Parent from './views/Parent'
import App from './App'
// import Nav from './views/Nav'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <ThemeContext.Provider value={ { store } }>

      {/*<Vote1 title="我是title"></Vote1>*/ }
      <App/>
    </ThemeContext.Provider>

  </>
)


