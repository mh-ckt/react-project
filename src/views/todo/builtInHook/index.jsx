import React from 'react'
import { useLocation } from 'react-router-dom'
import './index.less'
import NavBar from '@/components/NavBar/index.jsx'
import { Collapse } from 'antd-mobile'
// 内置钩子
import UseState from '@/views/todo/builtInHook/useState/index.jsx'
import UseCallback from '@/views/todo/builtInHook/useCallback/index.jsx'
import UseContext from '@/views/todo/builtInHook/useContext/index.jsx'
import UseEffect from '@/views/todo/builtInHook/useEffect/index.jsx'
import UseLayoutEffect from '@/views/todo/builtInHook/useLayoutEffect/index.jsx'
import UseMemo from '@/views/todo/builtInHook/useMemo/index.jsx'
import UseReducer from '@/views/todo/builtInHook/useReducer/index.jsx'
import UseRef from '@/views/todo/builtInHook/useRef/index.jsx'
import UseImperativeHandle from '@/views/todo/builtInHook/useImperativeHandle/index.jsx'
import UseTransition from '@/views/todo/builtInHook/useTransition/index.jsx'

const list = [
  {
    description: 'useState 是一个 React Hook，它允许你向组件添加一个 状态变量。',
    title: 'useState',
    element: <UseState />
  },
  {
    description: 'useMemo 是一个 React Hook，它在每次重新渲染的时候能够缓存计算的结果',
    title: 'useMemo',
    element: <UseMemo />
  },
  {
    description: 'useCallback 是一个允许你在多次渲染中缓存函数的 React Hook',
    title: 'useCallback',
    element: <UseCallback />
  },
  {
    description: 'useContext 是一个 React Hook，可以让你读取和订阅组件中的 context',
    title: 'useContext',
    element: <UseContext />
  },
  {
    description: 'useEffect 是一个 React Hook，它允许你 将组件与外部系统同步',
    title: 'useEffect',
    element: <UseEffect />
  },
  {
    description: 'useLayoutEffect 是 useEffect 的一个版本，在浏览器重新绘制屏幕之前触发',
    title: 'useLayoutEffect',
    element: <UseLayoutEffect />
  },
  {
    description: 'useReducer 是一个 React Hook，它允许你向组件里面添加一个 reducer',
    title: 'useReducer',
    element: <UseReducer />
  },
  {
    description: 'useRef 是一个 React Hook，它能帮助引用一个不需要渲染的值。',
    title: 'useRef',
    element: <UseRef />
  },
  {
    description: 'useImperativeHandle',
    title: 'useImperativeHandle',
    element: <UseImperativeHandle />
  },
  {
    description: 'useTransition 是一个让你可以在后台渲染部分 UI 的 React Hook。',
    title: 'useTransition',
    element: <UseTransition />
  }
]

const Index = () => {
  const location = useLocation()
  const title = location.state?.title || ''
  return (
    <div classtitle="builtInHook">
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
