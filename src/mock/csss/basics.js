export default {
  biggerTitle: '入门',
  type: 'css',

  items: [
    {
      title: 'css中calc属性的作用是什么，主要解决什么问题？',
      result: `
       作用：calc可以用于动态计算长度和大小的值，它允许你使用数学表达式中加减乘除进行计算。
       解决问题：
        1、适配不同屏幕尺寸：可以根据窗口的大小动态调整元素的位置和大小。
        2、响应式设计：比如媒体查询是动态调整元素的大小，实现更加细致的响应式设计。
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: 'css中选择器的优先权？css的权重如何计算？',
      result: `
      选择器优先权：选择器的优先权指的是当前多个样式规则应用于同一元素时，最终那个规则生效取决于他的权重。
      
      常见的样式规则有如下几种：
      内联样式（直接在标签上写样式，例如：<div style='font-size:16px'></div>）权重是1000
      内部样式（在body中调用样式，例如：class="main"）
        1、在内部样式中，ID选择器的权重是100，
        2、类选择器，属性选择器和伪类选择器的权重都是10 
        3、元素选择器和伪元素选择器的权重都是1
        4、通配符、子选择器、相邻兄弟选择器和一般兄弟选择器：这些选择器的权重为0，不会增加权重。
        5、如果在属性的后面加一个！important，则表示优先权最高。
      外部样式（额外建立一个CSS文件夹,通过link的方式引入，例如：<link type='text/css' href='css/web.css'>）
      优先级：内联样式 > 内部样式 > 外部样式
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: 'css中哪些属性可以继承，哪些不可以继承？',
      result: `
       大多数和文本字体相关的属性都是可以继承的：
          1、color、font-size、font-style、font-weight、line-height
          2、text-align、text-indent、visibility、list-style、zoom
       大多数和布局盒模型相关的属性都是不可以继承的：
          1、width、height、margin、padding、border、float、display
          2、position、overflow、babckground、box-shadow
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: 'css的基本语句构成是？css的选择符有哪些？',
      result: `
      css基本语句有两部分构成：第一部分是选择器，下面有详细介绍。第二部分是声明块（声明块是{},由属性和属性值构成：比如{color: red;}）
      选择器：
        1、元素选择符 p { color:red; }
        2、类选择符： .myClass { background-color: yellow; }
        3、id选择符：#myID { font-size: 20px; }
        4、属性选择符： input[type="text"] { border: 1px solid black; }
        5、伪类选择符：a:hover { color: blue; }
        6、后代选择符：div p { margin-top: 10px; }
        7、子元素选择符：div > p { color: green; }
        8、相邻元素选择符：div + p { text-indent: 2em; }
        9、分组选择符： 分组选择符（,）例如：h1, h2, h3 { color: purple; }
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: '如何画出0.5px的线条？',
      result: `
      /* 第一种 */
      .box {
        border-bottom: 1px solid red;
        transform: scaleY(0.1);
      }
    
      /* 第二种 */
      .box {
        position: relative;
      }
      .box::after {
        position: absolute;
        content: "";
        background-color: red;
        height: 0.5px;
        width: 100%;
      }
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: '什么是浮动？浮动引起什么问题？如何解决？',
      result: `
       浮动：当一个元素设置浮动的时候，它会脱离正常的文档流，浮动元素向左或者向右排列。浮动后面的元素会替换浮动元素的位置。（标准流：标准流指的是浏览器渲染元素时的默认状态，浏览器会根据块状元素和行内元素进行不同的排列，块状元素独占一行，行内元素则在同一行内排列。）

       浮动引起的问题：
          1、父元素高度塌陷：浮动元素默认是脱离正常文档流的，所以当子元素浮动的时候，父元素如果没有设置高度会出现高度塌陷的问题。
          2、元素重叠。
          3、文字环绕问题。

       清除浮动：
          1、在父级元素后面添加一个伪元素，例如：.parent::after {  content: "";  display: table;  clear: both; }
          2、给父级元素设置高度：可以解决父元素高度塌陷的问题。
          3、使用BFC（Block Formatting Context）清除浮动：通过设置元素的某些属性（如overflow: hidden;、display: flow-root;等），可以使其成为一个BFC，从而清除浮动。
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: 'CSS引入的方式有哪些?link和@import的区别是?',
      result: `
        css中引入外部的css文件的方式通常有两种，一种是link，一种是@import，他们的用法如下：
        <link href="./a.css" rel="stylesheet" />

        <style type="text/css">
          @import url("./b.css");
        </style>
        
        区别：
        link是HTML提供的引入css的方式，link标签不光用于引入css还可以定义rel连接属性等，@import就只能加载CSS。
        link标签引入的css在页面加载的时候就会被加载，而@import引入的css是等待页面全部加载完成后才去加载。
        link本身是标签，所有可以通过js去控制dom元素的样式，而@import不可以。
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: '怎么让chrome浏览器支持12px以下的字体？',
      result: `
        display:inline-block;
        -webkit-transform:scale(0.5);
        transform: scale(0.5);
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: '标准盒模型和IE盒模型的区别？',
      result: `
        CSS3 中的盒模型有以下两种：标准盒模型、IE（替代）盒模型。
        两种盒子模型都是由 content + padding + border + margin 构成，其大小都是由 content + padding + border 决定的，但是盒子内容宽/高度（即 width/height）的计算范围根据盒模型的不同会有所不同：
        标准盒模型：只包含 content 。
        IE（替代）盒模型：content + padding + border 。
        可以通过 box-sizing 来改变元素的盒模型：
        box-sizing: content-box ：标准盒模型（默认值）。
        box-sizing: border-box ：IE（替代）盒模型。
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: '什么是BFC？',
      result: `
        块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
        简单来说就是设置了BFC的元素就形成独立的区域，BFC的中内部元素的渲染不会影响到外部元素，一个元素只能存在于一个BFC空间

        形成BFC的条件（常见）
        浮动元素flort 不为 none
        绝对定位元素 position 为 absolute 或者 fixed
        块级元素 overflow 不是 visible 或者 clip
        行内块元素 display 为 inline-block

       
        场景一：避免两个相邻的元素外边距重叠，解决办法：将其中一个盒子外面添加一个BFC容器。

        场景二：避免父元素高度塌陷，解释：父元素的高度是子元素撑开的，当子元素设置浮动的时候，子元素形成了一个BFC元素，又由于BFC元素会形成独立的区域，此时浮动的子元素会脱离父元素的文档流。解决方案有很多种，其中一种就是可以将父元素设置成BFC容器，给父元素设置overflow：hidden。

        场景三：阻止元素被浮动元素覆盖，这个场景和上面的类似，都是浮动引起的，解决办法有很多，其中最简单的就是将另一个盒子也设置浮动，让两个盒子都处于BFC中。
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: 'position属性有哪些？',
      result: `
        静态定位（static）
          position的默认值。
          设置了 position:static 的元素按照标准流进行布局。
          设置 top，bottom，left，right 等属性无效。

        相对定位（relative）
          相对定位是相对元素的原本位置进行定位。
          不会脱离标准流。
          可以使用 top，bottom，left，right等属性。

        绝对定位（absolut）
          绝对定位是相对于最近一层有定位元素的父级进行定位，如果没有就相对视口进行定位。
          绝对定位会脱离标准流。
          可以使用 top，bottom，left，right等属性。

        固定定位（fixed）
          固定定位是相对于视口进行定位。
          固定定位会脱离标准流。
          可以使用 top，bottom，left，right等属性。
          IE6不支持固定定位；

        粘性定位（sticky）
          粘性定位是基于用户的滚动位置进行定位。
          一般粘性定位开始会根据滚动条滚动，当滚动到设定的区域，将不会滚动，固定在那里。
          粘性定位会脱离标准流。
          可以使用 top，bottom，left，right等属性。
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: '常见的伪类和伪元素有哪些？',
      result: `
        伪类一般用于设置元素的状态。一般用单个冒号表示。
          :active  比如鼠标按下不松
          :hover  鼠标滑过
          :focus  元素获取焦点，一直保持的状态（与active的区别是active松开鼠标就状态消失，focus会直到焦点消失后状态才会消失）
          :first-child  匹配当前元素的第一个元素。
          :last-child  匹配当前元素的最后一个元素。
          :nth-child(2)  匹配当前元素的第几个元素。
          :only-child  匹配父元素中唯一子元素。
          :read-only 伪类选择器,匹配每个设置只读属性的元素。

        伪元素用于设置元素的特定部分或者样式。它本身是基于元素的抽象，并不存在文档中。
          ::first-line用于向文本的首行设置样式。
          ::before用于在元素之前插入新的内容。
          ::after用于在元素之后插入新的内容。
          ::selection用于元素中用户选中的部分（鼠标或者其他设备选中的部分）。
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: 'css中隐藏滚动条的属性是？',
      result: `
        /* 隐藏 Chrome、Safari 和 Opera 的滚动条 */
        .example::-webkit-scrollbar {  display: none;}

        /* 隐藏 IE、Edge 和 Firefox 的滚动条 */
        .example {  -ms-overflow-style: none;  /* IE and Edge */  scrollbar-width: none;  /* Firefox */}
         `,
      type: 'css',

      difficulty: '★★★'
    }
  ]
}
