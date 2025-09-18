import React, { useState } from 'react'
import './index.less'
import dayjs from 'dayjs'
import { HandPayCircleOutline, SmileOutline, PlayOutline, ShopbagOutline } from 'antd-mobile-icons'
import { CalendarPicker, Button, Input, Space, NumberKeyboard } from 'antd-mobile'
import { addAnBill } from '@/api/bill'
const defaultRange = [dayjs().toDate(), dayjs().add(2, 'day').toDate()]

const billtypeList = [
  {
    name: '支出',
    id: 'expend'
  },
  {
    name: '入账',
    id: 'income'
  },
  {
    name: '不计入收支',
    id: 'notInclude'
  }
]

const iconMap = {
  SmileOutlined: SmileOutline,
  PlayOutlined: PlayOutline,
  TShirtOutlined: ShopbagOutline
}

const Index = () => {
  const [val, setVal] = useState(() => [dayjs().subtract(2, 'day').toDate(), dayjs().add(2, 'day').toDate()])
  const [clickDate, setClickDate] = useState(dayjs().format('MM月DD日'))
  const [detailsDate, setDetailsDate] = useState(dayjs().format('YYYY年MM月DD日'))
  const [singleAmount, setSingleAmount] = useState(100)
  const [expendTypeList, setExpendTypeList] = useState([
    { name: '餐饮', icon: 'SmileOutlined', isActive: true },
    { name: '交通', icon: 'PlayOutlined', isActive: false },
    { name: '服饰', icon: 'TShirtOutlined', isActive: false }
  ])
  const [aNoteText, setANoteText] = useState('一顿大餐')
  const [billType, setBillType] = useState('餐饮')
  const [visibleDatePicker, setvisibleDatePicker] = useState(false)
  const singleDate = new Date('2023-06-03')

  // 选择日期
  const changeDatePicker = val => {
    setClickDate(dayjs(val).format('MM月DD日'))
    setDetailsDate(dayjs(val).format('YYYY年MM月DD日'))
    setvisibleDatePicker(false)
  }

  // 添加账单
  // const handlyNumberKeyboard = () => {

  // }

  const handlyBillType = item => {
    setBillType(item.name)
    setExpendTypeList(a => {
      return a.map(i => {
        if (i.name == item.name) {
          i.isActive = true
        } else {
          i.isActive = false
        }
        return i
      })
    })
  }

  const addBill = async () => {
    let aBill = {
      billType, // 账单类型
      aNoteText, // 账单备注
      detailsDate, // 账单日期
      singleAmount // 账单金额
    }
    try {
      const res = await addAnBill(aBill)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <section className="bill-top">
        <ul className="bill-type-list">
          {billtypeList.map(item => {
            return (
              <li key={item.name}>
                <Button size="small" color="primary">
                  {item.name}
                </Button>
              </li>
            )
          })}
        </ul>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            setvisibleDatePicker(true)
          }}
        >
          {clickDate}
        </Button>
      </section>
      <section>
        <Space wrap align="center">
          <HandPayCircleOutline fontSize={24} />
          <Input
            value={singleAmount}
            placeholder="请输入金额"
            onChange={val => {
              setSingleAmount(val)
            }}
            clearable
          />
        </Space>
      </section>
      <section className="expend-type-list">
        {expendTypeList?.map(item => {
          const IconComponent = iconMap[item.icon]
          return (
            <div
              className={item.isActive ? 'expend-type-active' : ''}
              key={item.name}
              onClick={() => {
                handlyBillType(item)
              }}
            >
              {IconComponent && <IconComponent style={{ fontSize: 20 }} />}
              <p>{item.name}</p>
            </div>
          )
        })}
      </section>
      <section>
        <Space wrap align="center">
          <span>添加备注：</span>
          <Input
            value={aNoteText}
            placeholder=""
            clearable
            onChange={val => {
              setANoteText(val)
            }}
          />
        </Space>
      </section>
      <section>
        <Button onClick={addBill}>添加账单</Button>
      </section>
      {/* <section>
        <NumberKeyboard visible={true} customKey={['.']} confirmText="确定" onConfirm={handlyNumberKeyboard} />
      </section> */}
      <CalendarPicker
        visible={visibleDatePicker}
        selectionMode="single"
        defaultValue={singleDate}
        onChange={changeDatePicker}
        onMaskClick={() => setvisibleDatePicker(false)}
      />
    </div>
  )
}

export default Index
