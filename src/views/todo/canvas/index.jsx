import React from 'react'
import './index.less'
import Signature from '@/views/todo/canvas/signature/index.jsx'
import { useNavigate } from 'react-router-dom'
import Headerbox from '@/components/headerbox/index.jsx'

let list = [
  {
    title: '跳转到原生的 Canvas 绘制基础图形详解',
    path: '/canvas/canvasTutorial.html'
  }
]

const Index = () => {
  let navigate = useNavigate()
  const currentDomain = window.location.host
  console.log(8888, currentDomain)

  const toHtmlPages = item => {
    console.log(9999)
    // navigate(item.path)
    window.location.href = item.path
  }
  return (
    <div className="canvas-pages">
      <Headerbox>canvas</Headerbox>
      <Signature />
      <ul>
        {list.map(item => {
          return (
            <li key={item.path} onClick={() => toHtmlPages(item)}>
              {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Index
