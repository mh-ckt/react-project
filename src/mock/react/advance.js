export default {
  biggerTitle: '进阶',
  type: 'react',

  items: [
    {
      title: 'react中的createContext的实现原理?',
      result: `
      基础用法：
        1、createContext用于创建context对象，主要解决react中props跨组件透传的问题。
        2、首先在父组件中使用createContext创建一个context对象，const MyContext = createContext(0);
        3、使用Provider包裹组件，同时需要使用value定义需要传递的参数：
          <MyContext.Provider value={/* 某个值 */}>  
            <DeeplyNestedComponent />  
          </MyContext.Provider>  
        4、在需要接受的子组件中使用useContext接受传递过来的参数：
          import { MyContext } from './MyContext';  
          const value = useContext(MyContext);    

      原理：
        1、context对象中包含两个组件：Provider组件，作用是在组件中注入一个值。
        2、Consumer组件：用于接收Provider传递的值。
        3、当Provider组价中的value发生改变的时候会触发所有的Consumer更新流程。
        4、出于性能的考虑，react提供了useContext的hook，可以用于直接读取context值。
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: '什么是jsx？它的底层实现是什么?',
      result: `
     
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: 'vue和react的区别？',
      result: `
      设计理念：
        1、vue采用的是模版声明式渲染，这使得HTML模版和javascript的代码之间更加清晰和直观，易于理解。
        2、react采用的jsx语法，它是javascript语法的一种扩展，可以很好的融合HTML和javascrit。同时react更加注重组件化思想和函数式编程。
      
      状态管理：
        1、vue采用的是MVVM的设计模式，即响应式系统，即数据发生变化则页面更新，同时页面的变化也会触发数据的更新，vue在状态管理上采用的props和state，同时可以使用props和event的方式进行组件通信，对于层级嵌套比较深的组件可以使用eventBus的方式通信以及vuex进行全局状态管理。
        2、react是也是通过state和props来管理自己的状态，同时对于复杂的状态管理可以采用redux和mobx进行管理。
      
      学习曲线和生态系统：
        1、对于初学者来说，vue的上手更加简单，同时随着vue3的升级，vue的性能和优势也越来越明显。
        2、react的发展更久，其周边的生态和社区更加完善，react的对于大型项目的可扩展性更强。
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: 'vue和react数据绑定的区别？',
      result: `
      1、vue是采用双向数据绑定的，这就意味着数据的变化会触发视图的更新，视图的变化同时也会导致数据的变化，vue是在模版中绑定数据，会自动追踪数据的依赖关系。
      2、react是采用单向数据流，即数据只能从父级流向子级，同时子级不能修改父级的状态，当父级状态发生改变的时候，父级和子级组件都会被重新渲染。当然react也可以实现vue中双向数据绑定，只不过是使用受控组件，这也是react官方推荐使用的，将表单的元素的值保存在react的状态中，并通过事件处理函数更新状态，实现双向数据绑定。
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: 'redux主要解决什么问题？有什么优缺点?',
      result: `
      随着项目的规模越来越大，组件之间的数据共享和数据更新变得越来越复杂，redux的出现主要解决数据共享困难的问题，redux提供一个可以预测的状态容器来储存和管理状态，使得组件之间的状态共享变得统一和简单。
      
      缺点：
        1、redux的api学习曲线比较难，对于初学者需要一定的时间掌握。
        2、对于一些简单的项目，引用redux可以会造成项目的臃肿和复杂，同时不利于后期的维护。     
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: '为什么虚拟DOM会提升性能？',
      result: `
        1、当react中属性和状态发生改变的时候，react都会生成一个新的虚拟DOM树，然后与旧的虚拟DOM树进行比较，这个比较的过程叫做调和，或者叫差异检测，当比对完成之后会计算出最小的DOM操作集合，然后去更新真实的DOM，相对比直接更新真实的DOM，这种操作更加的高效，因为操作DOM的行为是昂贵的，会引发重绘和回流。
        2、使用虚拟DOM可以更好的实现跨平台兼容，因为它可以轻松的在不同环境下渲染出类似的UI。
        3、同时使用虚拟DOM和模块化组件的结合可以使开发者提升开发效率，react中提供了生命周期和钩子，可以使开发者精准的控制组件的渲染和更新的过程。

        注意事项：虽然虚拟DOM在提升性能方面有很多的优势，但是当组件树非常庞大且频繁更新的时候，虚拟DOM的过程将变得相对的昂贵。
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: 'react有哪些优缺点？',
      result: `
      优点：
        1、react采用组件化开发模式，使得开发者可以将ui组件拆分成独立的，复用的组件，这使得开发者节省组件的维护的成本和提升了复用性。
        2、react使用的虚拟DOM技术，这使得极大的减少了对于真实DOM的操作，提升性能。
        3、react同时周边的生态及其繁荣，这也是众多开发者选择react作为开发框架的首选。
        4、跨平台兼容性：React Native使得React能够用于构建移动应用，实现了跨平台开发。
        5、灵活的编程模型：React Hooks的引入进一步简化了组件逻辑，使得代码更加简洁和可维护。

      缺点：
        1、学习曲线：React的API和概念可能对于初学者来说较为复杂，需要一定的学习成本。
        2、大型应用性能问题：在大型应用中，如果组件树过于庞大且频繁更新，React的虚拟DOM比较过程可能会变得相对昂贵，导致性能下降。
        3、状态管理复杂性：在复杂的React应用中，状态管理可能成为一个挑战。虽然Redux等状态管理库可以帮助解决这个问题，但它们也增加了应用的复杂性。
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: '什么是高阶组件？',
      result: `
      高阶组件是一个函数，其接收一个组件作为参数，并返回一个新的组件。这个新的组件会使用你传给它的组件作为子组件。高阶组件的主要目的是重用组件逻辑、增强组件功能以及在不改变原始组件代码的情况下添加额外的功能。
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: '说下自定义hooks怎么封装的?',
      result: `
       1、自定义 Hooks 通常以"use"开头，例如"useForm"或"useTheme"。
       2、自定义hooks的本质是将组件中的重复逻辑提取到可以复用的函数中。常见的如处理表单状态，处理请求等等。
       
       自定义hooks设计的原则：
        1、单一原则：自定义hooks应该是处理单一的逻辑和功能，避免重复的逻辑和功能混入，这边的目的是为了保持其高度的可复用性。
        2、命名原则：常见的以use命名，小驼峰的形式，这样的目的是便于识别和维护。
        3、可配执性：自定义hooks应该提供多种可以配置的选项，以满足不同的场景。
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: '用hooks模拟class里的生命周期?',
      result: `
      1、当useEffect中的依赖项是一个空数组的时候，可以模拟componentDidMount（组件加载完成）。
      2、如果想要模拟componentWillUnmount（组件卸载之前），可以在useEffect的清理函数中实现。
      3、如果要模拟componentDidUpdata（组件更新时），可以在useEffect的依赖项中传入对应的state。
      4、如果要模拟componentWillReceiveProps（当父组件传递新的props的时候调用），可以在useEffect中传入对应的props。
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: 'ref可以作为其他Hooks的依赖项吗?',
      result: `
      可以的，ref的作用是用于访问DOM节点或者组件实例，比如当一个input框发生改变的时候需要执行某些操作，那么可以在useEffect中传入相应的ref，这样当ref的DOM发生变化的时候就可以执行对应的useEffct中的函数，值得注意的是，通常我们在useEffct中传入的state和props，如果使用ref作为依赖项，由于ref并不会造成组件的重新渲染，通常这样做可能会造成不必要的性能开销。
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: '为什么hooks中不能有条件判断?',
      result: `
     
         `,
      type: 'react',

      difficulty: '★★★★'
    }
  ]
}
