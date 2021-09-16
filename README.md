## State
### 1.不要直接修改State
    this.state.comment = 'Hello';  //此代码不会重新渲染组件
    而是使用setState();
    this.setState({comment: 'Hello'});
    构造函数是唯一可以给this.state 赋值的地方
### 2. State 的更新可能是异步的
**总结：setState本身并不是异步，只是因为react的性能优化机制体现为异步。 在react的生命周期函数或者作用域下为异步，在原生的环境下为同步**
出于性能考虑，React可能会把多个setState()调用合并成一个调用。
this.props 和 this.state 可能会异步更新，所以不要依赖他们的值来更新下一个状态
``` js
    this.setState({
        counter: this.state.counter + this.props.increment
    });
```
    上面这段代码可能会无法更新计数器

    要解决这个问题，可以让setState()接收一个函数而不是一个对象。这个函数用上一个state作为第一个参数，将此次更新被应用时的props做为第二个参数：
```js
    this.setState((state,props) => ({
        counter: state.counter + props.increment
    }))
```
### 3. State 的更新会被合并
``` js
// 当你调用setState() 的时候，React会把你的提供的对象合并当前的state。
// 例如，你的state包含几个独立变量
constructor(props){
    super(props);
    this.state = {
        posts: [],
        comments: []
    }
}
// 分别调用setState()来单独地更新它们
componentDidMount() {
    fetchPosts().then(response => {
    this.setState({
        posts: response.posts
    });
    });

    fetchComments().then(response => {
    this.setState({
        comments: response.comments
    });
    }); 
}
```
这里的合并是浅合并，所以 this.setState({comments}) 完整保留了 this.state.posts， 但是完全替换了 this.state.comments。

## 事件处理
react中不能通过返回false的方式阻止默认行为。你必须显式的使用preventDefault。
绑定事件的时候，注意this指向。

## 函数式组件和类组件的区别
1. 函数式组件没有state
2. 函数式组件没有this
3. 函数式组件没有 生命周期

## propTypes 验证
项目中默认使用 Flow 或者 Typescript 那么直接就可以进行类型验证
否则 也可以通过 prop-types 库来进行参数验证

> 从react v15.5开始，React.PropTypes 已移入另一个包中：prop-types 库

## classnames  可以方便的动态更改classname

## react 更新流程
props/state改变 --> render函数重新执行 --> 产生新的虚拟dom树 --> 新旧dom树进行diff --> 计算出差异更新 --> 更新到真的dom

## context
### API
- React.createContext
```js
    const MyContext = React.createContext(defaultValue);
```
创建一个Context对象。这个组件会从组件树中离自身最近的那个匹配 Provider 中读取当前的context值。
> 注意1： 只有当组件自身所处的树中没有匹配到 Provider 时，其defaultValue 参数才会生效。此默认值有助于在不使用 Provider 包装组件的情况下对组件进行测试。
> 注意2： 将undefined传递给 Provider 的value时，消费组件的 defaultValue 不会生效。

- Context.Provider
```js
    <MyContext.Provider value={/* 某个值 */}>
        {/*内容*/}
    </MyContext.Provider>
```
每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
Provider 接收一个 value 属性，传递给消费组件。一个Provider 可以和多个消费组件有对应关系。多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。
> 注意：当Provider 的value 值发生变化时，它内部的所有消费组件都会重新渲染。Provider 及其内部consumer 组件都不受制于 shouldComponentUpdate 函数，因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。

- Class.contextType
```js
    class MyClass extends React.Component {
        static contextType = MyContext;
    }
```
挂载在class 上的 从contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。此属性能让你使用
this.context 来使用最近Context 上的那个值。你可以在任何生命周期中访问打它，包括render

- Context.Consumer
```js
    <MyContext.Consumer>
        {value => /* 基于 context 值进行渲染 */}
    </MyContext.Consumer>
```
一个React 组件可以订阅 context 的变更，此组件可以让你在 函数式组件 中可以订阅 context。

- Context.displayName
context 对象接受一个名为 displayName 的property， 类型为字符串。React DevTools 使用该字符串来确定 context 要显示的内容
下述组件在 DevTools 中将显示为 MyDisplayName：
```js
    const MyContext = React.createContext(/* some value */);
    MyContext.displayName = 'MyDisplayName';

    <MyContext.Provider> // "MyDisplayName.Provider" 在 DevTools 中
    <MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中
```

## Refs
当ref属性用于HTML元素时，构造函数中使用 React.createRef() 创建 ref 接收底层DOM元素作为其 current 属性。
当ref 属性用于自定义class 组件时，ref 对象接收组件的挂载实例作为其current属性。
你不能在函数组件上使用ref属性，因为他们没有实例。

## 高阶组件 & 高阶函数
- 高阶函数（Higher-order function）
满足一种条件即可：1. 接收一个或多个函数作为输入; 2. 输出一个函数
比较常见的 filter map reduce 都是高阶函数
- 高阶组件（Higher-order components）,简称为HOC
官方的定义：高阶组件是参数作为组件，返回值为新组件的函数。
高阶组件本身不是一个组件，而是一个函数；这个函数的参数是一个组件，返回值也是一个组件

## Redux
- 核心概念
    1. state 存放数据
    2. action 更新数据
        - 所有数据的变化，必须通过派发(dispatch) action来更新。
        - action 是一个普通js对象，用来描述这次更新的type和content
        - 强制使用 action 的好处 是可以清晰的知道数据到底发生了什么样的变化，所有的数据变化都是可追踪、可预测的；
    3. reducer
        - 将 state 和 action 联系在一起
        - reducer是一个纯函数
        - reducer做的事情就是将传入的state和action结合起来生成一个新的state
- 三大原则
    1. 单一数据流
        - 整个应用程序的state存储在一颗object tree中，并且这个object tree中存储在一个store中；
        - Redux 并没有强制让我们不能创建多个Store，但是那样做不利于维护
        - 单一的数据源可以让整个应用程序的state变得方便维护、追踪、修改；
    2. State是只读的
        - 唯一修改State的方法一定是触发action，不要试图在其他地方通过任何的方式来修改State
        - 这样就确保了view或网络请求都不能直接修改state，它们只能通过action来描述自己想要如何修改state
        - 这样可以保证所有的修改都被集中化处理，并且按照严格的顺序来执行，所有不需要担心race condition(竟态)的问题；
    3. 使用纯函数来执行修改
        - 通过reducer将 旧state和action 联系在一起，并且返回一个新的state
        - 随着应用程序的复杂度增加，我们可以将reducer拆分成多个小的reducers，分别操作不同state tree的一部分
        - 但是所有的reducer都应该是纯函数，不能产生任何的副作用

## 生命周期
- 挂载
    - 当组件实例被创建并插入DOM中时，其生命周期调用顺序如下：
        - constructor()
        - static getDerivedStateFromProps()
        - render()
        - componentDidMount() 组件挂载之后
- 更新
    - 当组件的props或state发生变化时会触发更新。组件更新的生命周期调用顺序如下：
        - static getDerivedStateFromProps()
        - shouldComponentUpdate()
        - render()
        - getSnapshotBeforeUpdate()
        - componentDidUpdate() 组件更新之后
- 卸载
    - 当组件从DOM中移出时
        - componentWillUnmount() 组件卸载或销毁之前调用
- 错误处理
    - 当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：
        - static getDerivedStateFromError()
        - componentDidCatch()

> getDerivedStateFromProps(props,state) 会在调用render方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新state，如果返回null则不更新任何内容。

> getSnapshotBeforeUpdate(prevProps, prevState) 在最近一次渲染输出（提交DOM节点）之前调用。它使得组件能在发生改变之前从DOM中捕获一些信息（例如，滚动位置），此生命周期方法的任何返回值作为参数传递给 componentDidUpdate()
