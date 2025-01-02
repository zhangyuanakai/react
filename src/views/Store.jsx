import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import action from '../store/action'
import { info } from 'sass'
import api from '../api'
import { Toast } from 'antd-mobile'

const Store = function Store(props) {
  let { list: storeList, queryStoreListAsync, removeStoreListById } = props
  useEffect(() => {
    //   第一次加载完毕，如果redux中没有收藏列表，则异步优先
    if (!storeList) queryStoreListAsync()
  }, [])
  // 移除收藏
  const handleRemove = async (id) => {
    try {
      let { code } = await api.storeRemove(id)
      if (+code !== 0) {
        Toast.show({ icon: 'fail', content: '移除失败' })
      }
      Toast.show({ icon: 'success', content: '移除成功' })
    } catch (e) {

    }
  }

  return <div className="store-box">
    我的收藏
    {/*  删除当前收藏列表的id   并且调取handleRemove方法*/ }
  </div>
}

export default connect(state => state.store, action.store)(Store)