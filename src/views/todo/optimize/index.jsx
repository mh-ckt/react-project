import React from 'react'
import NavBar from '@/components/NavBar/index.jsx'
import { useLocation } from 'react-router-dom'

const JavaScript = () => {
  const location = useLocation()
  const title = location.state?.title || ''
  return (
    <div>
      <NavBar>{title}</NavBar>
    </div>
  )
}

export default JavaScript
