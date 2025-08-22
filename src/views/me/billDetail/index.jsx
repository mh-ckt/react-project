import React, { useEffect, useState } from 'react'
import { Popup, Button, Picker, Space } from 'antd-mobile'
import { NavBar } from '@/components/NavBar/index.jsx'
import { useLocation, useNavigate } from 'react-router'
import './index.less'
import { dealType, basicColumns } from './data.js'
import { DownFill, RightOutline, DownOutline } from 'antd-mobile-icons'

const Index = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [dateMonth, setDateMonth] = useState('')
  const [dateYear, setDateYear] = useState('')
  const [newBasicColumns, setNewBasicColumns] = useState(basicColumns)
  const [value, setValue] = useState([])
  const [dealExpendType, setDealExpendType] = useState(dealType)

  useEffect(() => {
    let date = new Date()
    setDateMonth(date.getMonth() + 1)
    setDateYear(date.getFullYear())
  }, [])

  const changeExpendButton = i => {
    setDealExpendType(a =>
      a.map(item =>
        item.name === i.name
          ? {
            checked: true,
            name: item.name
          }
          : {
            checked: false,
            name: item.name
          }
      )
    )
  }

  const toStatisticsPage = () => {
    navigate('/me/statistics')
  }

  const notarizeHandle = () => { }

  // 日期选择确定
  const confirmChange = val => {
    setDateYear(val[0])
    setDateMonth(val[1])
    setValue(val)
  }
  return (
    <div className="allBill">
      <NavBar>{location?.state?.pageTitle}</NavBar>
      {/* 账单筛选 */}
      <div className="top">
        <div
          className="left"
          onClick={() => {
            setVisible(true)
          }}
        >
          全部账单
          <DownFill fontSize={12} />
        </div>
        <div className="right" onClick={toStatisticsPage}>
          统计
          <RightOutline />
        </div>
      </div>
      {/* 日期筛选 */}
      <div className="center">
        <Picker
          columns={newBasicColumns}
          value={value}
          onConfirm={confirmChange}
          onSelect={(val, extend) => {
            // 选择的日期在当前月份之前
            let date = new Date()
            let arr1
            let arr2
            if (val[0] === String(date.getFullYear())) {
              arr1 = basicColumns[0].filter(item => Number(item.value) <= date.getFullYear())
              arr2 = basicColumns[1].filter(item => Number(item.value) <= date.getMonth() + 1)
            } else {
              arr1 = basicColumns[0]
              arr2 = basicColumns[1]
            }
            setNewBasicColumns([arr1, arr2])
          }}
        >
          {(items, { open }) => {
            return (
              <Space align="center">
                <div className="center-left" onClick={open}>
                  {dateYear}年{dateMonth}月
                  <DownOutline />
                </div>
              </Space>
            )
          }}
        </Picker>
        <div className="center-right">支出：¥33.98</div>
      </div>

      {/* 账单列表 */}
      <div className="bottom"></div>

      {/* 底部弹框 */}
      <Popup
        visible={visible}
        bodyStyle={{
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          minHeight: '40vh'
        }}
        onMaskClick={() => {
          setVisible(false)
        }}
        onClose={() => {
          setVisible(false)
        }}
      >
        <div className="all-bill-popup">
          <p>选择筛选项</p>
          <div className="item-option">
            <p>支出类型</p>
            <div className="item-button">
              {dealExpendType.map(item => {
                return (
                  <Button
                    key={item.name}
                    onClick={() => {
                      changeExpendButton(item)
                    }}
                    className={item.checked ? 'item-button-checked' : 'item-button-default'}
                  >
                    {item.name}
                  </Button>
                )
              })}
            </div>
          </div>
          <div className="popup-bottom">
            <Button
              className="popup-bottom-item popup-bottom-item-left"
              onClick={() => {
                setVisible(false)
              }}
            >
              取消
            </Button>
            <Button color="success" className="popup-bottom-item" onClick={notarizeHandle}>
              确定
            </Button>
          </div>
        </div>
      </Popup>
    </div>
  )
}

export default Index
