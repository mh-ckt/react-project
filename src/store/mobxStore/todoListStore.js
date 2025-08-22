import { makeAutoObservable } from 'mobx'

class TodoListStore {
  list = [
    { name: '苹果', price: '$3000' },
    { name: '华为', price: '$1000' }
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addList(val) {
    // this.list = [...this.list, val]
    this.list.push(val)
  }
}

const todoListStore = new TodoListStore()
export default todoListStore
