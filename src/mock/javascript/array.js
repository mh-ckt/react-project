export default {
  biggerTitle: '数组 && 字符串',
  type: 'javascript',
  items: [
    {
      title: '如何去除字符串中的首尾空格？',
      type: 'javascript',
      result: `
      第一种：使用trim()函数，最简单的方式。
      第二种：如果是去除其他特定的字符，使用replace函数：例如；
        let str = '---Hello, World!---';  
        str = str.replace(/^\-+|\-+$/g, ''); // 去除首尾的'-'字符  
        console.log(str); // 输出: 'Hello, World!'
                `,
      difficulty: '★'
    },
    {
      title: '字符串常用的方法有哪些？',
      type: 'javascript',
      result: `
           常见的如下：
           去除字符串的空格：trim(),trimEnd(),trimStart()
           截取字符串：substr(),substring(),slice()
           转换大小写：toLowerCase(),toUpperCase()
           替换字符串：replace(),  replaceAll()
           转换成数组：split()
                `,
      difficulty: '★'
    },
    {
      title: '如何判断一个数组？',
      type: 'javascript',
      result: `
         ES5中数组方法,返回布尔值 ：Array.isArray(arr)
         用 instanceof 判断，返回布尔值：arr instanceof Array;  
         使用 constructor 判断
             arr.constructor === Array;
             arr.constructor.toString().indexOf("Array") > -1;
         使用万能判断法：Object.prototype.toString.call(a) === "[object Array]"
              `,
      difficulty: '★'
    },
    {
      title: '数组自身常用的方法？',
      type: 'javascript',
      result: `
         push（）；增
         该方法可以向数组的末尾添加一个或者多个元素，并且返回新的长度
         可以将要添加的元素作为方法的参数传递，这些元素将会自动添加到数组的尾部。
   
         pop（）；删
         该方法可以删除我们数组的最后一个元素，并且将被删除的元素作为返回值
   
         unshift（）；增
         向数组的开头添加一个或者多个元素，索引会依次调整,并返回新的长度。
   
         shift（）；删
         可以删除数组的第一个元素，并将被删除的元素作为返回值
   
         splice(index, howmany, item1, ....., itemX)； 修改 
         从第index个下标位置开始删除，一共删除howmany个;第三个到第n个参数可选，表示在删除的位置添加新元素,可以添加多个。
         会改变原来的数组，返回的是当前删除的数组。
   
         indexOf()；查
         用于查找数组中的元素 查到返回下标 查不到返回-1 
         当数组中有多个相同的元素只会返回第一个元素的下标
   
         includes()；查
         用于查找数组中的元素 查到返回true 查不到返回false ，这是es6新增的方法
   
         slice(startIndex，endIndex)； 截取
         截取数组的元素，返回截取后的数组，不会改变原数组。 
         通常传入两个参数，分别代表截取数组的开始位置和结束位置,包含起始下表，不包含结束下标。
         传入一个参数，代表从数组的当前位置到结束位置全部截取。
   
         reverse()； 翻转
         调换数组中每个元素所在的位置   返回翻转后的数组
   
         join()；转换
         数组转化为字符串的方法（split将字符串转化成数组）
              `,
      difficulty: '★'
    },
    {
      title: '遍历数组常见的方法？',
      type: 'javascript',
      result: `
         1.最传统方法 for循环
         2.forEach
         3.map 
         4.filter
         5.find && findIndex
         6.some && every
         7.for..of 
         8.reduce()
              `,
      difficulty: '★'
    },
    {
      title: '常见的数组去重的方法？',
      type: 'javascript',
      result: `
         常见的有三种。
         第一种：利用es6中的set数据结构直接去重，set中不包含重复的元素，然后使用Array.from将set结构转换成数组。
         第二种：利用indexOf或者includes去判断当前项的下标是否和等于当前元素的下标，如果相等则push进新数组。
         第三种：利用传统的双for循环，进行排序去重，如果相等第一项和第二项，则使用splice删除第二项。
              `,
      difficulty: '★'
    },
    {
      title: '多维数组如何扁平化去重？',
      type: 'javascript',
      result: `
          第一种：利用flat函数，es2019提出的方法。
          flat方法哟用于拉平嵌套的数组   flat方法中可以传入一个整数，表示拉平的层数，默认是1，使用infinity关键字作为参数表示无论嵌套多少层都可以转换成一组数组，flat方法不会改变原数组。
          let newArr = arr.flat(3).reduce((pred, item, index, arr) => {
              if (arr.indexOf(item) === index) {
                pred.push(item);
              }
              return pred;
            }, []);

          第二种：利用toString函数。
          let newArr = arr.toString().split(",");
            for (let i = 0; i < newArr.length; i++) {
              for (let J = i + 1; J < newArr.length; J++) {
                if (newArr[i] === newArr[J]) {
                  newArr.splice(J, 1);
                  J--;
                }
              }
            }
            
          第三种：利用递归。
          let a = []; //存放结果
            function removeArray(arr) {
              for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                  //判断是否是数组
                  removeArray(arr[i]);
                } else {
                  a.push(arr[i]);
                }
              }
            }
            removeArray(arr);
            let newArr = [...new Set(a)];

              `,
      difficulty: '★★★★'
    }
  ]
}
