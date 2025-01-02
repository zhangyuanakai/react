import React, { useState } from 'react'
import { connect } from 'react-redux'
import action from '../store/action'
import { Input, Toast } from 'antd-mobile'
import { upload } from '@testing-library/user-event/dist/upload'
import api from '../api'

const Update = function Update(props) {
  let { info, queryStoreListAsync, navigate } = props
  // 定义状态
  let [pic, setPic] = useState({ url: info.pic }),
    [username, SetUserName] = useState(info.name)

  // 图片上传
  const limitImage = (file) => {
    let limit = 10 * 1024
    if (file.size > limit) {
      Toast.show({
        content: '图片必须在1MB内',
        icon: 'fail'
      })
      return null
    }
    return file
  }
  const uploadImage = async (file) => {
    let temp
    try {
      let { code, pic } = await api.upload(file)
      if (+code !== 0) {
        Toast.show({
          icon: 'fail',
          content: '上传失败'
        })
        return
      }
      temp = pic
      setPic([{ url: pic }])
    } catch (e) {}
    return { url: temp }
  }
  // 提交信息
  const submit = async () => {
    if (pic.length === 0) {
      Toast.show({
        icon: 'fail',
        content: '请先上传图片'
      })
      return
    }
    if (username.trim() === '') {
      Toast.show({
        icon: 'fail',
        content: '请先输入账号'
      })
      return
    }
    // 获取信息，发送请求
    let [{ url }] = pic
    try {
      let { code } = await api.userUpdate(username.trim(), url)
      if (+code !== 0) {
        Toast.show({
          icon: 'fail',
          content: '修改信息失败'
        })
        return
      }
      Toast.show({
        icon: 'success',
        content: '修改信息成功'
      })
      queryStoreListAsync() //同步redux中的信息
      navigate(-1)
    } catch (e) {

    }

  }

  return <div className="update-box">
    <div className="item">
      <div className="label">姓名</div>
      <div className="input">
        <Input placeholder="请输入账号名称" value={ username }></Input>
      </div>
    </div>
  </div>
}

export default connect(
  state => state.base,
  action.base)
(Update)