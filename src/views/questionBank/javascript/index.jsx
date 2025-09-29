import React from 'react'
import global from '@/assets/styles/global.less'
import Headerbox from '@/components/headerbox/index.jsx'
import CardList from '@/components/cardList'
import { useLocation } from 'react-router-dom'
import data from '@/mock/index'

const JavaScript = () => {
  const location = useLocation()
  const title = location.state?.title || ''
  let list = data.filter(item => item.type === 'javascript')
  return (
    <div>
      <Headerbox>{title}</Headerbox>
      <CardList list={list} />
    </div>
  )
}

export default JavaScript
