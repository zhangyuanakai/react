import React from 'react'
import './Newsitem.scss'
import { Image } from 'antd-mobile'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Newsitem = (props) => {
  let { info } = props
  if (!info) {return null}

  let { id, title, hint, images, image } = info
  if (!images) images = [image]

  if (!Array.isArray(images)) images = ['']
  return <div className="news-item-box">
    <Link to={ { pathname: `/detail/${ id }` } }>
      <div className="content">
        <h4 className="title">{ title }</h4>
        {
          hint ? <p className="author">{ hint }</p> : null
        }
      </div>
      <Image src={ images[0] } lazy></Image>
    </Link>

  </div>
}

// 属性规则处理
// Newsitem.defaultProps = {
//   info: null
// }
// Newsitem.propTypes = {
//   info: PropTypes.object
// }
export default Newsitem