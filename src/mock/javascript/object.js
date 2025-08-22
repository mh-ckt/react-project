export default {
  biggerTitle: '对象',
  type: 'javascript',

  items: [
    {
      title: 'javascript动画和css动画有什么区别？',
      type: 'javascript',
      result: `
      （目前动画的实现比较少，后期用到动画再进行总结）
       
        `,

      difficulty: '★★★★'
    },
    {
      title: '面向对象编程和面向函数编程的区别？',
      type: 'javascript',
      result: `
        js中的对象是对于具象世界中事物的一种抽象表达，当我们需要实现某个功能的时候可以把他抽象成一个“对象”，然后一遍一遍的去调用这个对象去完成你想要的功能，所以在面向对象的编程中可以看到数据和逻辑是混在一起的，数据也就是属性，逻辑也就是方法，这也是面向对象的其中一个特点，也就是封装，封装的好处就是只有在实例中才可以访问属性和方法，提高了程序的安全性。当然面向对象还有其他的特点，比如“继承”和“多态”。继承就是子类可以拥有父类的属性和方法，避免了数据的重复定义。多态意味着子类可以拥有新的方法去覆盖父类的共享行为。
        
        与之相对的是函数式编程，函数式编程又叫面向过程，函数式编程的本身是通过一个个函数去分解一个复杂的功能，然后又通过各种组合嵌套实现最终的功能。函数式编程的本质就是一个拼接积木的过程，把一个大的功能通过一个一个个函数拆解最后又拼接在一起。
        `,

      difficulty: '★★★'
    },
    {
      title: '创建对象几种方式？',
      type: 'javascript',
      result: `
         1.  var obj = {}  // 对象的字面量         
         2.  var obj = new Object();  //创建实例对象      
         3.  function Fn() {}    new Fn();     // 构造函数模式 
         4.  Object.create()     // es6新增，使用指定的原型对象和属性创建一个新对象。
         5.  Object.assign()       // 通过复制一个或多个对象来创建一个新的对象。
         6.工厂模式：用一个函数，通过传递参数返回对象。
             function fn(params) {
               var obj = new Object();
               obj.name = params;
               return obj;
             }
              `,

      difficulty: '★★★'
    },
    {
      title: '怎么获取对象上的属性？',
      type: 'javascript',
      result: `
         定义一个拥有自身属性，Symbol属性，原型属性，不可枚举属性的对象
         let hobby = Symbol("爱好");
         let p = Object.create({
           name: "张山", // 在原型上添加name属性
         });
         p.age = 18; // 添加自身属性age
         p[hobby] = "打球"; // 添加Symbol属性
       
         Object.defineProperty(p, "sex", {
           value: "男",
           enumerable: false, // 添加不可枚举属性
         });

         第一种通过 Object.getOwnPropertyNames 可以获取自身和不可枚举属性
         let keys = Object.getOwnPropertyNames(p);
         console.log(keys); //['age', 'sex']
       
         第二种： Object.getOwnPropertySymbols 获取Symbol属性
         let keys = Object.getOwnPropertySymbols(p);
         console.log(keys); // [Symbol(爱好)]
       
         第三种：Object.keys 只能获取自身属性
         let keys = Object.keys(p);
         console.log(keys); //['age']
       
         第四种： for...in  获取自身和原型的属性
         for (let i in p) {
             console.log(i); // age   name
         }
              `,

      difficulty: '★★★'
    },
    {
      title: '检测对象中是否存在某个属性？',
      type: 'javascript',
      result: `
         第一种：使用Object.keys(),拿到对象的所有可枚举属性（只可以判断可枚举属性）
         第二种：使用对象的hasOwnProperty()方法。（无法判断继承属性）
         第三种：使用in关键字。（全能型）该方法可以判断对象的自有属性和继承来的属性是否存在。
         第四种：for...in  判读自身和原型的属性
         第五种：使用Object.getOwnPropertyNames 可以获取自身和不可枚举属性，遍历返回数组判断
         `,

      difficulty: '★★'
    },
    {
      title: '常见的合并对象的方法？',
      type: 'javascript',
      result: `
         es6中函数Object.assign(obj1,obj2)
         扩展运算符 const obj = {...obj1,...obj2}
              `,

      difficulty: '★★'
    },
    {
      title: '如何判断一个对象是不是为空？',
      type: 'javascript',
      result: `
         1.JSON.stringify(obj) === '{}';   // 注意该方法性能较差
         2.Object.keys(obj).length === 0; / /Object.keys 也是只能获取自身属性，不能获取原型属性
         3.obj.hasOwnProperty(id)  //判断是否含有私有属性
              `,

      difficulty: '★★'
    },
    {
      title: '深拷贝和浅拷贝的区别？常见的有那些？如何递归实现深拷贝？',
      type: 'javascript',
      result: `
         浅拷贝，只拷贝第一层的原始类型值，和第一层的引用类型地址。
         深拷贝，拷贝所有的属性值，以及属性地址指向的值的内存空间。
         常见的深拷贝：递归，json.stringify(), json.parse()
         常见的浅拷贝：扩展运算符，Array.concat() ,Object.assign() ,Array.since() ,for...in

         实现深拷贝
          第一步：先判断传入的数据的类型，如果是对象可以使用for in 循环，如果是对象则继续for 循环。
          第二步：设置终止条件，如果当前循环的每一层都不是数组和对象则返回当前的对象。
          function deepClone(any) {
            let type = Object.prototype.toString.call(any)
            if (type === "[object Object]") {
              let o = {}
              for (let i in any) {
                o[i] = deepClone(any[i])
              }
              return o
            }
            if (type === "[object Array]") {
              let a = []
              for (let i = 0; i < any.length; i++) {
                a[i] = deepClone(any[i])
              }
              return a
            }
            return any
          }
          deepClone(obj)
        `,

      difficulty: '★★'
    },
    {
      title: '如何判断两个嵌套对象相等？',
      type: 'javascript',
      result: `
         function deepEqual(origin, target) {
           if (typeof target !== "object" || typeof origin !== "object") {
             return origin === target;
           }
       
           // 当前是对象的情况
           if (Object.prototype.toString.call(target) === "[object Object]") {
             if (Object.keys(target).length !== Object.keys(origin).length) {
               return false;
             }
             for (let id in target) {
               if (!deepEqual(origin[id], target[id])) return false;
             }
           }
       
           // 当前是数组的情况
           if (Object.prototype.toString.call(target) === "[object Array]") {
             if (target.length !== origin.length) {
               return false;
             }
             for (let id of Object.keys(target)) {
               if (!deepEqual(origin[id], target[id])) return false;
             }
           }
           return true;
         }
              `,

      difficulty: '★★★'
    },
    {
      title: 'js中如何监听对象的属性改变？',
      type: 'javascript',
      result: `
         第一种：使用es5中Object.defineProperty(obj, id, { 配置项 })，在配置项的set方法中可以监听属性的变化。
         对于嵌套对象可以递归遍历监听变化。
         第二种：使用es6中的Proxy代理对象的方式实现对于对象中第一层属性值的监听：
              `,

      difficulty: '★★'
    }
  ]
}
