import React, { Component } from 'react'
// Context 可以让我们无需明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 text 创建一个context ("新的按钮文本"为默认值)。
const BtnTextContext = React.createContext('新的按钮文本');

class Button extends React.Component {
    render(){
        return <button>{this.props.text}</button>
    }
}

class TextButton extends React.Component {
    // 指定 contextType 读取当前的 BtnTextContext。
    // React 会往上找到最近的 BtnTextContext Provider,然后使用它的值。
    // 在这个例子中，当前的 text 值为 ”按钮“
    static contextType = BtnTextContext;
    render(){
        return <Button text={this.context} />
    }
}

function Toolbar(){
    return (
        <div>
            <TextButton />
        </div>
    )
}


export default class MyContext extends Component {
    render() {
        // 使用一个 Provider 来将当前的 text 传递给以下的组件树。
        // 无论多深，任何组件都能读取这个值。
        // 在这个例子中，我们将”按钮“作为当前的值传递下去
        return (
            <div>
                <BtnTextContext.Provider value="value">
                    <Toolbar />
                </BtnTextContext.Provider>
            </div>
        )
    }
}
