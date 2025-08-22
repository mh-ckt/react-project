export default {
  biggerTitle: 'DOM',
  type: 'javascript',
  items: [
    {
      title: '元素拖动如何实现？原理是什么？',
      type: 'javascript',
      result: `
      实现元素的拖动功能主要依赖于JavaScript的事件监听和处理机制，以及CSS样式的动态调整。（具体的可以后面有时间再尝试）
        `,
      difficulty: '★★★'
    },
    {
      title: 'js中事件绑定和普通事件的区别是什么？',
      type: 'javascript',
      result: `
      普通事件：
        普通事件是直接触发事件，当一个DOM元素被添加多个相同事件的时候，只会触发一次。例如：
        var btn = document.getElementById("btn");
        btn.onclick = function(){
          alert("你好111");
        }
        btn.onclick = function(){
          alert("你好222");
        }
        输出的结果只会有<你好222>，这是由于一个处理器同一时间只能指向唯一的对象，虽然上面的btn对象绑定了两个事件，其结果会被覆盖。
      
      事件绑定：
        事件绑定对于多次绑定的事件对象，都会被触发。例如：
        var btn = document.getElementById("btn");
        btn.addEventListener("click",function(){
          alert("你好111");
        },false);
        btn.addEventListener("click",function(){
          alert("你好222");
        },false);
        运行结果会依次弹出你好111，你好222的弹出框。
        `,

      difficulty: '★★★'
    },
    {
      title: '延迟加载的方式有哪些？',
      type: 'javascript',
      result: `
      方式一：可以使用图片懒加载，具体的做法就是一开始对图片的src设置为一个占位图片，然后将真实的地址赋值给data-src或者其他自定义属性中，当图片的图片进入视口时替换src。
      方法二：具体在vue和react的项目中可以结合实际请求使用路由懒加载或者组件懒加载等。
      方式三：可以在script标签中使用async和defer属性，async和defer属性都是用于异步加载js文件。
        `,

      difficulty: '★★★'
    },
    {
      title: `js中各种位置，比如clientHeight、scrollHeight、offsetHeight区别？`,
      type: 'javascript',
      result: `
      clientHeight：clientHeight属性返回元素的内部高度（以像素计），包括填充（padding），但不包括水平滚动条（如果可见）、边框（border）和外边距（margin）。
      scrollHeight：scrollHeight属性返回元素的总高度（以像素计），包括填充（padding）、溢出内容（overflow）和边框（border）。
      offsetHeight：offsetHeight属性返回元素的布局高度（以像素计），包括填充（padding）、边框（border）、滚动条（如果可见）和外边距（margin）。
        `,

      difficulty: '★★★'
    },
    {
      title: '如何在原生中更改dom元素的css属性？',
      type: 'javascript',
      result: `          
         const box = document.getElementById('box')
         box.style.color = 'red'  // 设置单独一个css属性
         box.style = 'height: 100px; width: 100px;  background: red;'  // 设置一个或者多个css属性
         box.style.cssText = ' height: 100px; width: 100px;  background: red;' // 设置一个或者多个css属性
              `,
      difficulty: '★★'
    },
    {
      title: '常见的DOM事件对象有哪些？',
      type: 'javascript',
      result: `
         onresize 事件：onresize 事件会在窗口或框架被调整大小时发生。
         window.onresize = () => { console.log('浏览器窗口改变了');   }

         onload 事件：onload 事件会在页面或图像加载完成后立即发生。
           window.onload = function () {  console.log('页面加载完成');  };

         onunload 事件：onunload 事件在用户退出页面时发生。
           <body onunload="SomeJavaScriptCode">  //在HTML中
           window.onunload=function(){SomeJavaScriptCode};  //在JS中

         onscroll 事件：onscroll 事件在元素滚动条在滚动时触发。
           <div  onscroll="scrollChange()" />  //在HTML中
           box.onscroll = function () {  console.log('当前元素滚动了'); }; //在JS中
              `,
      difficulty: '★★★'
    },
    {
      title: '什么是进程和线程？',
      type: 'javascript',
      result: `
         进程
         简单的理解就是程序运行的内存空间。
         每个程序至少有一个进程，进程之间相互独立，即使需要通信也需要双方同意。
         解释：比如手机中微信和支付宝所运行的内存空间是互相不影响的，微信卡死了，支付宝仍然可以使用

         线程
         有了进程就需要运行程序，那么线程的作用就是运行代码。
         一般情况一个进程中包含多个线程，进程开启后会创建多个线程来运行代码。
              `,
      difficulty: '★★★'
    },
    {
      title: '谈一谈js的事件循环机制？',
      type: 'javascript',
      result: `
         JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。而渲染主线程承担着诸多的工作，渲染页面、执行 JS 都在其中运行。如果使用同步的方式，就极有可能导致主线程产生阻塞，从而导致消息队列中的很多其他任务无法得到执行。这样一来，一方面会导致繁忙的主线程白白的消耗时间，另一方面导致页面无法及时更新，给用户造成卡死现象。
         所以浏览器采用异步的方式来避免。具体做法是当某些任务发生时，比如计时器、网络、事件监听，主线程将任务交给其他线程去处理，自身立即结束任务的执行，转而执行后续代码。当其他线程完成时，将事先传递的回调函数包装成任务，加入到消息队列的未尾排队，等待主线程调度执行。
         在这种异步模式下，浏览器永不阻塞，从而显大限度的保证了单线程的流畅运行。
              `,

      difficulty: '★★★'
    },
    {
      title: '为什么js会阻碍渲染？',
      type: 'javascript',
      result: `
         JS之所以阻塞渲染，是因为JS执行与渲染相关任务都在争夺主线程有限的资源。
         当JS执行时间过长，渲染相关任务就没时间执行了。

         阻塞案例：

           <h2 id="hello">hello</h2>
           <button onclick="change()">点击英文变中文</button>
           
           const hello = document.getElementById('hello')
           //制造一个死循环
           function prevent(newVal) {
             var start = Date.now()
             while (Date.now() - start < newVal) { }
           }
           function change() {
             hello.innerHTML = '你好'
             prevent(3000)
           }
              `,

      difficulty: '★★★'
    },
    {
      title: 'script标签中defer和async的区别？',
      type: 'javascript',
      result: `
      正常的javascript文件是如何加载的？
          1、浏览器会从上到下，从左到右对HTML文档进行解析，当遇到script标签的时候会停止解析HTML，对script标签进行加载和执行。
          2、对于内联JavaScript（即直接写在<script>标签中的代码），浏览器会立即执行它。对于外部JavaScript（即使用src属性指向的外部.js文件），浏览器会发送一个HTTP请求到服务器，以获取该文件。所以在js文件下载的期间会阻塞HTML的解析，同时你会看到页面空白的情况。
      
      使用async异步加载？
          1、async的加载是异步的，相对于正常的javascript文件来说，async的加载是一开始就会下载，而不是等待解析到javascript文件时才去下载，同时async的执行会在javascript文件下载完成后立即执行，此时很有可能HTML元素并没有渲染完成。总结就是async是异步加载同时是加载完后立即执行，这样的不好地方是如果当前script中有对于DOM的修改，可能会出问题。所以适用于第三方脚本使用，不依赖当前的DOM的情景。

      使用defer延迟执行？
         1、defer是也是异步加载的，但是和async不同的是defer不是加载完js脚本后立即执行的，而是等待当前的DOM执行完成后再执行js脚本，所以defer更加适用当前script中DOM有修改的情况。
              `,

      difficulty: '★★★'
    },
    {
      title: '什么是事件冒泡，什么是事件捕获？如何阻止事件冒泡？',
      type: 'javascript',
      result: `
        事件冒泡指的是事件由内向外的事件传播，直到根元素，而事件捕获与冒泡相反，是由外向内进行事件的传播。事件通常是先捕获再冒泡，如果不设置，默认情况下事件是在冒泡阶段开始触发。
        
        addEventListener()方法是一个监听器，用于监听事件，具体用法如下：
        addEventListener(event, function, useCapture)
        参数 event 是必须的，表示监听的事件，例如 click, touchstart 等，就是之前不加前缀 on 的事件。
        参数 function 也是必须的，表示事件触发后调用的函数，可以是外部定义函数，也可以是匿名函数。
        参数 useCapture 是选填的，填true或者false，用于描述事件是冒泡还是捕获，true表示捕获，默认的false表示冒泡。
        
        阻止冒泡：
          第一种：event.stopPropagation();
          第二种：return false;
          第三种：event.preventDefault();
              `,

      difficulty: '★★★'
    },
    {
      title: '如何让事件先冒泡后捕获？',
      type: 'javascript',
      result: `
        根据w3c标准，应先捕获再冒泡。若要实现先冒泡后捕获，给一个元素绑定两个addEventListener，其中一个第三个参数设置为false（即冒泡），另一个第三个参数设置为true（即捕获），调整它们的代码顺序，将设置为false的监听事件放在设置为true的监听事件前面即可。
              `,

      difficulty: '★★★'
    },
    {
      title: '什么是事件委托？',
      type: 'javascript',
      result: `
        事件委托就是将子集的事件委托给父级处理。
        优点：
        减少了事件的绑定，减少了内存消耗。
        为动态添加的元素绑定事件
        缺点：
        部分事件，如 focus、blur 等无冒泡机制，所以无法委托。
        事件委托有对子元素的查找过程，委托层级过深，可能会有性能问题
        频繁触发的事件如 mousemove、mouseout、mouseover等，不适合事件委托
        事件委托的实现案例：
        <ul>
              <li>香蕉</li>
              <li>苹果</li>
              <li>鸭梨</li>
        </ul>

        const li = document.querySelectorAll("li");
        const ul = document.querySelector("ul");
          //不使用事件委托
          for (let i = 0; i < li.length; i++) {
            li[i].onclick = function (e) {
              ul.removeChild(e.target);
            };
          }
          // 使用事件委托
          ul.onclick = function (e) {
            ul.removeChild(e.target);
          };
              `,

      difficulty: '★★★'
    }
  ]
}
