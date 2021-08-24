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