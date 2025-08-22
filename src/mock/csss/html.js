export default {
  biggerTitle: 'HTML',
  type: 'css',

  items: [
    {
      title: '标签上的title和alt属性的区别是？',
      result: `
        1、title主要为元素提供提示信息，设置了title的元素当鼠标悬停在上面的时候会出现设置的title信息。主要用于对于元素进行解释补充或者描述等。
        2、alt属性一般用于图片的替换文本，当图片的地址没有正确显示的时候，这些替代文本会显示。同时alt属性还有利于搜索引擎识别图片内容，提供图片的搜索排名。
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: '行内元素有哪些？块级元素有哪些？',
      result: `
         行内元素： span、a、img、input、select、textarea（多文本输入）
         块级元素： div、p、strong、h1、ul、li、header、footer、nav、section、hr等等。
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: 'xhtml和html的区别？',
      result: `
        1、html是一种超文本标记语言，常用于浏览器的中页面的显示。xhtml是一种可扩展的xml标记语言。
        2、html的语法相对xhtml更加松散，比如可以属性不区分大小写，可以使用空标签，属性可以不加引号。
        3、总体来说两者语法有所重叠，xhtml的语法相对html更加严格。
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: '对于Web的标准以及W3C的理解和认识？？',
      result: `
        1、web标准覆盖了html、css、javascript等方方面面，为web开发者提供明确的方向和指导，同时web标准的制定可以促进不同浏览器厂商的信息共享和流通。
        2、w3c（万维网联盟），是致力于制定和推广web标准的机构。
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: 'html5的特征有哪些？',
      result: `
          一、html5增加了很多语义化的标签，比如<header/> <footer/> <section/><article/>等。
          二、增加了对于音频和视频的支持，比如通过<audio>和<video>标签不需要借助第三方插件。
          三、增强的表单控件：HTML5为表单提供了更多的输入类型，如日期选择器、颜色选择器、范围滑块等，以及表单验证功能，使得表单更加易用和灵活。
          四、Canvas绘图：HTML5的<canvas>元素允许开发者使用JavaScript绘制2D和3D图形，实现各种交互式和动态效果。
          五、本地存储：HTML5引入了Web Storage（包括localStorage和sessionStorage）和IndexedDB等本地存储技术，使得网页和应用程序能够在用户设备上存储数据，减少对服务器的依赖，提高性能和响应速度。
          六、拖放API：HTML5的拖放API使得用户可以在网页上拖放元素，为创建交互式界面提供了便利。
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: 'Doctype的作用？严格模式和混杂模式如何区分？',
      result: `
      作用：DOCTYPE是HTML中的一种标准通用标记语言的文档类型声明，它的主要作用是告诉浏览器或解析器应该使用哪种文档类型定义（DTD）来解析文档。DOCTYPE的存在对于确保页面正确显示和避免怪异模式至关重要。

      严格模式：
        1、浏览器会按照W3C标准对网页进行解析和渲染。
        2、在盒模型中，元素的宽度和高度会包括内容、内边距和边框，符合标准盒模型。
        3、元素的布局和定位会按照标准规则进行处理。
        4、浏览器会更严格地遵循标准的CSS规范和行为。
      
      混杂模式：
        1、浏览器会尝试向后兼容旧版本的浏览器渲染方式，可能导致一些非标准行为。
        2、在盒模型中，元素的宽度和高度可能只包括内容，不包括内边距和边框，符合怪异盒模型。
        3、元素的布局和定位可能会按照旧版本浏览器的渲染规则进行处理。
        4、浏览器会尽可能地兼容旧版本的CSS和HTML代码，使得一些旧网页能够正常显示。
         `,
      type: 'css',

      difficulty: '★★★★'
    },
    {
      title: 'HTML5中input的type属性有哪些？',
      result: `
        text：默认的输入类型，用于单行文本输入。
        password：用于密码输入，输入的内容会以星号或圆点显示，保护密码的安全性。
        email：用于输入电子邮件地址，会自动验证输入是否符合电子邮件格式。
        number：用于输入数值，可以限制用户输入为数值类型。
        date：创建一个日期选择框，允许用户选择日期。
        checkbox：创建一个复选框，用户可以选择或取消选择一个选项。
        radio：创建一个单选按钮，用户可以从一组选项中选择一个。
        file：创建一个用于上传文件的选择框，允许用户选择文件并将其上传到服务器。
        range：创建一个滑动条，用户可以在指定范围内选择值。
        url：用于输入网址，会自动验证输入是否为有效的URL格式。
        tel：用于输入电话号码。
        此外，HTML5还引入了一些其他的type属性值，如search（用于搜索字段）、color（用于颜色选择器）、submit（用于提交表单）、reset（用于重置表单）、image（用于定义图像形式的提交按钮）、hidden（用于隐藏输入字段）等。
         `,
      type: 'css',

      difficulty: '★★'
    },
    {
      title: 'HTML5新增了那些标签？',
      result: `
        header: 功能：header标签定义页面的页眉信息。
        nav:定义导航链接
        article: 功能：定义一个独立的内容。
        footer:功能：用来定义页尾。
        session:功能：定义网页的中的“区块”
        aside:功能：aside标签定义其所处内容之外的内容。
        datalist:datalist标签用来定义选项列表
         `,
      type: 'css',

      difficulty: '★★★'
    }
  ]
}
