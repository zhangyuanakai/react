import React from 'react'
import { connect } from 'react-redux'
import action from '../store/action'
import NavBarAgain from '../components/NavBarAgain'
import { Link } from 'react-router-dom'
import { RightOutline } from 'antd-mobile-icons'
import { Toast } from 'antd-mobile'
import _ from '../assets/utils'

const Personal = function Personal(props) {
  let { info, clearUserInfo, clearStoreList, navigate } = props
  // 退出登录
  const signout = () => {
    // 清除redux中的信息
    clearUserInfo()
    clearStoreList()
    //   清楚token
    _.storage.remove('tk')
    //   提示
    Toast.show({
      icon: 'success',
      content: '您已安全退出'
    })
    //   跳转
    navigate('/login?to=/personal', { replace: true })
  }
  return <div className="personal-box">
    <NavBarAgain title="个人中心" />
    <div className="baseInfo">
      <Link to="/update">
        <img src={ info.pic } alt="" className="pic" />
        <p className="name">{ info.name }</p>
      </Link>
    </div>
    <div>
      <Link to="/store" className="tab">
        我的收藏
        <RightOutline></RightOutline>
      </Link>
      <Link className="tab">
        退出登录
        <RightOutline></RightOutline>
      </Link>
    </div>
  </div>
}

export default connect(
  state => state.base,
  {
    clearUserInfo: action.base.clearUserInfo,
    clearStoreList: action.store.clearStoreList()
  })(Personal)