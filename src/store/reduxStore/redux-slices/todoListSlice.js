import { createSlice } from '@reduxjs/toolkit'

export const listSlice = createSlice({
  name: 'todoList',
  initialState: {
    list: [
      { name: '苹果', price: '$3000' },
      { name: '华为', price: '$1000' }
    ]
  },
  reducers: {
    addList: (state, action) => {
      // state.list = [...state.list, action.payload]
      state.list.push(action.payload) // 支持对于原有状态的修改
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { addList } = listSlice.actions

export default listSlice.reducer
