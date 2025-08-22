export default {
  biggerTitle: 'ES6+',
  type: 'javascript',

  items: [
    {
      title: 'es5和es6继承有什么区别？',
      type: 'javascript',
      result: `
      ES5和ES6在继承方面的主要区别在于ES5是通过原型链或构造函数机制来实现继承，而ES6则是通过class和extends关键字来实现继承。（具体后续探讨）
        `,

      difficulty: '★★★'
    },
    {
      title: 'bind,call,apply的区别？',
      type: 'javascript',
      result: `
      // ---------------------------apply应用---------------------------
      语法：fun.apply(thisArg, [argsArray])
      作用：改变this的指向，第一个参数是需要指向的this对象（函数），如果传递的是null和undefined会指向全局。同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的自动包装对象。第二个参数是数组或者类数组对象，会将该值一次传递给第一个参数。
        
      场景一： 使用apply将一个数组中的元素添加到另一个数组中
        let arr1 = [1, 2, 3, 4, 5]
        let arr2 = [7, 8, 9]
        let T = arr1.push.apply(arr1, arr2)

      场景二：找出数组中的最大最小值。
        let arr1 = [1, 2, 3, 4, 5]
        let min = Math.min.apply(null, arr1) // 1
        let max = Math.max.apply(null, arr1) // 5

      // ---------------------------call应用---------------------------
      语法：call(thisArg, arg1, arg2, argN)
      作用：作用基本和apply相同，不同的是传递的第二个参数或者后面的n个参数会以列表的形式依次传递给call，而apply是数组的形式传递。
      场景:继承一个构造函数的方法：
      function Animal(name, age) {
        ;(this.name = name), (this.age = age)
      }
      function Cat(name, age) {
        Animal.call(this, name, age)
      }
      let cat = new Cat("Tom", 2)
      console.log(cat.name) // Tom

      ---------------------------bind应用---------------------------
      语法：bind(thisArg, arg1, arg2, argN)()
      作用：作用基本和call相同,不同的bind会重新创建一个函数，需要再次调用才会执行
      var a = {
        name: "Cherry",
        fn: function (a, b) {
          console.log(a + b)
        },
      }
      var b = a.fn
      b.bind(a, 1, 2)()
        `,

      difficulty: '★★★'
    },
    {
      title: 'promise和async、await的区别？',
      type: 'javascript',
      result: `
      区别：
        1、promise是通过链式调用，通过then和catch方法来拿到异步的结果。async和await是通过try...catch的方式捕获异常。书写方面更加美观同时更像同步的写法。特别是处理多个异步的时候更容易理解。
        `,

      difficulty: '★★★'
    },
    {
      title: '如何解决回调地狱？',
      type: 'javascript',
      result: `
      回调地狱：指的是在编写异步编程的过程中，回调函数嵌套越来越深，导致代码的可读性和维护性极差的现象。
      例如：
      setTimeout(() => {
        console.log("起床了")
        setTimeout(() => {
          console.log("刷牙了")
          setTimeout(() => {
            console.log("吃饭来")
          }, 1000)
        }, 1000)
      }, 1000)

      解决方案一：使用promise.then()方法
      function fn(params, time) {
        let P = new Promise((relove, reject) => {
          setTimeout(() => {
            relove(params)
          }, time)
        })
        return P
      }
      fn("起床了", 1000)
        .then((res) => {
          console.log(res)
          return fn("刷牙了", 1000)
        })
        .then((res) => {
          console.log(res)
          return fn("吃饭了", 1000)
        })
        .then((res) => {
          console.log(res)
        })

        解决方案二：使用async和await方式
        function fn(params, time) {
          let P = new Promise((relove, reject) => {
            setTimeout(() => {
              relove(params)
            }, time)
          })
          return P
        }
      
        async function test() {
          let res1 = await fn("起床了", 1000)
          console.log(res1)
          let res2 = await fn("刷牙了", 1000)
          console.log(res2)
          let res3 = await fn("吃饭了", 1000)
          console.log(res3)
        }
        test()
        `,

      difficulty: '★★★'
    },
    {
      title: 'ES6中有那些新特性？',
      type: 'javascript',
      result: `
        1、let关键字和const关键字。
        2、数据类型：symblo基本数据类型，表示独一无二的值。
        3、模版字符串，同时增加了新的方法includes等。
        4、数组对象的解构赋值。
        5、模块的导入和导出：import 和 export。
        6、Map和Set数据对象。
        7、增加的Array.from方法，可以用于将一个可迭代对象转换数组结构，数组的for...of..循环。
        8、对象的方法：Object.is(), Object.keys(), Object.values(), Object.assign(), Object.entries()
        9、函数新增了参数默认值、以及剩余参数、箭头函数、扩展运算符等等。
        10、promise，class类等。
        11、Reflect对象与Proxy对象
        `,

      difficulty: '★'
    },
    {
      title: '说说var、let、const之间的区别？',
      type: 'javascript',
      result: `
         1. var和let是用于声明变量的，const用于声明常量。
         2.let和const都是es6新增的语法，let是var的加强版。
         3.var中存在变量提示，let和const中不存在变量提升。
         4.let和const拥有自己作用域，var不存在。
         5.var可以多次声明同一变量，const和let不可以。
         6.var和let可以对同一变量重复赋值，const不可以。
         7.const声明必须赋值。

         什么是变量提升？
         js引擎在工作的时候是先解析代码，获取所有被声明的变量，然后再代码的执行，所有被var声明的变量在预解析阶段就被提升到了代码的头部，这就是变量提升。

         什么是块级作用域？
         let和const有自己的块级作用域，var没有，举个简单的例子：在if语句中使用var声明的变量在if的外面可以获取变量，而使用let声明的变量，在if的外面获取不到。

         const定义的是对象，修改对象里面的字段会不会报错？
         不会
              `,

      difficulty: '★★★'
    },
    {
      title: '说说暂时性死区如何理解？',
      type: 'javascript',
      result: `
        let 和 const 声明的变量不存在变量提升，其作用域都是块级作用域，凡是在声明变量之前使用变量就会报错，所以，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）
        
          // 死区开始
          lzp = "lut"; //  ReferenceError
          console.log(lzp); //  ReferenceError
          // 开始声明变量，死区结束
          let lzp;
          console.log(lzp); // undefined
          lzp = 520;
          console.log(lzp); // 520
              `,

      difficulty: '★★★'
    },
    {
      title: '怎么理解Promise的？使用场景？',
      type: 'javascript',
      result: `
         ES6 规定，Promise对象是一个构造函数，用来生成Promise实例,里面保存着某个未来才会结束的事件。
         Promise 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大。
         promise对象里面接收一个函数作为参数，该函数的两个参数分别是reject和resolve，reject和resolve是js引擎提供的两个方法。
         reject的作用是将promise对象的状态从‘未完成’变为‘失败’，在异步操作失败时调用，并将异步操作报错作为参数传递出去。
         resolve的作用是当promise对象状态从“未完成”变为“成功”时调用，并将异步操作的结果作为参数传递出去。
         promise对象上方法：
         Promise.resolve()方法（快速返回一个成功promise对象）
         Promise.reject()方法（快速返回一个失败的promise对象）
         Promise.all()方法（参数是数组，可以是多个promise对象，都是成功返回成功，值是成功promise组成的数组，有一个失败返回失败，值是失败的promise）
         Promise.race()方法（返回最先执行的promise）
         Promise.prototype.then()方法（接收两个回调函数）
         Promise.prototype.catch()方法（接受一个回调函数）
         Promise.prototype.finally()方法（不依赖Prominse执行结果，最后执行）
              `,

      difficulty: '★★★'
    },
    {
      title: 'promise的工作原理？及如何实现一个promise对象？？',
      type: 'javascript',
      result: `
        工作原理：当创建一个promsie的时候它的状态是待定的，也就是padding，当异步操作完成以后，可以将异步的结果传递给resolve方法或者reject方法，此时通过.then或者.catch方法可以拿到异步操作的结果。
        实现步骤：
        第一步：由于promise本身是一个构造函数，可以简单的创建一个promsie类。
        第二步：在promsie中有三种状态，可以用设置一个状态变量state，默认是padding，由于promsie的调用会返回一个promise实例，实例中包含异步执行的结果，设置一个结果变量result，默认是undefined。
        第三步：由于promsie中接受一个回调函数，同时回调函数中传递两个参数，resolve和reject，通过调用resolve和reject把异步的结果传递出去，这一步可以在构造器中传递一个callback函数，同时在构造器中定义resolve和reject方法，同时在class中定另一个方法changeState用于改变状态和设置结果，在resolve方法和reject方法中调用changState方法，当用户调用这两个方法的时候会把状态和传递的值传递给changeState，用于设置状态和结果。
        class Mypromise {
          // 设置状态
          #state = 'padding'
          #result = 'undefined'

          constructor(callback) {
            const resolve = (res) => {
              this.#changeState('fulfilled', res)
            }
            const reject = (err) => {
              this.#changeState('rejected', err)
            }
            try {
              callback(resolve, reject)
            } catch (err) {
              reject(err)
            }
          }
          #changeState = (state, result) => {
            //判断当前状态，如果不是 padding 就不执行
            if (this.#state !== 'padding') return
            this.#state = state
            this.#result = result
          }
        }
        第四步：关于then方法和catch方法的封装。then方法和catch方法以及finally方法等都是在promsie的构造函数的原型上定义的方法，通过判断当前的promsie的状态把对应的结果传递过去。
        MyPromise.prototype.then = function (resolveFn, rejectFn) {
                //判断当前的promise状态是否成功
                if (this.PromiseState === "fulfilled") {
                  resolveFn(this.PromiseResult);
                }
                if (this.PromiseState === "rejected") {
                  resolveFn(this.PromiseResult);
                }

                //当promise是异步的时候，此时then方法中并不能拿到promise的值，可以使用callback对象存储下当前的then方法中的回调，当promise状态改变的时候再执行then方法
                if (this.PromiseState === "pending") {
                  this.callback = {
                    resolveFn,
                    rejectFn,
                  };
                }
              };
        `,

      difficulty: '★★★★★'
    },
    {
      title: 'import和require的区别？',
      type: 'javascript',
      result: `
        import是是es6中的新特性，require的是node.js中导入模块的函数，他们都是用于导入模块使用。
        import语句和import函数语法是不同的，import语句是在编译的时候就进行了加载，而import函数和require函数是在代码执行的时候才进行加载。
        import函数是基于promise的异步加载，require函数是同步加载。
        在整个应用程序中，使用 import 和 import() 语句导入的模块都是单例模式，也就是共用同一个模块实例，而使用 require() 导入的模块则会因为复制而产生多个实例。
        import 和 import() 语句支持模块的默认导出和命名导出，而 require() 只支持模块的默认导出 (module.exports) 导出。
              `,

      difficulty: '★★★'
    },
    {
      title: 'import语句有多少种写法？',
      type: 'javascript',
      result: `
        import和import()是es6新增的语法，用于导入模块，他们的语法有所区别：
        
        常见的import语法如下：
        // Export可以是默认导出的也可以是单独到处的
        import Export from "module-name";
        // export1是从一个对象中解构出来的
        import { export1 } from "module-name";
        // 这里指的的是从module-name中导入所有的模块内容，通过name属性可以拿到模块中所有的导出
        import * as name from "module-name";
        
        常见的import()语法如下：
        // import函数返回的是一个promise对象，可以通过.then的方式拿到模块中的内容
        const home = await import('./home.js')
              `,

      difficulty: '★★★'
    }
  ]
}
