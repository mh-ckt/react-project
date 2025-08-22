import App from '../App.js' // 主页
import JavaScript from '@/views/todo/javascript/index.jsx'
import Style from '@/views/todo/csss/index.jsx'
import React from '@/views/todo/react/index.jsx'
import Optimize from '@/views/todo/optimize/index.jsx'
import RecordBill from '@/views/me/recordBill/index.jsx'
import BillDetail from '@/views/me/billDetail/index.jsx'
import Statistics from '@/views/me/billDetail/statistics/index.jsx' // 统计
import BuiltlnHook from '@/views/todo/builtInHook/index.jsx'
import HighAction from '@/views/todo/highAction/index.jsx'
import PageAction from '@/views/todo/pageAction/index.jsx'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
let routes = [{
  path: '/',
  key: '',
  element: <Navigate to={'/home'} />
},
{
  path: '/home',
  key: 'home',
  element: <App />
},
{
  path: '/me',
  key: 'me',
  element: <App />
},
{
  path: '/message',
  key: 'message',
  element: <App />
},
{
  path: '/todo',
  key: 'todo',
  element: <App />
},
{
  path: '/me',
  name: 'me',
  children: [
    {
      path: 'RecordBill',
      name: 'RecordBill',
      element: <RecordBill />
    },
    {
      path: 'BillDetail',
      name: 'BillDetail',
      element: <BillDetail />
    },
    {
      path: 'Statistics',
      name: 'Statistics',
      element: <Statistics />
    }
  ]
},
{
  path: '/todo',
  key: 'todo',
  children: [
    {
      path: 'javascript',
      name: 'javascript',
      element: <JavaScript />
    },
    {
      path: 'style',
      name: '样式',
      element: <Style />
    },
    {
      path: 'optimize',
      name: '性能优化',
      element: <Optimize />
    },
    {
      path: 'react',
      name: 'react',
      element: <React />
    },
    {
      path: 'BuiltlnHook',
      name: '内置 Hook',
      element: <BuiltlnHook />
    },
    {
      path: 'HighAction',
      name: '进阶功能',
      element: <HighAction />
    },
    {
      path: 'PageAction',
      name: '页面功能',
      element: <PageAction />
    }
  ]
}]


let router = createBrowserRouter(routes, {})

export default router
