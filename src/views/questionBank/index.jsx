import React from 'react'
import styles from './index.less'
import router from '@/router/router.js'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  let list = router.routes.find(i => i.key == 'question-bank' && i.children?.length > 0)?.children
  const navigate = useNavigate()
  const toLink = item => {
    navigate(item.path, { state: { title: item.name } })
  }
  return (
    <div className={styles.container}>
      {list?.map(item => (
        <div
          className={styles.items}
          key={item.path}
          onClick={() => {
            toLink(item)
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  )
}

export default Index
