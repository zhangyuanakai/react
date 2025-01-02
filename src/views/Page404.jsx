import React from 'react'
import { Button, ErrorBlock } from 'antd-mobile'
import './Page404.scss'

const Page404 = function Page404(props) {
  let { navigate } = props

  return <div className="Page404-box">
    <ErrorBlock status="empty" title="您访问的页面不存在" description="去逛逛其他的页面吧"></ErrorBlock>
    <div className="btn">
      <Button color="warning" size="large" className="button" onClick={
        () => {
          navigate(-1)
        }
      }>返回上一页</Button>
      <Button color="primary" size="large" onClick={ () => {
        navigate('/', { replace: true })
      } }>回到首页</Button>
    </div>

  </div>
}

export default Page404