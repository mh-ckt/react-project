export default {
  biggerTitle: '入门',
  type: 'react',

  items: [
    {
      title: 'useReducer和useState和useRef的区别?',
      result: `
      useState的作用：
        1、useState是react函数组件中用于存储组件局部状态的hook，可以用于生成响应式数据。
        2、useState接收一个初始化状态变量，同时返回的数组中包含了状态变量和更新状态变量的函数。通过设置函数更新状态变量，同时组件会重新渲染。

      useRef的作用：
        1、useRef中有两个作用，第一个是用于访问当前的组件实例或者获取当前元素的DOM。
        2、返回一个ref引用对象，在引用对象中的current属性存储一个非响应式的数据。

      useReducer的作用：
        1、useReducer也是用于管理状态的hook，与useState不同的是useReducer管理的是复杂状态逻辑。
        2、与useState不同的是useReducer接收一个reduce函数和一个初始化状态，返回一个状态变量和一个分发函数（dispatch函数）。例如：const [state, dispatch] = useReducer(reducer, { age: 18 });这里的dispatch用于分发动作，当触发不同的dispatch函数会传递给reduce函数中不同的action，根据不同的action触发相应的状态更新。
        3、由于reducer函数是根据不同的action去触发状态更新，所以useReducer更适合用于复杂的状态管理。

      useReducer的使用场景：
        1、一个复杂的任务列表：比如列表中有添加一项任务，更新任务的状态，删除一项任务，修改一项任务。例如：
        const initialTasks = [
          {id: 0, text: '参观卡夫卡博物馆', done: true},
          {id: 1, text: '看木偶戏', done: false},
          {id: 2, text: '打卡列侬墙', done: false}
        ]
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: 'useEffect对比useLayoutEffect的区别?',
      result: `
      执行时机不同：
        1、官方推荐使用useEffect，很少的场景会使用useLayoutEffect。useLayoutEffect 永远比 useEffect 先执行。
        2、useEffect是在DOM渲染完毕才会调用，也就是浏览器绘制页面完成，而且uesEffect是异步执行的，也就是在浏览器空闲的时候才会去调用，这样的好处就是不会阻塞浏览器的渲染过程。
        3、useLayoutEffect是在DOM 变更（React 的更新）后且浏览器绘制页面之前执行的，而且是同步执行的，会阻塞浏览器的渲染。
      
      使用场景及性能： 
        1、useEffect是异步执行的，使用场景比较广泛，比如初始化页面，数据获取，清理定时器，响应式数据的变化触发操作，DOM的操作，模拟生命周期。
        2、   
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: 'useEffect中怎样清除上一次的一个副作用?',
      result: `
      useEffect的作用是指定一个副作用函数，useEffect中传入两个参数，第一个参数是函数，第二个参数是依赖项数组。
      1、如果没有第二个参数，那么组件每一次渲染都会执行useEffect函数。
      2、如果传递第二个参数，会在组件第一次渲染的时候执行，同时当依赖项中任意一项发生改变的时候也会执行useEffect函数。
      3、在useEffect中清除定时器是一项常见的操作，具体的方法就是在useEffect的第第一个回调函数中return一个函数，在return的函数中执行清除定时器的操作。
      useEffect(() => {
        console.log("执行useEffect");
        const timer = setTimeout(() => {
          setCount(count + 1);
        }, 1000);
        return ()=>{
          console.log('卸载定时器');
          clearTimeout(timer)
        }
      }, []);
      `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: 'react中refs的作用是什么？',
      result: `
      作用：refs（引用）是一种特殊的属性，用于访问和交互React元素或组件的DOM节点或组件实例。
         `,
      type: 'react',

      difficulty: '★★★'
    },
    {
      title: 'react中useCallback和useMemo有什么区别？',
      result: `
      先说结论：useCallback用于缓存一个函数引用，useMemo用于缓存一个值。
      常见的场景：在react中当父组件向子组件传递一个固定的值，父组件更新会造成子组件重新渲染，这个时候可以使用react.memo()对子组件进行包裹，这样父组件渲染子组件就不会渲染，但是如果父组件传递过来的是一个函数，这个时候父组件渲染，子组件仍然会重新渲染，因为使用react.Mome()只会进行浅比较，而函数是引用数据类型。这个时候就需要使用useCallback包裹下传递的函数，并在useCallback第二个数组参数中传递依赖项，当依赖项发生改变的时候会更新子组件，如果没有更新则不会渲染子组件。
      react的useMemo用于缓存函数的计算结果，当当前函数的计算依赖项没有发生改变的时候，不会调用缓存的函数，这样就避免了大量的函数计算。
         `,
      type: 'react',

      difficulty: '★★★'
    },
    {
      title: 'react事件和html事件区别？',
      result: `
        1、命名上的区别：react事件一般称之为合成事件，命名一般采用小驼峰的形式，而原生事件一般都是全小写。
        2、函数处理的语法的上的区别：原生事件的函数一般是字符串的写法，例如：onclick="handleClick()"，而合成事件的写法是函数的形式写在花括号中，例如：onClick={handleClick}。
        3、阻止浏览器默认行为：在HTML事件中，可以通过return false的方式来阻止浏览器的默认行为。而在React事件中，必须明确地调用preventDefault()方法来阻止默认行为。
        4、事件管理机制：HTML事件是直接绑定在真实的DOM上的，每次DOM更新时，事件处理函数都会重新绑定。这可能导致性能问题，特别是在大型应用中。而React事件则采用合成事件（SyntheticEvent）机制，它在document级别上监听所有的事件，当事件发生时，React将事件内容封装并交由真正的处理函数运行。这种机制可以兼容所有浏览器，实现更好的跨平台性，并且可以避免频繁地创建和销毁事件对象，提升性能。
         `,
      type: 'react',

      difficulty: '★★★'
    },
    {
      title: 'react中的useState中为什么返回的是数组，而不是对象？',
      result: `
       这里和解构的特性相关，数组中的解构是根据下标依次进行解构的，而对象的解构是根据key进行解构，所以对象中的解构后需要重新命名，增加了代码的复杂度。
         `,
      type: 'react',

      difficulty: '★★★'
    },
    {
      title: 'react中组件通信的方式有哪些？redux和mobx的区别？',
      result: `
      传递数据的方式：
        1、通过props传递数据：父组件通过props将数据传递给子组件。
        2、传递回调函数的形式：父组件向子组件传递一个回调函数，子组件通过调用父组件的方法将参数传递给父组件。
        3、通过ref的形式，使用useRef可以放回一个current对象，对于普通的DOM元素使用ref绑定可以获取DOM对象，对于子组件使用ref绑定，需要在子外层包裹上forwardRef函数，表示允许父组件传递ref，同时需要使用useImperativeHandle暴露特定的方法和属性给父组件。
        4、在父级组件中使用createContext创建一个context对象，同时使用Provider组件包裹子组件，同时需要设置value属性，value是需要传递给后代组件的值，在子代组件中通过useContext Hook接收传递的value值。
        
      mobx的介绍：
        1、mobx4底层数据劫持使用的object.defineProperty,所以浏览器兼容性更好，mobx5底层使用的Proxy作为数据劫持，兼容性稍微差些，同时mobx5和4都使用的装饰器语法，但是mobx6默认放弃了装饰语法，但是也是可以启用的。
        
      mobx的工作流程：
        1、通过@observable装饰器定义一个响应式数据。当响应式数据发生改变的时候会重新去渲染视图。
        2、通过@action装饰器来封装状态更改的逻辑，在严格模式下要确保所有的更改都发生在action中。
        3、通过@computed装饰器可以定义计算属性。当依赖的数据发生改变时会自动重新计算。
        4、

      redux的介绍：
        1、  

      redux和mobx对比：
        1、redux有相对比较复杂的工作流程。mobx工作流程相对简单。
        2、redux中需要保证数据不可变，即不可以直接修改原来的数据，需要使用新的数据替换原来的数据，mobx中数据是响应式的，可以直接修改。
        3、redux中需要使用中间件处理异步，mobx可以直接处理异步。
        4、redux约束更强，适合大型的多人协作的项目，mobx相对灵活，适合中小项目，当然对于大型项目也可以使用，只是自身约束性相对差些。
         `,
      type: 'react',

      difficulty: '★★★'
    },
    {
      title: 'react中的setState中数据是同步更新还是异步更新？原理是什么？',
      result: `
        先说结论：在react的合成事件（像react中的onClick等都属于react自定义的合成事件）或者钩子函数中都是异步更新的，在原生事件或者定时器中是同步更新的，react中的setState异步更新的好处是不用每一次状态的改变都去更新state，如果每次状态改变都去更新state都会触发真实DOM的更新，会极大的消耗性能，但是等待所有的状态改变后一起更新，极大的节省了性能。具体原理如下：
        这里还是用最简单的语言让你理解：在 React 的 setState 函数实现中，会根据 isBatchingUpdates(默认是 false) 变量判断是否直接更新 this.state 还是放到队列中稍后更新。然后有一个 batchedUpdate 函数，可以修改 isBatchingUpdates 为 true，当 React 调用事件处理函数之前，或者生命周期函数之前就会调用 batchedUpdate 函数，这样的话，setState 就不会同步更新 this.state，而是放到更新队列里面后续更新。
        这样你就可以理解为什么原生事件和 setTimeout/setinterval 里面调用 this.state 会同步更新了吧，因为通过这些函数调用的 React 没办法去调用 batchedUpdate 函数将 isBatchingUpdates 设置为 true，那么这个时候 isBatchingUpdates 的时候默认就是 false，那么就会同步更新。
        如果想要在合成事件中拿到setState更新后state状态，可以在setState的第二个参数的回调函数中获取。
         `,
      type: 'react',

      difficulty: '★★★★'
    },
    {
      title: 'react中什么是受控组件及非受控组件？',
      result: `
        官方解释：我们推荐使用 受控组件 来处理表单数据。在一个受控组件中，表单数据是由 React 组件来管理的，也就是将状态存储在state中。另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。
        总结：受控组件就是可以被 react 状态控制的组件，非受控组件相反。
        非受控组件将真实数据储存在 DOM 节点中，所以在使用非受控组件时，有时候反而更容易同时集成 React 和非 React 代码。如果你不介意代码美观性，并且希望快速编写代码，使用非受控组件往往可以减少你的代码量。
         `,
      type: 'react',

      difficulty: '★★★'
    },
    {
      title: 'react的生命周期有哪些（旧）？',
      result: `
         初始化状态：
         constructor()     //初始化状态
         componentWillMount()    //组件即将被装载、渲染到页面上
         render()     // 渲染数据到页面  组件在这里生成虚拟的DOM节点
         componentDidMount()    //页面渲染完成，常用来发送请求，设置定时器等
        
         更新状态：
         componentWillReceiveProps()    //组件将要接收到属性的时候调用
         shouldComponentUpdate()      //组件是否更新  不写则react底层默认return一个true，如果写了必须return一个布尔值  如果是true则代表组件更新。如果是false则代表不更新，此时数据不会变化同时页面不会更新
         componentWillUpdate()  //组件将要更新
         render()   //组件更新
         componentDidUpdate()  //组件更新完成
        
         卸载状态：
         componentWillUnmount()  //组件将要被卸载，此时调用ReactDOM.unmountComponentAtNode(document.getElementById('text'))的方法，用于卸载组件，此时可以用于关闭定时器，关闭订阅者

         `,
      type: 'react',

      difficulty: '★★★★★'
    },
    {
      title: '说说对React中类组件和函数组件的理解？有什么区别？',
      result: `
        类组件是有状态的组件，可以定义自己的state，函数式组件默认是没有状态的，在hooks出现的时候可以使用useState去定义自己的状态。
        类组件中有自己的this，函数组件中没有this问题
        类组件中有生命周期，函数组件中没有生命周期，默认可以使用useEffect代替。
         `,
      type: 'react',

      difficulty: '★★★'
    },
    {
      title: 'react中state和prop的区别，改变state将对页面有什么影响？',
      result: `
        props 放初始化数据，是一个父组件传递给子组件的数据流，这个数据流可以一直传递到子孙组件，组件本身不能修改自己的 props。而 state 代表的是一个组件内部自身的状态，改变一个组件自身状态，从语义上来说，就是这个组件内部已经发生变化，有可能需要对此组件以及组件所包含的子孙组件进行重渲染。
         `,
      type: 'react',

      difficulty: '★★★'
    },
    {
      title: '讲讲React的hooks，有什么好处？有哪些常用的hook？',
      result: `
      hook的特点：react中的hooks是react16.8以后提出的新特性，它可以让你在不编写class组件的情况下使用state以及react的特性。具体的好处如下：
        1、代码的复用性和组合更加简单。
        2、Hooks提供了如useState和useReducer等状态管理Hook，使得在函数组件中管理组件的状态变得更加简单和直观。
        3、副作用管理：hooks中提供了useEffect以及useLayoutEffect的hooks函数，让数据的获取，dom的更新更加的直观和简洁。

      常见的hooks：
        1、useState：用于在函数组件中添加本地状态。它返回一个状态变量和一个更新该状态的函数。
        2、useEffect：用于在函数组件中执行副作用操作。它类似于class组件中的componentDidMount、componentDidUpdate和componentWillUnmount这三个生命周期方法的组合。
        3、useContext：用于在组件树中共享值，使得不必显式地通过组件树的每一层来传递props。
        4、useReducer：用于管理更复杂的本地状态逻辑，它接受一个reducer函数和一个初始的state，并返回一个当前的state以及一个dispatch方法。
        5、useRef：第一个作用是获取当前元素的DOM对象，第二个作用是设置或者更新一个不需要DOM渲染的响应式的值。
        6、useCallback：缓存一个函数的引用。常用于需要进行复杂的逻辑运算中。
        7、useMemo：缓存一个值，useMemo中也是传入两个参数，第一个参数是回调函数，第二个参数是一个依赖项，只有当依赖项发生改变的时候才会去执行回调函数。
        
         `,
      type: 'react',

      difficulty: '★★★'
    }
  ]
}
