import React, { useState, useEffect, useRef } from 'react'
import styles from './index.less'
import LazyLoad from 'react-lazyload'
import { Tabs } from 'antd-mobile'
import { useLocation } from 'react-router-dom'
import loadingUrl from '@/assets/imgs/loading.jpg'

const Lazyload = () => {
  const location = useLocation()
  const { title } = location.state
  return (
    <div className={styles.container}>
      <NavBar title={{ title }} />
      <LazyloadImage />
    </div>
  )
}

const LazyloadImage = () => {
  return (
    <div className={styles.box}>
      <Tabs>
        <Tabs.Tab title="第一种" key="first">
          <FirstLazyload />
        </Tabs.Tab>
        <Tabs.Tab title="第二种" key="second">
          <SecondLazyload />
        </Tabs.Tab>
        <Tabs.Tab title="第三种" key="thirdly">
          <ThirdlyLazyload />
        </Tabs.Tab>
      </Tabs>
    </div>
  )
}
// 图片url
const imgUrls = (num = 10) => {
  const urls = []
  for (let i = 0; i < num; i++) {
    const url = `https://robohash.org/${i}.png`
    urls.push(url)
  }
  return urls
}

const FirstLazyload = () => {
  const scrollRef = useRef(null)
  const [count, setCount] = useState(0)

  const changeScroll = () => {
    const clientHeight = scrollRef.current.clientHeight // 可视区域的高度
    const scrollTop = scrollRef?.current.scrollTop //滚动条滚动高度
    setCount(Math.ceil(scrollTop / clientHeight))
  }

  const initPage = num => {
    const childNodes = scrollRef?.current.childNodes // 获取所有图片集合
    const element = childNodes[num] // 当前加载到第几个
    element.src = element.getAttribute('data-src') // 替换当前的src
  }

  useEffect(() => {
    initPage(count)
  }, [count])
  return (
    <div>
      <p>1. 监听页面的滚动事件</p>
      <div className={styles.imgGroups} ref={scrollRef} onScroll={changeScroll}>
        {imgUrls(100).map(item => {
          return <img data-src={item} key={item} src={loadingUrl} alt="" />
        })}
      </div>
    </div>
  )
}

const SecondLazyload = () => {
  const LazyLoadImage = ({ src, alt }) => {
    const [imageSrc, setImageSrc] = useState(loadingUrl)
    const imgRef = useRef(null)

    useEffect(() => {
      let observer
      const node = imgRef.current // 将imgRef.current的值复制到局部变量中
      if (node) {
        // 创建IntersectionObserver实例
        observer = new IntersectionObserver(
          ([entry]) => {
            // 当图片进入可视区域时，设置图片地址进行加载
            if (entry.isIntersecting) {
              setImageSrc(src)
              observer.unobserve(node)
            }
          },
          {
            rootMargin: '0px 0px 200px 0px' // 可视区域的上边距设置为200px
          }
        )
        observer.observe(node) //开始观察目标元素
      }
      return () => {
        if (observer && observer.unobserve) {
          observer.unobserve(node)
        }
      }
    }, [src])

    return <img ref={imgRef} src={imageSrc} alt={alt} />
  }

  return (
    <div>
      <p>2. 利用 IntersectionObserver API实现</p>
      <div className={styles.imgGroups}>
        {imgUrls(100).map(item => {
          return <LazyLoadImage key={item} src={item} alt="lazy load image" />
        })}
      </div>
    </div>
  )
}

const ThirdlyLazyload = () => {
  const scrollRef = useRef({})
  return (
    <div>
      <p>3. 使用react-lazyload懒加载库实现</p>
      <div className={styles.imgGroups} ref={scrollRef}>
        {imgUrls(100).map(item => {
          return (
            <LazyLoad
              height={200}
              overflow={true}
              offset={0}
              key={item}
              scroll={true}
              scrollContainer={scrollRef.current} // DOM
            >
              <img src={item} alt="" />
            </LazyLoad>
          )
        })}
      </div>
    </div>
  )
}

export default Lazyload
