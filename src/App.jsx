import React from 'react'
import styled from 'styled-components'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import { RouterView } from './router'
// 导入组件
// import A from './views/A'
// import B from './views/B'
// import C from './views/C'
// import A1 from './views/a/a'
// import A2 from './views/a/b'
// import A3 from './views/a/c'

const NavBox = styled.nav`
  a {
    margin-right: 10px;
    color: black;
  }
`
// const App = () => {
//   // 基于<HashRouter>把所有要渲染的内容包起来，开启Hash路由
//   //   +后期用到<route>，<link>等，都需要再HashRouter中使用
//   //   +开启后，整个页面地址，默认会设置一个 #/哈希值
//
//   // Link实现路由切换、跳转的组件
//   //  +最渲染完毕的结果依然是A标签
//   //  +他可以根据路由模式，自动设定点击A切换的方式
//
//   return <HashRouter>
//     {/* 导航部分*/ }
//     <NavBox>
//       {/*<a href="#/">A</a>*/ }
//       {/*<a href="#/b">B</a>*/ }
//       {/*<a href="#/c">C</a>*/ }
//       <Link to="/">A</Link>
//       <Link to="/b">B</Link>
//       <Link to="/c">C</Link>
//     </NavBox>
//
//     {/*  路由容器 每一次页面加载或者路由切换完毕，都会根据当前的哈希值，到这里和每一个Route进行匹配，把匹配*/ }
//     <div className="content">
//
//       {/*Switch 确保路由中，只要有一项匹配，则不再继续向下匹配*/}
//       {/*exact  设置匹配模式为精准匹配*/}
//       {/*to  重定向的地址*/}
//
//         <Routes>
//           <Route exact path="/" element={ <A /> } />
//           <Route path="/b" element={ <B /> } />
//           <Route path="/c" element={ <C /> }  render={()=>{
//             //当路由地址匹配后，先把reder函数执行。
//           }}/>
//
//           {/* 默认重定向到首页 */ }
//           <Route path="/" element={<Navigate to="/" replace />} />
//
//         </Routes>
//
//     </div>
//   </HashRouter>
// }

const App = () => {
  return <HashRouter>
    <div className="content">
      {/*<Routes>*/}
      {/*  <Route path="/" element={ <Navigate to={ '/a' } /> } />*/}
      {/*  <Route path="/a" element={ <A /> }>*/}
      {/*    <Route path="/a" element={ <Navigate to="/a/a1" /> }></Route>*/}
      {/*    <Route path="/a/a1" element={ <A1 /> }></Route>*/}
      {/*    <Route path="/a/a2" element={ <A2 /> }></Route>*/}
      {/*    <Route path="/a/a3" element={ <A3 /> }></Route>*/}
      {/*  </Route>*/}
      {/*  <Route path="/b" element={ <B /> } />*/}
      {/*  <Route path="/c" element={ <C /> } />*/}
      {/*  <Route path="/*"*/}
      {/*         element={ <Navigate to={ { pathname: '/a', search: '?lx=404' } } /> }>*/}

      {/*  </Route>*/}
      {/*</Routes>*/}
      {/*<RouterView></RouterView>*/}


    </div>
  </HashRouter>
}
export default App

//路径地址匹配原则
//   路由地址：Route中path字段指定的地址
//   页面地址：浏览器URL后面的哈希值
//   页面地址   路由地址   非精准匹配   精准匹配
//    /          /         true       true
//    /          /login    false      false
//    /login     /         true      false
//     /a/b       /a       true      false
//