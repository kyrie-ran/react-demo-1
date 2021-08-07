import React, { Component } from 'react'

export default class Event extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }
    handleClick = () => {
        // this.setState({
        //     isLoggedIn: !this.state.isLoggedIn
        // },() => {
        //     console.log(this.state.isLoggedIn);
        // });
        this.setState((state) => ({
            isLoggedIn: !state.isLoggedIn
        }));
    }
    render() {
        return (
            <div>
                {this.state.isLoggedIn ? '登录' : '退出'}
                <button onClick={this.handleClick}>点击</button>
            </div>
        )
    }
}
