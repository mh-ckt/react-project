export default {
  biggerTitle: '进阶',
  type: 'css',
  items: [
    {
      title: '什么是重绘？什么是回流？如何减少？',
      result: `
      解释：
        1、重绘：重绘指的是当元素的样式发生改变的时候并不影响元素在文档流的尺寸，浏览器重新绘制这个元素的过程，比如：元素的背景颜色和自身颜色的变化。
        2、回流：回流指的是元素的尺寸，形状等几何信息发生变化。浏览器需要重新构建渲染树的过程。回流的消耗较大，它涉及到布局的计算，一般回流都会引发重绘。
      减少：
        1、避免重复操作DOM：具体的比如使用文档碎片的方式批量修改DOM，然后一次性的插入页面中，文档碎片存储在内存中，所以不会对DOM有影响（具体参考文档碎片的介绍）。
        2、使用CSS属性：某些CSS属性（如transform和opacity）的修改不会触发回流和重绘，因为这些操作在GPU中执行，不会影响布局和渲染树的构建。
        3、利用事件委托：当需要为多个元素添加相同的事件处理程序时，可以将事件处理程序添加到它们的共同父元素上，而不是分别为每个元素添加。这样可以减少事件监听器的数量，提高性能。
        4、避免布局抖动：尽量在一次操作中完成所有的布局更改，而不是多次修改同一个元素的属性。这样可以减少浏览器的回流和重绘次数。
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: 'css动画如何实现？',
      result: `
      解释：css动画是通过css属性和特定的动画函数来实现html的动画效果，具体的需要自己去尝试。
      属性：transform（如旋转、缩放、移动等）、opacity（透明度）、color（颜色）等。
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: 'transiform和animation的区别？',
      result: `
      功能应用：
        1、transform：主要用于对HTML元素进行2D或3D的转换操作。这包括旋转（rotate）、缩放（scale）、移动（translate）和倾斜（skew）等。例如，transform: rotate(45deg);会将元素旋转45度。
        2、animation：则用于创建动画效果。它允许你定义一系列的关键帧，并在这些关键帧之间平滑地过渡，从而创建出复杂的动画效果。通过animation属性，你可以控制动画的持续时间、延迟、迭代次数等。

      表现形式：
        1、transform：主要关注于元素的静态转换效果，即元素在某一时刻的呈现状态。它不会自动创建时间上的变化或过渡效果。
        2、animation：则强调时间上的变化和过渡效果，通过关键帧之间的平滑过渡来创建动态效果。它可以用来创建复杂的、具有时间线的动画效果。
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: '多行元素文本省略号如何实现？',
      result: `
      
      .text-ellipsis {    
        display: -webkit-box;  // 主要得到WebKit内核浏览器的支持（如Chrome和Safari）
        -webkit-box-orient: vertical;   // 子元素在弹性容器中的布局方向
        -webkit-line-clamp: 3; // 设置显示的行数
        overflow: hidden;  // 确保超出部分被隐藏
        text-overflow: ellipsis;   // 在隐藏部分添加省略号。
      }
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: 'CSS3新特性有哪些？',
      result: `
        1.颜色：新增 RGBA，原本的RGB代表红、绿、蓝三原色的组合，而RGBA在RGB的基础上增加了透明度的控制。
        2.文字阴影：text-shadow
        3.边框： 圆角：border-radius ，边框阴影： box-shadow
        4. 盒子模型：box-sizing
        5.背景：background-size 设置背景图片的尺寸 background-origin 设置背景图片的原点 background-clip 设置背景图片的裁切区域，以”，”分隔可以设置多背景，用于自适应布局
        6.渐变：linear-gradient、radial-gradient
        7.过渡：transition，可实现动画
        8.自定义动画 animate   @keyfrom
        9.在 CSS3 中唯一引入的伪元素是 ：：selection.
        10.媒体查询，多栏布局  @media screen and (width:800px){ … }
        11. border-image
        12.2D 转换：transform：translate(x，y) rotate(x，y) skew(x，y) scale(x，y)
        13. 3D 转换
        14 字体图标   font-face 15 弹性布局 flex
         `,
      type: 'css',

      difficulty: '★★★★'
    },
    {
      title: 'rgba()和opacity的透明效果有什么不同？',
      result: `
        rgba()和 opacity 都能实现透明效果，但最大的不同是 opacity 作用于元素，以及元素内的所有内容的透明度，而 rgba()只作用于元素的颜色或其背景色。设置 rgba 透明的元素的子元素不会继承透明效果
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: 'overflow有哪些属性值？ ',
      result: `
        Visible：默认值。内容不会被修剪，会呈现在元素框之外。
        Hidden：内容会被修剪，并且其余内容是不可见的。 
        Scroll：内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 
        Auto：如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 
        Inherit：规定应该从父元素继承 overflow 属性的值
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: 'css中reset的作用和用途是？',
      result: `
        css中的reset指的的是在开发之前对浏览器的默认样式进行重置，这样做的目的是为了兼容不同的浏览器，防止开发完成后在不同浏览器上的显示差异，常见的reset比如：
          1、取消默认margin，margin: 0;
          2、允许百分比设置应用的高度：html, body { height: 100%;}
          3、去除某些标签的默认样式：比如li标签
         `,
      type: 'css',

      difficulty: '★★★★'
    },
    {
      title: '移动端如何适配不同的屏幕尺寸？ ',
      result: `
        具体参考：https://juejin.cn/post/6953091677838344199#heading-8
         `,
      type: 'css',

      difficulty: '★★★★'
    },

    {
      title: 'overflow如何设置滚动时候不显示滚动条？ ',
      result: `
       .container {
          overflow: auto; /* 或者使用 overflow: scroll; */
          -ms-overflow-style: none; /* IE 和 Edge 浏览器需要添加此样式 */
          scrollbar-width: none; /* Firefox 浏览器需要添加此样式 */
        }
        
        .container::-webkit-scrollbar {
          display: none; /* Chrome 和 Safari 浏览器需要添加此样式 */
        }
         `,
      type: 'css',

      difficulty: '★★★★'
    },
    {
      title: 'em和rem的区别是？',
      result: `
         em和rem都是当对于字体大小的单位，其中em是相对于父元素的font-size大小，rem是相对于根元素的fon-size大小。
         场景：em适用于相对当前元素的父元素调整的，rem适用于调整当前页面的元素的大小进行调整。
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: 'vw和vh的区别是？',
      result: `
         vw是一个相对单位，vw是相对于视口的宽度进行计算的，具体来说1vw相对于视口宽度的百分之一。
         vh也是一个相对单位，vh相对于视口的高度进行计算的，具体的来说1vh相对于视口高度的百分之一。
         `,
      type: 'css',

      difficulty: '★★★'
    },
    {
      title: 'sass和less的区同？',
      result: `
        相同点:
          他们都是动态样式语言，最后通过编译器转化成正常的css文件。
          他们都可以使用嵌套规则，减少重复代码。
          他们都可以定义变量，使用判断语句，同时还可以使用数学运算等等。
          
        不同点：
          他们都可以定义变量，在sass中使用$定义变量，less中使用@定义变量。
          sass是基于Ruby，在服务端做处理的，less是基于javaScript，在客户端做处理的。
          less由于是基于客户端的，所以解析js的速度比sass慢一些。
          sass的功能更加强大，less更容易上手，对于编译环境要求更加宽松。
         `,
      type: 'css',

      difficulty: '★★★'
    }
  ]
}
