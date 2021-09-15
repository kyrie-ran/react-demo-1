import React, { Component } from 'react'

export default class About extends Component {
    jump = () => {
        const {push} = this.props.history;
        push('/login');
    }
    
    render() {
        const {id} = this.props.match.params;
        return (
            <div>
                about {id}
                <button onClick={this.jump}>跳转登录页</button>
            </div>
        )
    }
}
