import React from 'react'
import global from '@/assets/styles/global.less'
import NavBar from '@/components/NavBar/index.jsx'
import CardList from '@/components/cardList'
import { useLocation } from 'react-router-dom'
import data from '@/mock/index'

const JavaScript = () => {
  const location = useLocation()
  const title = location.state?.title || ''
  let list = data.filter(item => item.type === 'css')
  return (
    <div>
      <NavBar>{title}</NavBar>
      <CardList list={list} />
    </div>
  )
}

export default JavaScript
