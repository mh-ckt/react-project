import React from 'react'
import { useLocation } from 'react-router'
import './index.less'
import NavBar from '@/components/NavBar/index.jsx'
import { Collapse } from 'antd-mobile'
import RealizeStyle from '@/views/todo/pageAction/realizeStyle/index.jsx'
import Side from '@/views/todo/pageAction/slide/index.jsx'
import Refresh from '@/views/todo/pageAction/refresh/index.jsx'
const list = [
  {
    title: '常见的样式实现',
    key: 'realizeStyle',
    element: <RealizeStyle />
  },
  {
    title: '页面滑动功能的实现',
    key: 'side',
    element: <Side />
  },
  {
    title: 'h5页面实现上拉刷新和下拉加载功能',
    key: 'refresh',
    element: <Refresh />
  }
]

const Index = () => {
  const location = useLocation()
  const title = location.state?.title || ''
  return (
    <div className="pageAction">
      <NavBar>{title}</NavBar>
      <Collapse accordion>
        {
          list.map(item => (
            <Collapse.Panel title={item.title} key={item.title}>
              {item.element}
            </Collapse.Panel>
          ))
        }
      </Collapse>
    </div>
  )
}

export default Index
