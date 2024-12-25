import React from 'react'
import { NavLink, NavStyle } from './NavStyle'

const Nav = () => {
  return <NavStyle className="navbar navbar-expand-lg navbar-dark bg-dark">
    <h2 className="title">购物商场</h2>
    <NavLink size={16} hover="#ffe58f" className="collapse navbar-nav">
      <a href="/home" >首页</a>
      <a href="/rush">秒杀</a>
      <a href="/my">我的</a>
    </NavLink>
  </NavStyle>
}
export default Nav;