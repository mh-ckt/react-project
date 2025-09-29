import React from 'react'
import Headerbox from '@/components/headerbox/index.jsx'
import { useLocation } from 'react-router-dom'

const JavaScript = () => {
  const location = useLocation()
  const title = location.state?.title || ''
  return (
    <div>
      <Headerbox>{title}</Headerbox>
    </div>
  )
}

export default JavaScript
