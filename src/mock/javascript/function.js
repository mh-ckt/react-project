export default {
  biggerTitle: '函数',
  type: 'javascript',

  items: [
    {
      title: '变量提升是什么？与函数提升有什么区别？',
      type: 'javascript',
      result: `
      变量提升：
        1、变量的提升只有声明会被提升，初始化不会被提升。
        2、变量提升的位置是当前作用域的顶部

      案例一
        console.log(str) // undefined
        var str = 111
      案例一编译后
        var str
        console.log(str) // undefined
        str = 111
      
      案例二
        if (!foo) {
          var foo = 5
        }
        console.log(foo) // 5
      案例二编译后
        var foo //会将if语句中的声明提升
        if (!foo) {
          foo = 5
        }
        console.log(foo) // 5
      
      案例三
        let str = 3
        function fn() {
          var str = str || 5
          console.log(str) // 5
        }
        fn()
      案例三编译后
        let str = 3
        function fn() {
          var str
          str = str || 5 //编译后变量str会被提升，所以等号右边的str是undefined
          console.log(str)
        }
        fn()

      函数提升：
        1、函数的声明和初始化都会被提升。
        2、函数的表达式不会被提升。
        
      案例一
        console.log(fn(3)) // 6
        function fn(num) {
          return num + num
        }
      案例一编译后
        function fn(num) {
          return num + num
        }
        console.log(fn(3)) // 6
      
      案例二
        console.log(fn(3)) // fn is not a function
        var fn = function (num) {
          return num + num
        }
      案例二编译后
        var fn
        console.log(fn(3)) // fn is not a function
        fn = function (num) {
          return num + num
        }
      
      案例三
        foo() // 2
        var foo = function () {
          console.log(1)
        }
        foo() // 1
        function foo() {
          console.log(2)
        }
        foo() // 1
      案例三编译后
        var foo
        function foo() {
          console.log(2)
        }
        foo() // 2
        foo = function () {
          console.log(1)
        }
        foo() // 1
        foo() // 1
          
              `,

      difficulty: '★★★★'
    },
    {
      title: '谈谈你对 this 理解？',
      type: 'javascript',
      result: `
         全局作用域下的普通函数中：this->window    
         全局对象中：this->window   
         定时器中：this->window   
         箭头函数中： this指向外层函数，如果外层没有函数就指向window
         构造函数中：this->当前实例化的对象  
         事件处理函数中：this->事件触发对象 
         在js 中一般理解就是谁调用这个 this 就指向谁
              `,

      difficulty: '★★'
    },
    {
      title: '谈谈你对作用域的理解？',
      type: 'javascript',
      result: `
         作用域是可访问变量的集合或者说范围（例如全局的范围、函数的范围、语句块的范围），在作用域内，变量可访问，在作用域外变量不可访问。

         js是词法作用域，变量的访问范围仅由声明时候的区域决定。
         
         js的作用域可以分为3类
         全局作用域：在全局环境下声明的变量。在任意位置可以访问到。
         函数作用域：在函数内部声明的变量，函数内部和函数内部声明的函数中都可以访问到。访问变量时候先在函数内部找，找不到则在外层函数中找，直到全局作用域，形成“作用域链”。 函数作用域有“变量提升”和“函数声明提升”的特性。
         块级作用域：在语句块声明的变量，使用let和const声明的变量才作用于块级作用域，块级作用域没有变量提升。
              `,

      difficulty: '★★'
    },
    {
      title: '什么是作用域链？如何延长？',
      type: 'javascript',
      result: `
      作用域链：默认情况下，js 代码处于全局作用域（0级），当我们声明一个函数的时候，就会开辟一个局部作用域（1级）。 函数里面也可以声明函数，就会又形成局部作用域（2级）,以此类推就会形成作用域链。
      
      延长作用域链的方法：
        1、try-catch语句的catch块：会创建一个新的变量对象，其中包含的是被抛出的错误对象的声明。
        2、with语句：会将指定的对象添加到作用域链中。
              `,

      difficulty: '★★★★'
    },
    {
      title: '构造函数中的new命令做了什么？',
      type: 'javascript',
      result: `
         new命令的作用，就是执行一个构造函数，并且返回一个对象实例。使用new命令时，它后面的函数调用就不是正常的调用，而是依次执行下面的步骤
           a：创建一个空对象，作为将要返回的对象实例。
           b：将空对象的原型指向了构造函数的prototype属性。
           c：将空对象赋值给构造函数内部的this关键字。
           d：构造函数中如果没有return语句，则将新创建的对象返回。

         也就是说，构造函数内部，this指向的是一个新生成的空对象，所有针对this的操作，都会发生在这个空对象上。构造函数之所谓构造函数，意思是这个函数的目的就是操作一个空对象（即this对象），将其构造为需要的样子。
         
         注意事项：构造函数实际是一个函数，this指向的构造函数创建的实例对象。      
              `,

      difficulty: '★★★'
    },
    {
      title: '构造函数内super函数的作用？',
      type: 'javascript',
      result: `
         在ES6实现继承中会有constructor构造函数，而实现继承的子类构造函数中必须先调用super()方法，此处的super()为父类的构造方法，而如果不调用，浏览器则会报错。报错原因是因为子类没有自己的 this 对象，而是继承父类的 this 对象，然后对其进行加工,而 super
         就代表了父类的构造函数。super 虽然代表了父类 Person 的构造函数，但是返回的是子类 Son 的实例，即 super 内部的this 指的是 Son。      
              `,

      difficulty: '★★★'
    },
    {
      title: '如何实现一个new方法？',
      type: 'javascript',
      result: `
         （1）首先创建了一个新的空对象
         （2）设置原型，将对象的原型设置为函数的 prototype 对象。
         （3）让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
         （4）判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
             
             function myNew(fn, ...args) {
               // 判断参数是否是一个函数
               if (typeof fn !== "function") {
                 return console.error("type error");
               }
               // 创建一个对象，并将对象的原型绑定到构造函数的原型上
               const obj = Object.create(fn.prototype);
               const value = fn.apply(obj, args); // 调用构造函数，并且this绑定到obj上
               // 如果构造函数有返回值，并且返回的是对象，就返回value ;否则返回obj
               return value instanceof Object ? value : obj;
             }    
              `,

      difficulty: '★★★'
    },
    {
      title: '谈谈节流和防抖的实现及场景？',
      type: 'javascript',
      result: `
         防抖：设置一段时间，当用户连续触发事件的时候，此时只会执行一次。
         描述：防抖像电梯关门，进入一个人，则需要等待3秒钟，再进来一个人，则再等待3秒钟，直至没有人进入则关门。
         应用场景：
           1.用户连续点击按钮向服务端发送请求。
           2.实时搜索框。
           3.当浏览器尺寸变化，改变布局等等。

            function debounce(doSome, time) {
             let setT
             return function () {
               clearTimeout(setT)
               setT = setTimeout(doSome, time)
             }
           }
           let func = debounce(doSome, 500)
           
           window.onresize = func
           
           function doSome() {
             console.log('页面size改变了');
           }

         节流：设置一段时间，当用户连续点击的时候，每隔一段时间执行一次。
         描述：节流的作用就是减少事件频率，和防抖最大的区别是节流是每隔一段时间触发，而防抖是防止事件在设定的时间内多次触发。举个例子：之前你的老板要求你上班的12个小时内每个小时都向他汇报工作，后来你把老板打了一顿，老板要求你每隔3个小时向他汇报一次工作，那么后者就做到了节流。
         应用场景：
           1.滚动条滚动
           2.鼠标移动
           3.当浏览器尺寸变化，改变布局等等。

           function throttle(doSome, time) {
             let isOpen = true
             return function () {
               if (isOpen) {
                 doSome()
                 isOpen = false
                 setTimeout(() => {
                   isOpen = true
                 }, time)
               }
             }
           }
           let func = throttle(doSome, 2000)
           window.onresize = func
           function doSome() {
             console.log('页面size改变了');
           }

              `,

      difficulty: '★★★'
    },
    {
      title: '说说你对闭包的理解？闭包使用场景？',
      type: 'javascript',
      result: `
      1、mdn解释：在mdn中关于闭包的解释是一个函数以及其周围环境状态的引用的组合叫做闭包。这里的周围环境指的是词法环境。
      2、闭包形式：闭包的常见表现形式是函数嵌套函数，同时闭包的特点是内部函数可以访问外部函数的作用域，所有闭包的创建是随着函数的创建而被创建。
      3、闭包的特点：外部函数的局部变量不会被垃圾回收机制回收，在闭包中会形成一个独立的空间，闭包中的不会被全局环境污染，同时闭包使用不当也会造成内存泄露。
      4、写一个简单的闭包分析代码
      function fn() {
      let num = 1
      return function () {
      num++
      console.log(num)
      }
      }
      let result = fn()
      result() // 2
      result() // 3
      result() // 4
      
      闭包的常见应用十分广泛：例如常见的防抖，节流函数、定时器，事件回调、一个函数内部返回一个匿名函数、ajax请求、promise等
              `,

      difficulty: '★★★'
    },

    {
      title: '什么是内存泄露？为什么会导致的内存泄漏？',
      type: 'javascript',
      result: `
         内存泄露是指不再用的内存没有被及时释放出来，导致该段内存无法被使用就是内存泄漏
         内存泄漏指我们无法在通过js访问某个对象，而垃圾回收机制却认为该对象还在被引用，因此垃圾回收机制不会释放该对象，导致该块内存永远无法释放，积少成多，系统会越来越卡以至于崩溃


         常见的导致内存泄露
             1、全局变量导致的内存泄露：
             如果在函数内部声明变量时忘记使用var、let或const关键字，那么这个变量就会成为全局变量。全局变量的生命周期是整个应用程序的运行期，即使不再需要它，它也不会被垃圾回收机制回收，从而导致内存泄露。

             2、闭包导致的内存泄露：
            闭包是JavaScript中强大的特性之一，但它也可能导致内存泄露。如果闭包引用了外部函数的变量，并且这个闭包被持续引用，那么即使外部函数执行完毕，它的变量也无法被垃圾回收。特别是当闭包作为回调函数使用时，如果回调函数被频繁创建且长时间存在，就可能造成内存泄露。

             3、定时器未及时清除：
             使用setInterval或setTimeout创建的定时器如果没有被清除（使用clearInterval或clearTimeout），那么即使相关的函数或对象已经不再需要，定时器仍然会存在并占用内存。

             4、DOM的引用没有及时释放：
             如果JavaScript对象持续引用了不再需要的DOM元素（如通过document.getElementById获取的DOM对象），即使该DOM元素已经从DOM树中移除，它也无法被垃圾回收。

             5、事件监听器没有移除：
             如果为DOM元素添加了事件监听器，但没有在适当的时机移除它们（使用removeEventListener），那么即使相关的DOM元素或JavaScript对象不再需要，事件监听器仍然会占用内存。
              `,

      difficulty: '★★★'
    },

    {
      title: '垃圾回收机制都有哪些策略？',
      type: 'javascript',
      result: `
         标记清除法
         垃圾回收机制获取根并标记他们，然后访问并标记所有来自它们的引用，然后在访问这些对象并标记它们的引用…如此递进结束后若发现有没有标记的（不可达的）进行删除，进入执行环境的不能进行删除

         引用计数法
         当声明一个变量并给该变量赋值一个引用类型的值时候，该值的计数+1，当该值赋值给另一个变量的时候，该计数+1，当该值被其他值取代的时候，该计数-1，当计数变为0的时候，说明无法访问该值了，垃圾回收机制清除该对象
         缺点： 当两个对象循环引用的时候，引用计数无计可施。如果循环引用多次执行的话，会造成崩溃等问题。所以后来被标记清除法取代。
              `,

      difficulty: '★★★'
    },

    {
      title: '什么是原型，原型链？',
      type: 'javascript',
      result: `
         原型：每一个 JavaScript 对象（null 除外）在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性，其实就是 prototype 对象。
         原型链：由相互关联的原型组成的链状结构就是原型链。

         如图所示：我们通过new的形式构造一个实例对象（person），每一个实例对象身上都有隐藏的属性__proto__，这是链接实例对象和原型的桥梁，（ __proto__ 就是一条原型链中的一环），通过这种方式我们可以访问原型对象上的属性和方法。由于原型对象本身也是一个对象，它也有__proto__属性，同样它也可以向上查找它的原型属性和方法，这种链式的查找结构就是原型链。
              `,

      difficulty: '★★★★'
    },

    {
      title: 'Javascript如何实现继承？',
      type: 'javascript',
      result: `
         概念：
         一个对象能够访问另一个对象的属性，同时，这个对象还能够添加自己新的属性或是覆盖可访问的另一个对象的属性，我们实现这个目标的方式叫做“继承”。
         
         以构造函数的方式解析继承：
         javaScript通过原型链的方式实现继承。
         
         常见的继承方式：
           原型链继承
           构造函数继承（借助 call）
           组合继承
           原型式继承
           寄生式继承
           寄生组合式继承
              `,

      difficulty: '★★★★'
    }
  ]
}
