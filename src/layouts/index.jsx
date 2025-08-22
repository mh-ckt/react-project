import React from 'react'
import { TabBar } from 'antd-mobile'
import styles from './index.less'
import Me from '../views/me'
import Message from '../views/message'
import Home from '../views/home'
import Todo from '../views/todo'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline } from 'antd-mobile-icons'
const tabs = [
  {
    key: '/home',
    title: '首页',
    icon: <AppOutline />,
    components: <Home />
  },
  {
    key: '/todo',
    title: '待办',
    components: <Todo />,
    icon: <UnorderedListOutline />
  },
  {
    key: '/message',
    title: '消息',
    components: <Message />,
    icon: <MessageOutline />
  },
  {
    key: '/me',
    title: '我的',
    components: <Me />,
    icon: <UserOutline />
  }
]

const Nav = () => {
  const location = useLocation()
  const { pathname } = location
  const navigate = useNavigate()
  const setRouteActive = value => {
    navigate(value)
  }
  return (
    <div className={styles.app}>
      <div className={styles.body}>{tabs.find(item => item.key === pathname).components}</div>
      <div className={styles.bottom}>
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default Nav
