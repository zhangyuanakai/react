import React from 'react'
import { HashRouter } from 'react-router-dom'
import RouterView from './routes'
import { KeepAliveProvider } from 'keepalive-react-component'

const App = () => {
  return <HashRouter>
    <KeepAliveProvider>
      <RouterView />
    </KeepAliveProvider>

  </HashRouter>
}
export default App