import React from 'react'
import { NavBar } from 'antd-mobile'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'

const NavBarAgain = (props) => {
  let { title } = props
  const navigate = useNavigate(),
    location = useLocation(),
    [usp] = useSearchParams()
  const handleBack = () => {
    // 特殊：登录也   &to的值是/detail/xxx
    let to = usp.get('to')
    if (location.pathname === '/login' && /^\/detail\/\d+$/.test(to)) {
      navigate(to, { replace: true })
      return
    }
    navigate(-1)
  }

  return <NavBar onBack={ handleBack }>
    { title }
  </NavBar>

}
// NavBarAgain.defaultProps = {
//   title: '个人中心'
// }
// NavBarAgain.propTypes = {
//   title: PropTypes.string
// }
export default NavBarAgain