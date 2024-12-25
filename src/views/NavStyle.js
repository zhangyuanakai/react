import styled from 'styled-components'

//基于“styled.标签名"这种方式编写需要的样式
//    +样式要写在“ES6模版字符串”中
//    +返回并且导出的结果是一个自定义组件

export const NavStyle = styled.nav`
  background-color: lightblue;
  width: 300px;

  .title {
    font-size: 20px;
    color: red;

    &:hover {
      color: blue;
    }
  }
`

export const NavLink = styled.div`
  background-color: pink;

  a {
    font-size: ${ props => props.size }px;

    &:hover {
      color: ${ props => props.hover };
    }
  }



`