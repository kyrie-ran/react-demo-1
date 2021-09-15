import React, { Component } from 'react'

export default class About extends Component {
    jump = () => {
        const {push} = this.props.history;
        push('/login');
    }
    
    render() {
        return (
            <div>
                about
                <button onClick={this.jump}>跳转登录页</button>
            </div>
        )
    }
}
