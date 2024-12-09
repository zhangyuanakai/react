import PropTypes from 'prop-types'
import React from 'react'

const Dialog = (props) => {
  let { title, content, children } = props
  children = React.Children.toArray(children)

  return <div className="dialog-box">
    <div className="header">
      <h2 className="title">{ title }</h2>
      <span>x</span>
    </div>

    <div className="main">
      { content }
    </div>

    { children.length > 0 ?
      <div className="footer">
        { children }
      </div>
      : null }
  </div>
}

// 属性规则校验
Dialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired
}
export default Dialog