export default {
  biggerTitle: '逻辑题',
  type: 'javascript',

  items: [
    {
      title: '0.1+0.2为什么不等于0.3？解释下原理？',
      type: 'javascript',
      result: `
      这是由于0.1和0.2在转换成二进制的过程中会有无限的二进制位，而计算机的存储进制位是有限的，所以在存储的过程中只是存储了他们的一个近似值，这样比较的时候就会出现精度丢失的问题。
        `,

      difficulty: '★★★'
    },
    {
      title: '如何找出字符串中出现最多的字符？',
      type: 'javascript',
      result: `
        第一步：声明一个全局变量对象字面量，遍历当前的字符串，判断当前的字符中的每一个字符是否存在当前的字面量的keys中，如果存在则当前的字符进行自增1，如果不存在则赋值默认为1，这样可以获取一个新的对象，对象中存储每一个字符出现的次数。
        let str = "aaabbbbacccdde";
              let obj = {};
              for (let i = 0; i < str.length; i++) {
                if (Object.keys(obj).includes(str[i])) {
                  obj[str[i]]++;
                } else {
                  obj[str[i]] = 1;
                }
              }
              console.log(obj); // {a: 4, b: 4, c: 3, d: 2, e: 1}
        第二种：拿到对象后，通过Object.values()的方式取出当前value组成的数组，然后通过Math.max()函数取出最大的数，再用for..in遍历当前的对象，通过value去查找key。
        // 第一种
              let obj = { a: 4, b: 4, c: 3, d: 2, e: 1 };
              for (let key in obj) {
                if (obj[key] === Math.max(...Object.values(obj))) {
                  console.log(key); // a,b
                }
              }

              // 第二种
              var max = 0;
              let num = "";
              for (var key in obj) {
                if (max < obj[key]) {
                  max = key;
                  num = obj[key];
                }
              }
              console.log({ [max]: num }); //{a: 4}
         `,

      difficulty: '★★★'
    },
    {
      title: '取出一段url的参数重新组合成对象中的key和value的形式？',
      type: 'javascript',
      result: `
        案例如下：let url = "https://google.com?id=123&searchKey=word";  转化成  let newUrl = "https://google.com?{'id':'123','searchKey':'word'}";

        第一步：对当前的url进行截取，通过indexOf方法查找到？的下标，然后截取？后面的字符串。
        第二步：对截取的字符串通过split进行分割，分割后组成新的数组，遍历当前的数组，对item也通过split进行分割，这样就取到了字符串中的key和value，新建一个全局的字面量对象，通过赋值的形式将key对应的value存在这个对象中。
        let url = "https://google.com?id=123&searchKey=word";
          // let newUrl = "https://google.com?{'id':'123','searchKey':'word'}";
          let valid = url.slice(url.indexOf("?") + 1);
          console.log(valid);
          let obj = {};
          valid.split("&").forEach((item) => {
            let key = item.split("=")[0];
            let value = item.split("=")[1];
            obj[key] = value;
          });
          console.log(obj);
        `,

      difficulty: '★★★'
    }
  ]
}
