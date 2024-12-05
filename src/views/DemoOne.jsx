import PropTypes from 'prop-types'
import React from 'react'

const DemoOne = (props) => {
  let { title, x = 1, children } = props

  children = React.Children.toArray(children)
  let headerSlot = [],
    footerSlot = [],
    defaultSolt = []

  children.forEach((child) => {
    let { slot } = child?.props
    if (slot === 'header') {
      headerSlot.push(child)
      console.log(headerSlot,'headerSlot')
    } else if (slot === 'footer') {
      footerSlot.push(child)
    } else {
      defaultSolt.push(child)
    }
  })
  return <div className="demo-box">
    { headerSlot }
    <br />

    <h3>{ title }</h3>
    <h3>{ x }</h3>

    { footerSlot }
  </div>

}

// //通过吧函数当做对象，设置静态的私有属性方法，来给其设置属性的校验方法
// DemoOne.defaultProps = {
//   x: 0
// }
DemoOne.propType = {
  title: PropTypes.string.isRequired,
  x: PropTypes.number
}
export default DemoOne