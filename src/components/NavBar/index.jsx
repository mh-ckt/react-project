/**
封装的组件属性说明：
children：标题
back：返回区域的文字；
backIcon：是否显示返回区域的箭头；默认显示
onBack：点击返回区域后的回调
right：右侧内容
*/

import React from 'react'
import './index.less'
import { LeftOutline, SetOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router'

const NavBar = ({ children, back, backIcon, onBack, right }) => {
  const navigate = useNavigate()
  const toBack = () => {
    if (onBack) {
      onBack()
    } else {
      navigate(-1)
    }
  }
  return (
    <div className="navBar">
      <div className="left" onClick={toBack}>
        <div className="backIcon">{backIcon ? backIcon : <LeftOutline fontSize={20} />}</div>
        <div className="back">{back ? back : '返回'}</div>
      </div>
      <div className="title">{children ? children : '标题'}</div>
      <div className="right">{right ? right : <SetOutline fontSize={20} />}</div>
    </div>
  )
}

export { NavBar }

export default NavBar
