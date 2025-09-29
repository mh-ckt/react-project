import React from 'react'
import { Headerbox } from '@/components/headerbox/index.jsx'
import { useNavigate, useLocation } from 'react-router-dom'
import './index.less'
import jiluzhangdan from '@/icons/jiluzhangdan.png'
import quanbuzhangdan from '@/icons/quanbuzhangdan.png'

const billListDetail = [
  {
    name: '记录账单',
    key: 'record-bill',
    icon: jiluzhangdan
  },
  {
    name: '账单明细',
    key: 'bill-detail',
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
      <Headerbox>{location?.state?.pageTitle}</Headerbox>
      <div className="bill-list-detail">
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
