import React from 'react'
import { NavBar } from '@/components/NavBar/index.jsx'
import { useNavigate, useLocation } from 'react-router'
import './index.less'
// 将图片放在src的目录下，图片会被webpack进行打包（ES6 Modules (Create React App 17+ 支持)）
import jiluzhangdan from '../../icons/jiluzhangdan.png'
import quanbuzhangdan from '../../icons/quanbuzhangdan.png'
const billListDetail = [
  {
    name: '记录账单',
    key: 'recordBill',
    icon: jiluzhangdan
  },
  {
    name: '账单明细',
    key: 'BillDetail',
    icon: quanbuzhangdan
  }
]

const Index = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const toRouter = ({ key, name }) => {
    navigate(`/me/${key}`, { state: { pageTitle: name } })
  }

  return (
    <div className="me">
      <NavBar>{location?.state?.pageTitle}</NavBar>
      <div className="billListDetail">
        <p>收支明细</p>
        <div className="list">
          {billListDetail.map((item, index) => {
            return (
              <div className="items" key={index} onClick={() => toRouter(item)}>
                <img src={item.icon} alt="" />
                <div>{item.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Index
