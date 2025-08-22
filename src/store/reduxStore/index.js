import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux-slices/counterSlice.js'
import todoListSlice from './redux-slices/todoListSlice.js'
import foodListSlice from './redux-slices/foodSlice.js'

const store = configureStore({
  reducer: {
    counterReducer,
    todoList: todoListSlice,
    foods: foodListSlice
  }
})

export default store
