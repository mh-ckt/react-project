import React from 'react'
import { useLocation } from 'react-router'
import './index.less'
import NavBar from '@/components/NavBar/index.jsx'
import { Collapse } from 'antd-mobile'
import ReduxPages from '@/views/todo/highAction/reduxCase/index.jsx'
import MobxPages from '@/views/todo/highAction/mobxCase/index.jsx'
import SaveValue from '@/views/todo/highAction/saveValue/index.jsx'
import CustomHooks from '@/views/todo/highAction/customHooks/index.jsx'
import Hoc from '@/views/todo/highAction/hoc/index.jsx'
import CacheCom from '@/views/todo/highAction/cacheCom/index.jsx'
import DevServer from '@/views/todo/highAction/devServer/index.jsx'
const list = [
  {
    title: 'redux初体验',
    key: 'reduxPages',
    element: <ReduxPages />
  },
  {
    title: 'mobx初体验',
    key: 'mobxPages',
    element: <MobxPages />
  },
  {
    title: '在一个页面上同时展示更新前后的值',
    key: 'saveValue',
    element: <SaveValue />
  },
  {
    title: '自定义组件的使用',
    key: 'customHooks',
    element: <CustomHooks />
  },
  {
    title: '高阶组件的使用',
    key: 'hoc',
    element: <Hoc />
  },
  {
    title: '缓存组件',
    key: 'cacheCom',
    element: <CacheCom />
  },
  {
    title: '配置代理服务器',
    key: 'devServer',
    element: <DevServer />
  }
]

const Index = () => {
  const location = useLocation()
  const title = location.state?.title || ''
  return (
    <div className="highAction">
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
