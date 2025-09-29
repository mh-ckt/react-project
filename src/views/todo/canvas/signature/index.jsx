import React, { useEffect, useRef, useState, useCallback } from 'react'
import './index.less'
import { LinkOutline, ArrowDownCircleOutline, KoubeiOutline, EditSOutline } from 'antd-mobile-icons'
const SignaturePad = () => {
  const canvasRef = useRef()

  const initCanvas = () => {
    let canvas = canvasRef.current
    // 这里的getContext方法用于获取canvas的渲染上下文和绘制功能。
    var ctx = canvas.getContext('2d')
    console.log(9999, ctx)
  }

  useEffect(() => {
    initCanvas()
  }, [])

  return (
    <div className="electronic-signature">
      {/* <p className="title">签名画板</p> */}
      <canvas className="canvas-style" ref={canvasRef}></canvas>
      {/* <ul className="canvas-function">
        <li className="item1">
          <LinkOutline />
          <span>清除签名</span>
        </li>
        <li className="item2">
          <ArrowDownCircleOutline />
          <span>保存签名</span>
        </li>
        <li className="item3">
          <KoubeiOutline />
          <span>更改颜色</span>
        </li>
        <li className="item4">
          <EditSOutline />
          <span>调整粗细</span>
        </li>
      </ul> */}
      {/* <p className="canvas-bottom">在上方区域使用鼠标或触摸屏幕进行签名</p> */}
    </div>
  )
}

export default SignaturePad
